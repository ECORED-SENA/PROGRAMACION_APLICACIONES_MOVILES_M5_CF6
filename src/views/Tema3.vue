<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Instrucciones de diseño

    .bloque-texto-a.color-secundario.p-4.p-md-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema3/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p(data-aos="fade-right") Son aquellas características a tener en cuenta para el diseño de la capa de acceso a datos, siguiendo estos parámetros se asegura el acceso a la capa de datos, cumpliendo con los requerimientos de manera eficiente y segura; de esta manera se facilita el mantenimiento y los cambios. Las modificaciones se podrán atender de manera más sencilla.

    br
    SlyderB.mt-5(:datos="datosSlyder")

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_1 3.1 Riesgos de seguridad

    .row
      .col-md-9.mb-3
        p(data-aos="fade-up") La capa de acceso a los datos debe estar protegida de posibles incursiones y ataques que buscan robar o dañar la información. Proteger todos los elementos que permiten las transacciones y por donde fluye la información evitando que se tenga un fácil acceso a las fuentes de datos es una necesidad. Se debe manejar, en todos los niveles y capas, unos mínimos de seguridad restringiendo el acceso a las fuentes de datos.

        p.mt-3(data-aos="fade-up") También reduce los procesos de ida y vuelta reiterativos, considerando la utilización de instrucciones #[em “batching”] o también conocido como manejo por lotes, dentro de una única operación de base de datos. 

      .col-md-3.text-center
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema3/6.svg" style="display:inline;max-width:150px;")

    .p-5.mt-5.caja_flotante_azul(style="background-color:#DBFBFF")
      p(data-aos="fade-up") Los objetivos de desempeño para el acceso a la capa de datos deben de ser tomados en cuenta durante el diseño del modelo de negocio y la interacción con los elementos que hacen parte de los procesos que se identifican en el diagrama de objetos.

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_2 3.2  Capa de negocio

    p(data-aos="fade-up") Sobre la capa de negocio se debe realizar una serie de actividades y/o consideraciones, que son relevantes para el correcto funcionamiento en la lógica de la aplicación. Estas actividades se deben realizar de manera paralela con las diseñadas y desarrolladas para el diseño de la capa de datos.

    .row.mt-5.p-5.caja_flotante_azul(style="background-color:#DBFBFF")
      .col-md-9.mb-3
        ul.lista-ul
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Diseño global para la capa de negocio.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Diseño de componentes del negocio.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Componentes de flujo de trabajo.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Consideraciones de diseño.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Componentes de negocio.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Concurrencia y transacciones.

      .col-md-3.text-center(style="place-self: center;")
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema3/7.svg" style="display:inline;max-width:150px;")

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_3 3.3 Diseño global para la capa de negocio

    .row
      .col-md-9.mb-3
        p(data-aos="fade-up") Es fundamental identificar las características relevantes de los usuarios sobre los cuales se enfoca la aplicación y cómo ellos van a utilizar la capa de negocio, si ha de ser con niños, personas adultas mayores, público en general, etc. 

      .col-md-3.text-center
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema3/8.svg" style="display:inline;max-width:150px;")

    .p-5.mt-5.caja_flotante_azul(style="background-color:#DBFBFF")
      p(data-aos="fade-up") Definir cómo se va a exponer la capa de negocio, cuáles son los requerimientos de seguridad, identificando cuáles son las necesidades y generar las estrategias de validación para la capa de negocio.

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_4 3.4  Diseño de componentes del negocio

    p(data-aos="fade-up") Identificar y definir las reglas del negocio, generando patrones que se ajusten a los requisitos y necesidades.

    .row.mt-5
      .col-md-4.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#FFCA28;height:100%;")
          h3(data-aos="fade-up") Flujo de información
          p.mt-4(data-aos="fade-up") Se trata entonces de establecer la manera en que se utilizará para realizar el envío de información entre los componentes de la aplicación móvil. 

      .col-md-4.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#4DD0E1;height:100%;")
          h3(data-aos="fade-up") Ubicación, acoplamiento e interacciones apropiadas
          p.mt-4(data-aos="fade-up") Se trata, además, de definir qué tipo de soporte es el apropiado para utilizar entre las transacciones, asegurando que son las adecuadas para lograr la mejor ubicación, el mejor acoplamiento, y lograr las interacciones de los componentes de negocio.

      .col-md-4.mb-3
        .p-5.caja_flotante_azul.caja_escalada_hover(style="background-color:#FFCA28;height:100%;")
          h3(data-aos="fade-up") Formatos de datos
          p.mt-4(data-aos="fade-up") Elegir e identificar los formatos de los datos que serán comunes para las entidades de negocio que se interrelacionan.

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_5 3.5 Componentes de flujo de trabajo

    .row
      .col-md-9.mb-3
        p(data-aos="fade-up") Es clave identificar y definir el flujo de trabajo que debe ser utilizado en cada escenario. Definir, entonces, un modelo de edición estándar que permita realizar cambios sin afectar otros componentes cuando se realicen actualizaciones y mejoras. También es importante el diseño de los componentes de negocio, conociendo el flujo de trabajo para generar la sinergia necesaria en estas actividades.

      .col-md-3.text-center
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema3/9.svg" style="display:inline;max-width:150px;")

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Consideraciones de diseño")
        .col-md-12.mb-4.mb-md-0
          p El diseño de la capa de negocio busca minimizar la complejidad de interconexión y flujo de datos por medio de la división de las actividades en diferentes áreas, por ejemplo, los objetos de procesamiento de información que definen el negocio, el flujo de trabajo y las relaciones entre las entidades que definen la lógica del negocio.

      row(titulo="Responsabilidades de la capa de negocio")
        .col-md-12.mb-4.mb-md-0
          p Es importante comprender e identificar las responsabilidades de la capa de negocio en cada una de las transacciones o en cada operación, es una buena idea y muy sana usar una capa de negocio separada para el procesamiento de las reglas de negocio más complejas. 

      row(titulo="Separación adecuada de componentes")
        .col-md-12.mb-4.mb-md-0
          p Desde luego, y después de la acción anterior, se debe evitar mezclar los diferentes tipos de componentes, impidiendo un estrecho acoplamiento y dependencia entre las capas, que podrían generar graves fallas en el correcto funcionamiento de la aplicación.

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_6 3.6 Componentes de negocio

    .row
      .col-md-8.mb-3
        p(data-aos="fade-up") Los componentes que hacen parte fundamental del negocio se deben trabajar bajo el enfoque de módulos que permitan la reutilización y el acoplamiento, evitando la dependencia y, por consiguiente, las fallas generales.

        p.mt-4(data-aos="fade-up") Si uno de estos elementos o apartes falla, se debe contar con una alternativa que permita dar continuidad al flujo de datos sin perjudicar la operación, implementando reglas y patrones del negocio. 

        p.mt-4(data-aos="fade-up") Todos los componentes de negocio deben mostrar la funcionalidad de una manera transparente, así mismo, los servicios de datos para dar continuidad al flujo de trabajo. En resumen, se deben diseñar componentes que se puedan reutilizar y acoplar, manteniendo la estructura de las reglas de negocio.

      .col-md-4
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema3/10.svg")

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_7 3.7 Concurrencia y transacciones

    p(data-aos="fade-up") Se debe optar por identificar cuál es el mejor modelo de comunicación y sincronización entre procesos. Tal modelo ha de permitir gestionar las transacciones de manera efectiva, por lo general, siempre se parte de los modelos conocidos: modelo optimista y modelo pesimista, como se ilustra a continuación.
 
    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 4]  Arquitectura de App multiplataforma, con biblioteca de clases

    figure.mt-5.col-md-12.m-auto
      img.image_floating(src="@/assets/curso/tema3/11.svg" data-aos="fade-up")

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Modelo optimista")
        .col-md-12.mb-4.mb-md-0
          p El primer modelo presenta un escenario ideal donde no se presentan bloqueos, no existe falla en la transacción de datos y las actualizaciones requieren un código de verificación, por lo general, contra una marca de tiempo para verificar que los datos no han cambiado desde que se recibieron por última vez. 

      row(titulo="Modelo pesimista")
        .col-md-12.mb-4.mb-md-0
          p En este los datos se bloquean y no se pueden actualizar por otra operación, hasta que se libere el bloqueo. Estos dos modelos se deben alternar y ha de buscarse un equilibrio que permita solucionar cualquier inconveniente en las transacciones.

      row(titulo="Capa de negocio")
        .col-md-12.mb-4.mb-md-0
          p Esta capa define e implementa la funcionalidad principal del sistema y se condensa la lógica del negocio, puntualizando qué es lo importante y relevante dentro del proceso de desarrollo. Por lo general, está formada por varios elementos que son comunes a casi todas las aplicaciones móviles; algunos de estos elementos se pueden reutilizar, en la mayoría de los casos se cuenta con interfaces de servicio que otros componentes y capas utilizan, por ejemplo, los patrones que algunas aplicaciones utilizan para lograr el acceso a los datos y servicios remotos y, los servicios remotos que prestan algunos terceros. Estos datos y protocolos son consumidos por la capa de negocio a través de servicios web o APIs.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    datosSlyder: [
      {
        titulo: 'Tecnología adecuada',
        texto:
          'Es de suma importancia elegir la tecnología adecuada para el acceso a los datos; para definir qué tecnología utilizar para acceder a los datos, lo primero que se debe plantear es qué tipo de datos se van a manipular, identificando los posibles tipos de datos y su formato se puede generar una interfaz que utilice una capa de abstracción intermedia que organice el acoplamiento para la capa de datos.',
        imagen: require('@/assets/curso/tema3/2.svg'),
      },
      {
        titulo: 'Componentes de interfaz',
        texto:
          'Este proceso se puede lograr por medio de la definición de componentes de interfaz como, por ejemplo, teniendo claro la puerta de enlace con entradas y salidas conocidas, que interpreten todas las peticiones a un formato comprensible para los componentes de las capas. <br><br> <ul style="list-style: circle;padding: revert;"><li>Encapsulando las funciones que permiten el acceso a los datos para que no sean asequibles fácilmente.</li><li>Esta capa de acceso a datos debe ocultar y no permitir el acceso a los detalles de las fuentes de los datos. </li><li>Negociando y gestionando todas las conexiones y las funciones que generan las consultas.</li></ul>',
        imagen: require('@/assets/curso/tema3/3.svg'),
      },
      {
        titulo: 'Interfaces abstractas',
        texto:
          'Por lo general, los procesos en los cuales se adquieren y consumen datos interactúan por medio de las interfaces abstractas que, utilizando objetos y funciones en las aplicaciones, adquieren la información en formatos personalizados y XML.  La capa principal para el acceso a los datos debe crear y gestionar todas las conexiones a todas las fuentes de datos requeridas por la aplicación.',
        imagen: require('@/assets/curso/tema3/4.svg'),
      },
      {
        titulo: 'Protección de la información',
        texto:
          'Se debe seleccionar el método apropiado para el almacenamiento y protección de la información, en estas conexiones y sus transacciones, que deben estar acordes con los requisitos de seguridad de las aplicaciones. La capa que permite el acceso a los datos debe capturar, manejar y administrar todas las excepciones asociadas con las fuentes de datos y las operaciones CRUD (<em>create, read, update, delete</em>).  Determinando cómo se van a manejar las excepciones de datos, evitando anomalías en las consultas de información y teniendo el control de todas las transacciones y operaciones realizadas.',
        imagen: require('@/assets/curso/tema3/5.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(10px 5px 4px rgba(0,0,0,.1))
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.09))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
.caja__mostrar
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
.caja__mostrar:hover
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
  transform: scale(1.04)
.bloque-texto-a.color-secundario:before
  background-color: #A9EBF4
.pasos-a.color-primario .pasos-a__circle
  background-color: #4DD0E1
.pasos-a.color-primario .pasos-a__circle div
  color: white
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #4DD0E1
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #4dd0e1
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #4dd0e1
</style>
