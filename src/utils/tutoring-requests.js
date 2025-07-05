// Sistema de Solicitudes de Tutoría
// Maneja todo el flujo de solicitudes, respuestas y negociaciones

class TutoringRequestManager {
  constructor() {
    this.requestsKey = 'hermesTutoringRequests';
    this.notificationsKey = 'hermesNotifications';
  }

  // Obtener todas las solicitudes
  getAllRequests() {
    const requests = localStorage.getItem(this.requestsKey);
    return requests ? JSON.parse(requests) : [];
  }

  // Guardar solicitudes
  saveRequests(requests) {
    localStorage.setItem(this.requestsKey, JSON.stringify(requests));
  }

  // Obtener notificaciones
  getNotifications() {
    const notifications = localStorage.getItem(this.notificationsKey);
    return notifications ? JSON.parse(notifications) : [];
  }

  // Guardar notificaciones
  saveNotifications(notifications) {
    localStorage.setItem(this.notificationsKey, JSON.stringify(notifications));
  }

  // Enviar nueva solicitud de tutoría
  sendTutoringRequest(studentId, tutorId, courseId, requestData) {
    const requests = this.getAllRequests();
    const notifications = this.getNotifications();

    // Obtener el nombre del curso si no se proporciona
    const courseName = requestData.courseName || this.getCourseName(courseId);

    // Crear nueva solicitud
    const newRequest = {
      id: 'REQ_' + Date.now(),
      studentId: studentId,
      tutorId: tutorId,
      courseId: courseId,
      courseName: courseName, // Agregar nombre del curso
      studentOfferedPrice: requestData.offeredPrice,
      sessionDate: requestData.sessionDate,
      sessionTime: requestData.sessionTime,
      duration: requestData.duration || 60,
      status: 'pending',
      message: requestData.message || '',
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };

    // Agregar a la lista de solicitudes
    requests.push(newRequest);
    this.saveRequests(requests);

    // Crear notificación para el tutor
    const tutorNotification = {
      id: 'NOT_' + Date.now(),
      userId: tutorId,
      type: 'tutoring_request',
      title: 'Nueva solicitud de tutoría',
      message: `${requestData.studentName} quiere clases de ${courseName} por S/. ${requestData.offeredPrice}/hora`,
      data: {
        requestId: newRequest.id,
        studentId: studentId,
        studentName: requestData.studentName,
        courseName: courseName,
        courseCode: requestData.courseCode,
        offeredPrice: requestData.offeredPrice,
        requestedDate: requestData.sessionDate,
        requestedTime: requestData.sessionTime,
        duration: requestData.duration,
        message: requestData.message
      },
      isRead: false,
      createdAt: new Date().toISOString()
    };

    notifications.push(tutorNotification);
    this.saveNotifications(notifications);

    return {
      success: true,
      requestId: newRequest.id,
      message: 'Solicitud enviada exitosamente'
    };
  }

  // Obtener solicitudes para un tutor específico
  getRequestsForTutor(tutorId) {
    const requests = this.getAllRequests();
    return requests.filter(request =>
      request.tutorId === tutorId &&
      (request.status === 'pending' || request.status === 'counter_offer')
    );
  }

  // Obtener solicitudes para un estudiante específico
  getRequestsForStudent(studentId) {
    const requests = this.getAllRequests();
    return requests.filter(request => request.studentId === studentId);
  }

  // Responder a una solicitud (tutor)
  respondToRequest(requestId, tutorId, action, data = {}) {
    const requests = this.getAllRequests();
    const notifications = this.getNotifications();

    const requestIndex = requests.findIndex(r => r.id === requestId && r.tutorId === tutorId);

    if (requestIndex === -1) {
      return { success: false, error: 'Solicitud no encontrada' };
    }

    const request = requests[requestIndex];
    let notificationTitle = '';
    let notificationMessage = '';
    let notificationType = '';

    switch (action) {
      case 'accept':
        request.status = 'accepted';
        request.finalPrice = request.studentOfferedPrice;
        notificationTitle = 'Solicitud aceptada';
        notificationMessage = `${data.tutorName} aceptó tu oferta de S/. ${request.studentOfferedPrice}/hora`;
        notificationType = 'tutoring_accepted';

        // Crear tutoría programada
        this.createScheduledTutoring(request, data.tutorName);
        break;

      case 'reject':
        request.status = 'rejected';
        request.rejectionReason = data.reason || 'Sin razón especificada';
        notificationTitle = 'Solicitud rechazada';
        notificationMessage = `${data.tutorName} rechazó tu solicitud de tutoría`;
        notificationType = 'tutoring_rejected';
        break;

      case 'counter_offer':
        request.status = 'counter_offer';
        request.tutorCounterPrice = data.counterPrice;
        request.tutorMessage = data.message || '';
        notificationTitle = 'Contraoferta recibida';
        notificationMessage = `${data.tutorName} propone S/. ${data.counterPrice}/hora (Tu oferta: S/. ${request.studentOfferedPrice}/hora)`;
        notificationType = 'counter_offer';
        break;

      default:
        return { success: false, error: 'Acción no válida' };
    }

    request.lastUpdated = new Date().toISOString();
    requests[requestIndex] = request;
    this.saveRequests(requests);

    // Crear notificación para el estudiante
    const studentNotification = {
      id: 'NOT_' + Date.now(),
      userId: request.studentId,
      type: notificationType,
      title: notificationTitle,
      message: notificationMessage,
      data: {
        requestId: request.id,
        tutorId: tutorId,
        tutorName: data.tutorName,
        courseName: data.courseName,
        studentOfferedPrice: request.studentOfferedPrice,
        tutorCounterPrice: request.tutorCounterPrice || null,
        finalPrice: request.finalPrice || null,
        sessionDate: request.sessionDate,
        sessionTime: request.sessionTime,
        tutorMessage: request.tutorMessage || '',
        rejectionReason: request.rejectionReason || ''
      },
      isRead: false,
      createdAt: new Date().toISOString()
    };

    notifications.push(studentNotification);
    this.saveNotifications(notifications);

    return {
      success: true,
      message: `Solicitud ${action === 'counter_offer' ? 'respondida con contraoferta' : action === 'accept' ? 'aceptada' : 'rechazada'} exitosamente`
    };
  }

