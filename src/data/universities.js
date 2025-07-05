/**
 * UNIVERSIDADES - Estructura mejorada
 * 
 * Modelo base de datos para las universidades en la plataforma
 * Una universidad es la entidad principal que agrupa cursos y tutores
 */

export const universities = [
  {
    id: 1,
    name: "Universidad de Ingeniería y Tecnología",
    shortName: "UTEC",
    logo: "/universidades/utec.jpg",
    type: "privada", // 'publica' | 'privada'
    location: {
      city: "Lima",
      district: "Barranco",
      address: "Jr. Medrano Silva 165, Barranco 15063"
    },
    founded: 2011,
    description: "Universidad privada especializada en ingeniería y tecnología con enfoque innovador",
    website: "https://utec.edu.pe",
    contact: {
      phone: "(01) 230-5000",
      email: "admision@utec.edu.pe"
    },
    stats: {
      rating: 4.6,
      studentsCount: 4500,
      facultiesCount: 2,
      careersCount: 12
    },
    accreditation: {
      sunedu: true,
      international: ["ABET"]
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  },
  {
    id: 3,
    name: "Pontificia Universidad Católica del Perú",
    shortName: "PUCP",
    logo: "/universidades/pucp.png",
    type: "privada",
    location: {
      city: "Lima",
      district: "San Miguel",
      address: "Av. Universitaria 1801, San Miguel 15088"
    },
    founded: 1917,
    description: "Universidad católica con excelencia académica y formación integral",
    website: "https://pucp.edu.pe",
    contact: {
      phone: "(01) 626-2000",
      email: "postmaster@pucp.edu.pe"
    },
    stats: {
      rating: 4.7,
      studentsCount: 24000,
      facultiesCount: 13,
      careersCount: 40
    },
    accreditation: {
      sunedu: true,
      international: ["EQUIS", "AACSB"]
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  },
  {
    id: 4,
    name: "Universidad Nacional de Ingeniería",
    shortName: "UNI",
    logo: "/universidades/uni.png",
    type: "publica",
    location: {
      city: "Lima",
      district: "Rímac",
      address: "Av. Túpac Amaru 210, Rímac 15333"
    },
    founded: 1876,
    description: "Universidad líder en ingeniería y arquitectura en el Perú",
    website: "https://uni.edu.pe",
    contact: {
      phone: "(01) 481-1070",
      email: "informes@uni.edu.pe"
    },
    stats: {
      rating: 4.5,
      studentsCount: 18000,
      facultiesCount: 11,
      careersCount: 28
    },
    accreditation: {
      sunedu: true,
      international: ["ABET"]
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  },
  {
    id: 5,
    name: "Universidad de Lima",
    shortName: "UL",
    logo: "/universidades/u_de_lima.png",
    type: "privada",
    location: {
      city: "Lima",
      district: "Santiago de Surco",
      address: "Av. Javier Prado Este 4600, Santiago de Surco 15023"
    },
    founded: 1962,
    description: "Universidad privada con enfoque en negocios, humanidades e ingeniería",
    website: "https://ulima.edu.pe",
    contact: {
      phone: "(01) 437-6767",
      email: "webmaster@ulima.edu.pe"
    },
    stats: {
      rating: 4.3,
      studentsCount: 16000,
      facultiesCount: 3,
      careersCount: 15
    },
    accreditation: {
      sunedu: true,
      international: ["AACSB"]
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  },
  {
    id: 7,
    name: "Universidad César Vallejo",
    shortName: "UCV",
    logo: "/universidades/ucv.png",
    type: "privada",
    location: {
      city: "Lima",
      district: "Los Olivos",
      address: "Av. Alfredo Mendiola 6232, Los Olivos 15314"
    },
    founded: 1991,
    description: "Universidad privada con múltiples sedes en el Perú",
    website: "https://ucv.edu.pe",
    contact: {
      phone: "(01) 202-4848",
      email: "informes@ucv.edu.pe"
    },
    stats: {
      rating: 4.1,
      studentsCount: 45000,
      facultiesCount: 8,
      careersCount: 35
    },
    accreditation: {
      sunedu: true,
      international: []
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  },
  {
    id: 8,
    name: "Universidad de Piura",
    shortName: "UDEP",
    logo: "/universidades/universidad_de_piura.jpg",
    type: "privada",
    location: {
      city: "Piura",
      district: "Piura",
      address: "Av. Ramón Mugica 131, Urb. San Eduardo, Piura"
    },
    founded: 1969,
    description: "Universidad privada con tradición en formación humanística",
    website: "https://udep.edu.pe",
    contact: {
      phone: "(073) 284-500",
      email: "informes@udep.edu.pe"
    },
    stats: {
      rating: 4.4,
      studentsCount: 12000,
      facultiesCount: 5,
      careersCount: 18
    },
    accreditation: {
      sunedu: true,
      international: []
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  },
  {
    id: 10,
    name: "Universidad Peruana de Ciencias Aplicadas",
    shortName: "UPC",
    logo: "/universidades/UPC_logo_transparente.png",
    type: "privada",
    location: {
      city: "Lima",
      district: "Santiago de Surco",
      address: "Av. Primavera 2390, Santiago de Surco 15023"
    },
    founded: 1994,
    description: "Universidad innovadora con enfoque en tecnología y negocios",
    website: "https://upc.edu.pe",
    contact: {
      phone: "(01) 313-3333",
      email: "informes@upc.edu.pe"
    },
    stats: {
      rating: 4.5,
      studentsCount: 35000,
      facultiesCount: 12,
      careersCount: 45
    },
    accreditation: {
      sunedu: true,
      international: ["AACSB"]
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  },
  {
    id: 11,
    name: "Universidad Nacional Toribio Rodríguez de Mendoza de Amazonas",
    shortName: "UNTRM",
    logo: "/universidades/untrm.png",
    type: "publica",
    location: {
      city: "Chachapoyas",
      district: "Chachapoyas",
      address: "Calle Higos Urco Nº 342-350-356, Chachapoyas 01001"
    },
    founded: 2000,
    description: "Universidad nacional amazónica con enfoque en desarrollo sostenible y ciencias aplicadas",
    website: "https://untrm.edu.pe",
    contact: {
      phone: "(041) 47-7694",
      email: "informes@untrm.edu.pe"
    },
    stats: {
      rating: 4.2,
      studentsCount: 8500,
      facultiesCount: 6,
      careersCount: 18
    },
    accreditation: {
      sunedu: true,
      international: []
    },
    metadata: {
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2024-12-01"
    }
  }
];

// Funciones de utilidad para universidades
export const getUniversityById = (id) => {
  return universities.find(university => university.id === id);
};

export const getActiveUniversities = () => {
  return universities.filter(university => university.metadata.isActive);
};

export const getUniversitiesByType = (type) => {
  return universities.filter(university => university.type === type);
};

export const getUniversitiesByCity = (city) => {
  return universities.filter(university => university.location.city === city);
};
