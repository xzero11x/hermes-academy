/**
 * ModalManager - Sistema profesional de modales para reemplazar alert/prompt/confirm
 * Mantiene la misma API para preservar la funcionalidad existente
 */

class ModalManager {
  constructor() {
    this.modals = new Map();
    this.zIndexBase = 10000;
    this.currentZIndex = this.zIndexBase;
    this.init();
  }

  init() {
    // Crear contenedor de modales si no existe
    if (!document.getElementById('modal-container')) {
      const container = document.createElement('div');
      container.id = 'modal-container';
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: ${this.zIndexBase};
      `;
      document.body.appendChild(container);
    }
  }

  // Reemplaza alert()
  alert(message, title = 'Información') {
    return new Promise((resolve) => {
      const modalId = this.createModal({
        type: 'alert',
        title,
        message,
        buttons: [
          {
            text: 'Aceptar',
            class: 'btn-primary',
            action: () => {
              this.closeModal(modalId);
              resolve();
            }
          }
        ]
      });
    });
  }

  // Reemplaza confirm()
  confirm(message, title = 'Confirmación') {
    return new Promise((resolve) => {
      const modalId = this.createModal({
        type: 'confirm',
        title,
        message,
        buttons: [
          {
            text: 'Cancelar',
            class: 'btn-secondary',
            action: () => {
              this.closeModal(modalId);
              resolve(false);
            }
          },
          {
            text: 'Aceptar',
            class: 'btn-primary',
            action: () => {
              this.closeModal(modalId);
              resolve(true);
            }
          }
        ]
      });
    });
  }

  // Reemplaza prompt()
  prompt(message, defaultValue = '', title = 'Entrada de datos') {
    return new Promise((resolve) => {
      const modalId = this.createModal({
        type: 'prompt',
        title,
        message,
        defaultValue,
        buttons: [
          {
            text: 'Cancelar',
            class: 'btn-secondary',
            action: () => {
              this.closeModal(modalId);
              resolve(null);
            }
          },
          {
            text: 'Aceptar',
            class: 'btn-primary',
            action: () => {
              const input = document.querySelector(`#${modalId} .modal-input`);
              const value = input ? input.value : null;
              this.closeModal(modalId);
              resolve(value);
            }
          }
        ]
      });
    });
  }

  // Modal personalizado para contraoferta
  counterOfferModal(courseName, currentPrice, isStudent = false, tutorPrice = null) {
    return new Promise((resolve) => {
      const title = isStudent ? 'Nueva Contraoferta' : 'Contraoferta';
      let message = `<div class="counter-offer-info">
        <div class="course-info">
          <i class="fas fa-book"></i>
          <span><strong>${courseName}</strong></span>
        </div>`;

      if (isStudent && tutorPrice) {
        message += `
        <div class="price-comparison">
          <div class="price-item original">
            <span class="label">Tu oferta original:</span>
            <span class="price">S/ ${currentPrice}/hora</span>
          </div>
          <div class="price-item counter">
            <span class="label">Contraoferta del tutor:</span>
            <span class="price">S/ ${tutorPrice}/hora</span>
          </div>
        </div>`;
      } else {
        message += `
        <div class="price-comparison">
          <div class="price-item">
            <span class="label">Oferta del estudiante:</span>
            <span class="price">S/ ${currentPrice}/hora</span>
          </div>
        </div>`;
      }

      message += `
        <div class="input-section">
          <label for="counter-price">Tu ${isStudent ? 'nueva ' : ''}contraoferta:</label>
          <div class="price-input-group">
            <span class="currency">S/</span>
            <input type="number" id="counter-price" class="modal-input price-input" 
                   value="${isStudent ? (tutorPrice - 2) : (currentPrice + 5)}" 
                   min="1" step="0.50" placeholder="0.00">
            <span class="per-hour">/hora</span>
          </div>
        </div>
      </div>`;

      const modalId = this.createModal({
        type: 'counter-offer',
        title,
        message,
        customClass: 'counter-offer-modal',
        buttons: [
          {
            text: 'Cancelar',
            class: 'btn-secondary',
            action: () => {
              this.closeModal(modalId);
              resolve(null);
            }
          },
          {
            text: 'Enviar Contraoferta',
            class: 'btn-primary',
            action: () => {
              const input = document.querySelector(`#${modalId} #counter-price`);
              const value = input ? parseFloat(input.value) : null;

              if (!value || value <= 0) {
                this.showValidationError(input, 'Debe ser un número mayor a 0');
                return;
              }

              this.closeModal(modalId);
              resolve(value);
            }
          }
        ]
      });
    });
  }

  // Modal de confirmación de contraoferta
  confirmCounterOffer(courseName, finalPrice, isAcceptance = true) {
    return new Promise((resolve) => {
      const title = isAcceptance ? 'Confirmar Aceptación' : 'Confirmar Rechazo';
      const message = `
        <div class="confirmation-info">
          <div class="course-info">
            <i class="fas fa-book"></i>
            <span><strong>${courseName}</strong></span>
          </div>
          <div class="action-summary ${isAcceptance ? 'accept' : 'reject'}">
            <i class="fas fa-${isAcceptance ? 'check-circle' : 'times-circle'}"></i>
            <div class="action-text">
              ${isAcceptance
          ? `<p>Vas a <strong>aceptar</strong> la contraoferta</p>
                   <p class="final-price">Precio final: <strong>S/ ${finalPrice}/hora</strong></p>
                   <p class="note">Esta acción confirmará la tutoría</p>`
          : `<p>Vas a <strong>rechazar</strong> la contraoferta</p>
                   <p class="note">Esta acción terminará la negociación</p>`
        }
            </div>
          </div>
        </div>
      `;

      const modalId = this.createModal({
        type: 'confirmation',
        title,
        message,
        customClass: `confirmation-modal ${isAcceptance ? 'accept' : 'reject'}`,
        buttons: [
          {
            text: 'Cancelar',
            class: 'btn-secondary',
            action: () => {
              this.closeModal(modalId);
              resolve(false);
            }
          },
          {
            text: isAcceptance ? 'Confirmar Aceptación' : 'Confirmar Rechazo',
            class: isAcceptance ? 'btn-success' : 'btn-danger',
            action: () => {
              this.closeModal(modalId);
              resolve(true);
            }
          }
        ]
      });
    });
  }

  createModal({ type, title, message, defaultValue = '', buttons = [], customClass = '' }) {
    const modalId = `modal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    this.currentZIndex += 10;

    const overlay = document.createElement('div');
    overlay.className = `modal-overlay ${type}-modal ${customClass}`;
    overlay.id = modalId;
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: ${this.currentZIndex};
      pointer-events: all;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    const modal = document.createElement('div');
    modal.className = `modal ${type}`;
    modal.style.cssText = `
      background: white;
      border-radius: 12px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow: hidden;
      transform: scale(0.9) translateY(20px);
      transition: transform 0.3s ease;
    `;

    // Header del modal
    const header = document.createElement('div');
    header.className = 'modal-header';
    header.style.cssText = `
      padding: 1.5rem 1.5rem 0;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 1rem;
    `;
    header.innerHTML = `
      <h3 style="margin: 0; color: #1e293b; font-size: 1.25rem; font-weight: 600;">
        ${title}
      </h3>
    `;

    // Cuerpo del modal
    const body = document.createElement('div');
    body.className = 'modal-body';
    body.style.cssText = `
      padding: 0 1.5rem 1.5rem;
    `;

    // Contenido del mensaje
    const messageEl = document.createElement('div');
    messageEl.className = 'modal-message';
    messageEl.style.cssText = `
      color: #475569;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    `;
    messageEl.innerHTML = message;

    // Input para prompt
    if (type === 'prompt' || type === 'counter-offer') {
      if (type === 'prompt') {
        const inputGroup = document.createElement('div');
        inputGroup.style.cssText = `margin-bottom: 1.5rem;`;

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'modal-input';
        input.value = defaultValue;
        input.style.cssText = `
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        `;

        input.addEventListener('focus', () => {
          input.style.borderColor = '#6366f1';
          input.style.outline = 'none';
          input.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
        });

        input.addEventListener('blur', () => {
          input.style.borderColor = '#d1d5db';
          input.style.boxShadow = 'none';
        });

        inputGroup.appendChild(input);
        body.appendChild(header);
        body.appendChild(messageEl);
        body.appendChild(inputGroup);
      } else {
        body.appendChild(header);
        body.appendChild(messageEl);
      }
    } else {
      body.appendChild(header);
      body.appendChild(messageEl);
    }

    // Footer con botones
    const footer = document.createElement('div');
    footer.className = 'modal-footer';
    footer.style.cssText = `
      padding: 0 1.5rem 1.5rem;
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    `;

    buttons.forEach(button => {
      const btn = document.createElement('button');
      btn.textContent = button.text;
      btn.className = `modal-btn ${button.class}`;
      btn.style.cssText = this.getButtonStyles(button.class);
      btn.addEventListener('click', button.action);
      footer.appendChild(btn);
    });

    body.appendChild(footer);
    modal.appendChild(body);
    overlay.appendChild(modal);

    // Cerrar con ESC o click fuera
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        buttons[0]?.action(); // Ejecutar acción del primer botón (cancelar)
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modals.has(modalId)) {
        buttons[0]?.action();
      }
    });

    // Agregar al contenedor y mostrar
    const container = document.getElementById('modal-container');
    container.appendChild(overlay);
    this.modals.set(modalId, overlay);

    // Animar entrada
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      modal.style.transform = 'scale(1) translateY(0)';
    });

    // Focus en input si existe
    setTimeout(() => {
      const input = overlay.querySelector('.modal-input');
      if (input) {
        input.focus();
        if (input.type === 'text') {
          input.select();
        }
      }
    }, 100);

    return modalId;
  }

  closeModal(modalId) {
    const modal = this.modals.get(modalId);
    if (modal) {
      modal.style.opacity = '0';
      modal.querySelector('.modal').style.transform = 'scale(0.9) translateY(20px)';

      setTimeout(() => {
        modal.remove();
        this.modals.delete(modalId);
      }, 300);
    }
  }

  getButtonStyles(className) {
    const baseStyles = `
      padding: 0.625rem 1.25rem;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 80px;
    `;

    const variants = {
      'btn-primary': `
        background: #6366f1;
        color: white;
      `,
      'btn-secondary': `
        background: #f1f5f9;
        color: #475569;
        border: 1px solid #d1d5db;
      `,
      'btn-success': `
        background: #10b981;
        color: white;
      `,
      'btn-danger': `
        background: #ef4444;
        color: white;
      `
    };

    return baseStyles + (variants[className] || variants['btn-secondary']);
  }

  showValidationError(input, message) {
    input.style.borderColor = '#ef4444';
    input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';

    // Crear tooltip de error
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
      position: absolute;
      background: #ef4444;
      color: white;
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      margin-top: 0.25rem;
      z-index: 99999;
    `;
    tooltip.textContent = message;

    input.parentNode.appendChild(tooltip);

    setTimeout(() => {
      tooltip.remove();
      input.style.borderColor = '#d1d5db';
      input.style.boxShadow = 'none';
    }, 3000);
  }
}

// Crear instancia global
window.modalManager = new ModalManager();

// Exportar para uso en módulos
export default ModalManager;