  // Responder a contraoferta (estudiante)
  respondToCounterOffer(requestId, studentId, action, data = {}) {
    const requests = this.getAllRequests();
    const notifications = this.getNotifications();

    const requestIndex = requests.findIndex(r => r.id === requestId && r.studentId === studentId);

    if (requestIndex === -1) {
      return { success: false, error: 'Solicitud no encontrada' };
    }

    const request = requests[requestIndex];
    let notificationTitle = '';
    let notificationMessage = '';

    if (action === 'accept_counter') {
      request.status = 'accepted';
      request.finalPrice = request.tutorCounterPrice;
      notificationTitle = 'Contraoferta aceptada';
      notificationMessage = `${data.studentName} aceptó tu contraoferta de S/. ${request.tutorCounterPrice}/hora`;

      // Crear tutoría programada
      this.createScheduledTutoring(request, data.tutorName);

    } else if (action === 'reject_counter') {
      request.status = 'rejected';
      notificationTitle = 'Contraoferta rechazada';
      notificationMessage = `${data.studentName} rechazó tu contraoferta`;
    }

    request.lastUpdated = new Date().toISOString();
    requests[requestIndex] = request;
    this.saveRequests(requests);

    // Crear notificación para el tutor
    const tutorNotification = {
      id: 'NOT_' + Date.now(),
      userId: request.tutorId,
      type: action === 'accept_counter' ? 'tutoring_confirmed' : 'counter_offer_rejected',
      title: notificationTitle,
      message: notificationMessage,
      data: {
        requestId: request.id,
        studentId: studentId,
        studentName: data.studentName,
        courseName: data.courseName,
        finalPrice: request.finalPrice || null,
        sessionDate: request.sessionDate,
        sessionTime: request.sessionTime
      },
      isRead: false,
      createdAt: new Date().toISOString()
    };

    notifications.push(tutorNotification);
    this.saveNotifications(notifications);

    return {
      success: true,
      message: action === 'accept_counter' ? 'Contraoferta aceptada, tutoría programada' : 'Contraoferta rechazada'
    };
  }

  // Crear tutoría programada
  createScheduledTutoring(request, tutorName) {
    // Obtener usuario estudiante y agregar tutoría a su lista
    const auth = window.auth;
    const users = auth.getUsers();
    const studentIndex = users.findIndex(u => u.id === request.studentId);

    if (studentIndex !== -1) {
      if (!users[studentIndex].scheduledTutorings) {
        users[studentIndex].scheduledTutorings = [];
      }

      const newTutoring = {
        id: 'TUT_' + Date.now(),
        tutorId: request.tutorId,
        tutorName: tutorName,
        courseId: request.courseId,
        courseName: request.data?.courseName || 'Curso no especificado',
        courseCode: request.data?.courseCode || 'CS2001',
        date: request.sessionDate,
        time: request.sessionTime,
        duration: request.duration,
        price: request.finalPrice,
        status: 'confirmed',
        sessionType: 'online',
        meetingLink: `https://hermes-academy.com/room/${Date.now()}`,
        confirmedAt: new Date().toISOString(),
        requestId: request.id
      };

      users[studentIndex].scheduledTutorings.push(newTutoring);
      auth.saveUsers(users);

      // Crear notificación de confirmación para ambos
      const notifications = this.getNotifications();

      // Para el estudiante
      notifications.push({
        id: 'NOT_' + Date.now() + '_CONF_S',
        userId: request.studentId,
        type: 'tutoring_confirmed',
        title: 'Tutoría confirmada',
        message: `Tu tutoría con ${tutorName} ha sido confirmada para el ${request.sessionDate} a las ${request.sessionTime}`,
        data: {
          tutoringId: newTutoring.id,
          tutorName: tutorName,
          courseName: newTutoring.courseName,
          date: request.sessionDate,
          time: request.sessionTime,
          price: request.finalPrice,
          meetingLink: newTutoring.meetingLink
        },
        isRead: false,
        createdAt: new Date().toISOString()
      });

      this.saveNotifications(notifications);
    }
  }

  // Obtener datos del tutor y curso para mostrar en solicitudes
  getTutorAndCourseData(tutorId, courseId) {
    // Buscar en los datos de tutors_new.js
    const tutorsData = window.tutorsData || [];
    const coursesData = window.coursesData || [];

    const tutor = tutorsData.find(t => t.id === tutorId);
    const course = coursesData.find(c => c.id === courseId);

    return {
      tutor: tutor || null,
      course: course || null
    };
  }

  // Obtener nombre del curso por ID
  getCourseName(courseId) {
    // Datos simplificados de cursos para UTEC (los más comunes)
    const courses = [
      { id: 1, name: "Cálculo de una Variable" },
      { id: 2, name: "Introducción a la Mecánica" },
      { id: 3, name: "Química General" },
      { id: 18, name: "Ecuaciones Diferenciales" }
    ];

    const course = courses.find(c => c.id === courseId);
    return course ? course.name : 'Curso no encontrado';
  }
}

// Crear instancia global
window.tutoringRequestManager = new TutoringRequestManager();
