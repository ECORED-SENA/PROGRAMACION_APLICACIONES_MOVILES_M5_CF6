<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Arquitectura de la aplicación móvil híbrida

    .bloque-texto-a.color-secundario.p-4.p-md-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-4
            img.imagen_flotante_animada(src="@/assets/curso/tema2/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p(data-aos="fade-right") Para realizar una aplicación móvil híbrida se debe contar con una arquitectura que permita comprender e integrar cada uno de los elementos necesarios para realizar los procesos; por lo general se usa el modelo de tres capas para la arquitectura de software para aplicaciones móviles. Estas capas se pueden dividir y trabajar con otras subcapas, según la complejidad y robustez del aplicativo, estas son: la capa de presentación, la capa de aplicación o capa de negocio y la capa de datos.

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Componentes de la capa de datos")
        .col-md-12.mb-4.mb-md-0
          p El componente de la lógica de datos permite visualizar de manera más clara los contenedores de información y sus relaciones, concentrando la funcionalidad de este proceso que permite el acceso a los datos, generando una estructura que hará que la aplicación sea más fácil de diseñar, configurar y mantener a largo plazo.

      .row(titulo="Componentes de ayuda o servicios")
        .col-md-12.mb-4.mb-md-0
          p Las tareas para acceder a los datos demandan mantener una lógica general y estandarizada que debe ser implementada en los componentes que, por lo general, se encuentran separados, pero mantienen una identidad, que permite simplificar la complejidad de los componentes y su integración, minimizando la cantidad de código a mantener. Estos componentes son las librerías especializadas y las rutinas planificadas para mejorar e incrementar el rendimiento en el acceso a los datos, reducir el tiempo de desarrollo y la cantidad de requerimientos de componentes lógicos.

      .row(titulo="Parámetros de diseño de capa de acceso a datos")
        .col-md-7.mb-4.mb-md-0
          p Un correcto diseño de la capa de datos reduce el tiempo de desarrollo y permite un fácil mantenimiento de la misma después de que la aplicación se encuentre desarrollada. Por lo general, es fundamental trabajar con el diagrama de clases y el diagrama de objetos UML, para lograr la claridad en lo que se busca realizar (Korth y Sudarshan, 2006).
        .col-md-5
          figure
            img(src="@/assets/curso/tema2/2.jpg")

      .row(titulo="Diseño global de la capa de acceso a datos")
        .col-md-7.mb-4.mb-md-0
          p Identificar y determinar las fuentes de datos y el acceso a ellos, definiendo cómo se realizará la conexión para la recolección y presentación de los datos, generando estrategias que permitan evitar los errores o contar con un plan de contingencia, si es necesario.

        .col-md-5
          figure
            img(src="@/assets/curso/tema2/3.jpg")

      .row(titulo="Diseño de componentes de acceso a datos")
        .col-md-7.mb-4.mb-md-0
          p Definir los patrones de diseño y los métodos de acceso a utilizar para cada fuente de datos, definiendo, enumerando y clasificando los componentes necesarios para simplificar el acceso a los datos.
          
        .col-md-5
          figure
            img(src="@/assets/curso/tema2/4.jpg")

      .row(titulo="Diseño de componentes de ayuda o servicios")
        .col-md-12.mb-4.mb-md-0
          p Centralizar la información con el fin de reutilizarla, identificar librerías y elementos que permitan la reutilización de los datos de manera eficiente y segura, implementar procedimientos para generar un buen control de acceso a los datos y realizar pruebas en cada uno de los elementos utilizados, identificando y creando  mecanismos de ayuda para suplir problemas más frecuentes, como por ejemplo los strings de conexión, la comprobación y  autenticación de las fuentes de datos, el monitoreo de los servicios y excepciones particulares en los diferentes procesos.

      .row(titulo="Agentes de servicio")
        .col-md-12.mb-4.mb-md-0
          p Se emplean cuando un componente de negocio lo provee un servicio o un servidor externo; estos servicios externos son, por lo general, ofrecidos por un tercero, por ejemplo, la conexión a correos electrónicos y el almacenamiento de la información que contienen los mensajes; se almacenan de manera remota y por esa razón se necesitará crear un código que administre el protocolo de comunicación con ese servicio. Los protocolos de servicios controlan la petición y la integración, logrando mejorar el rendimiento y la fiabilidad en los procesos. 

          p.mt-4 El agente de servicio determina cómo este será utilizado en la aplicación; se debe determinar cuál es la herramienta más apropiada para utilizar y referenciar el servicio. Por lo general, esto crea unos canales de comunicación que forman los contratos o la negociación entre los servicios.





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
