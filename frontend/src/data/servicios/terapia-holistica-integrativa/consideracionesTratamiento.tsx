export interface ConsideracionesData {
  title: string;
  subtitle: string;
  warning: {
    title: string;
    content: string;
  };
  essentialPoints: {
    id: string;
    title: string;
    content: string;
    isImportant: boolean;
  }[];
  processOverview: {
    title: string;
    stages: {
      title: string;
      content: string[];
    }[];
  };
}

export const consideracionesData: ConsideracionesData = {
  title: "Consideraciones Clave Antes de Iniciar tu Tratamiento",
  subtitle: "Aspectos fundamentales que debes conocer para obtener los mejores resultados",
  warning: {
    title: "Aviso Importante",
    content: "Este tratamiento complementa pero no sustituye la atención médica convencional. Recomendamos mantener cualquier tratamiento que estés recibiendo."
  },
  essentialPoints: [
    {
      id: 'compromiso',
      title: "Proceso gradual",
      content: "La sanación es un camino individual y progresivo. Cada persona avanza a su propio ritmo.",
      isImportant: true
    },
    {
      id: 'actitud',
      title: "Actitud y compromiso",
      content: "Una mente abierta, paciencia y disposición al cambio incrementan significativamente los resultados.",
      isImportant: true
    },

    {
      id: 'acompanamiento',
      title: "Acompañamiento profesional",
      content: "Contarás con acompañamiento continuo. Como psicóloga y psicoterapeuta, dispongo de los conocimientos y herramientas para guiarte eficazmente en tu proceso de recuperación.",
      isImportant: false
    }
  ],
  processOverview: {
    title: "Nuestro Protocolo de Sanación",
    stages: [
             {
         title: "1. Tratamiento de Limpieza Energética Inicial",
                 content: [
           "Este tratamiento está compuesto de 5 sesiones iniciales.",
           "Su objetivo es preparar tu campo energético eliminando bloqueos, energías estancadas y desequilibrios energeticos. Imagina este proceso como limpiar un jardín: se retiran las malas hierbas antes de plantar nuevas semillas.",
           "Estas primeras 5 sesiones son fundamentales, pero no garantizan resultados inmediatos, sobre todo cuando hay energías negativas profundas como daños, brujería, amarres o trabajos de magia."
         ]
      },
      {
        title: "2. Profundización y Tratamiento Especializado",
        content: [
          "Según los resultados de los análisis, testeos y limpieza de la fase inicial, podría ser necesario continuar con sesiones adicionales especializadas. Estas están orientadas a desafíos específicos: salud física, emocional, espiritual u objetivos personales.",
                     "En casos de daños energéticos profundos como brujería, amarres o trabajos de magia, se recomienda adquirir el paquete 'Limpieza y Sanación Energética Integral contra Daños, Brujería, Amarres y Trabajos de Magia', que incluye obligatoriamente la etapa inicial."
        ]
      }
    ]
  }
};