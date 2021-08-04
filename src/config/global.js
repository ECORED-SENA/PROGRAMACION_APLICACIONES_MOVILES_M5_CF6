export default {
  global: {
    componenteFormativo: 'Construcción de la aplicación móvil',
    descripcionCurso:
      'Mediante este componente el aprendiz se afianzará en el desarrollo de aplicaciones móviles híbridas, sumando elementos clave para el correcto desempeño y funcionalidad, flujo de navegación e información, componentes gráficos e informativos de la app, entre otros. Identificará recursos externos e internos de uso, definiendo las API necesarias e integrables, todo ello, en concordancia con su modelo de negocio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Flujos de navegación en app multiplataforma',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Flujos de navegación por usuario',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Flujos de navegación según Sistema Operativo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Arquitectura de la aplicación móvil híbrida',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Instrucciones de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Riesgos de seguridad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Capa de negocio',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Diseño global para la capa de negocio',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Diseño de componentes del negocio',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Componentes de flujo de trabajo',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Componentes de negocio',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Concurrencia y transacciones',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Las API',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Historia de las API',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de API según sus permisos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: '¿Por qué son importantes las API?',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Tipos de API según su función',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Arquitectura cliente-servidor REST',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Métodos HTTP usados en las APIs',
            hash: 't_4_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ainoa, L. (2014). Introducción al desarrollo de aplicaciones para Android. ICB Editores.',
      link: '',
    },
    {
      referencia:
        'Fielding, R. (2000).  <em>Architectural styles and the design of network -based software architectures. Dissertations Publishing</em>. ',
      link:
        ' https://www.proquest.com/openview/fc2d064044b971dda476dfb429a2b344/1?pq-origsite=gscholar&cbl=18750&diss=y',
    },
    {
      referencia:
        'Manticore Insane Apps. (2019). Servicios REST HTTP en nativescript. Manticore-labs. ',
      link:
        'https://manticore-labs.com/2019/03/01/servicios-rest-http-en-nativescript/ ',
    },
    {
      referencia:
        'Nolasco, J. (2019). Desarrollo de aplicaciones con Android. Ra-Ma.',
      link: '',
    },
    {
      referencia:
        'Paredes, M. (2015). Programación multimedia y dispositivos móviles. Ra-Ma.',
      link: '',
    },
    {
      referencia:
        'Raboy, N. (2015). Realizar solicitudes HTTP en una aplicación móvil NativeScript [Web log post]. Blogspot.',
      link:
        ' https://www.thepolyglotdeveloper.com/2015/11/make-http-requests-in-a-nativescript-mobile-application/ ',
    },
    {
      referencia:
        'Raboy, N. (2016). Trabajar con datos RESTFUL en Angular 2 y NativeScript [Web log post]. Blogspot. ',
      link:
        ' https://www.telerik.com/blogs/working-with-restful-data-in-angular-2-and-nativescript ',
    },
    {
      referencia:
        'Raboy, N. (2018). Realizar solicitudes HTTP a servicios web remotos en una aplicación NativeScript-Vue [Web log post]. Blogspot. ',
      link:
        'https://blog.nativescript.org/make-http-requests-to-remote-web-services-in-a-nativescript-vue-app/index.html',
    },
    {
      referencia:
        'Serna, S. (2015). Diseño de interfaces en aplicaciones móviles. Ra-Ma.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Comandos “Batching”',
      significado:
        'Esto es lo que se denomina procesamiento por lotes o <em>batching</em>. Consiste en dedicar un período de tiempo a realizar tareas similares o que requieren los mismos recursos.',
    },
    {
      termino: 'CRUD',
      significado:
        'Es el acrónimo de (<em>Create, Read, Update and Delete</em>) que traduce “crear, leer, actualizar y borrar”, por lo general se utiliza en las actividades básicas  realizadas sobre una base de datos.',
    },
    {
      termino: 'Partner',
      significado:
        'Es la relación que se constituye entre dos o más empresas para obtener un mutuo beneficio. Por lo general, existe una empresa proveedora y otra que actúa como comercializadora o distribuidora de los servicios/productos.',
    },
    {
      termino: 'String de conexión',
      significado:
        'Se define como una cadena que se compone del código necesario para acceder a una fuente de datos (habitualmente a motor de base de datos) y poder realizar una conexión segura.',
    },
    {
      termino: 'W3C',
      significado:
        'Se define como un consorcio internacional que trabaja en el desarrollo de estándares <em>Web</em>, buscando mantener la idea básica de la <em>World Wide Web</em>.',
    },
  ],
  complementario: [
    {
      texto:
        'ONEMONTH APP. (2020). NativeScript & Vue – Mobile app in 5 days (day 1) [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=a-zkzEeIXrM&list=PLn-V5vIptbdUEUJAJKyUjgAIlZLglqlcH&index=2 ',
    },
    {
      texto:
        'Programando con Grover. (2020). NativeScript Vue introducción – creando apps móviles nativas con Vue.js [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kkCDDYpp4pg&t=1726s ',
    },
    {
      texto:
        'Bravent IT consulting Company (2010). Webinar – Desarrollando apps móviles con NativeScript [video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qN0hwVAPA0A ',
    },
    {
      texto:
        'EDteam. (2019). ¿Qué son las APIs y para qué sirven? [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u2Ms34GE14U&t=307s ',
    },
    {
      texto:
        'Nari, A. (2019). Cómo consumir una API desde NativeScript [video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UtKZtMkIe08 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Cuervo Nieto',
        cargo: 'Instructor',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga ',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
