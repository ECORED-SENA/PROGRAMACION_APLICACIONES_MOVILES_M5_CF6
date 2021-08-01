<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Las API

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    br
    .titulo-segundo.mt-5
      h2#t_4_1 4.1 Historia de las API

    p(data-aos="fade-up") Las API surgieron en los primeros días de la informática, mucho antes que la computadora personal; en esa época una API normalmente se usaba como biblioteca para los sistemas operativos.

    .row.mt-5
      .col-md-8.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Alojamiento") Casi siempre estaban habilitadas localmente en los sistemas en los que operaban.
          
          p.text-small(numero="2" titulo="Intercomunicación") Sin embargo, en algunas ocasiones pasaban mensajes entre las computadoras centrales.

          p.text-small(numero="3" titulo="Expansión") Después de casi 30 años, las API se expandieron más allá de los entornos locales. 

          p.text-small(numero="4" titulo="Integración remota") A principios del año 2000 ya eran una tecnología importante para la integración remota de datos.

      .col-md-4
        figure
          img.imagen_flotante_animada2(src="@/assets/curso/tema4/1.svg")

    br
    br
    .titulo-segundo.mt-5
      h2#t_4_2 4.2 Historia de las API

    p(data-aos="fade-up") El uso de una API implica diferentes modelos de permisos y, así mismo, las API son clasificadas según dichos permisos, así:

    .row.mt-5
      .col-md-4.mb-3
        .tarjeta-numerada.color-acento-botones.p-5(style="height:100%;")
          .tarjeta-numerada__numero
            .h2 1
          h4(data-aos="fade-up") Privadas
          p.mt-4(data-aos="fade-up") Estas API solo se usan internamente, son creadas por las empresas para su uso doméstico teniendo el control total sobre ellas.

      .col-md-4.mb-3
        .tarjeta-numerada.color-primario.p-5(style="height:100%;")
          .tarjeta-numerada__numero
            .h2 2
          h4(data-aos="fade-up") Partners
          p.mt-4(data-aos="fade-up") Estas API son desarrolladas por algunas empresas y son distribuidas por partners que tienen permisos especiales para vender estos servicios empresariales, ofreciendo ingresos adicionales a la empresa y a los distribuidores autorizados.

      .col-md-4.mb-3
        .tarjeta-numerada.color-secundario.p-5(style="height:100%;")
          .tarjeta-numerada__numero
            .h2 3
          h4(data-aos="fade-up") Públicas
          p.mt-4(data-aos="fade-up") Todos tienen acceso a las API, así que otras empresas pueden desarrollar una API para generar una interacción entre ellas y así convertirse en una fuente de innovaciones, prestando un servicio libre de restricciones. Esto permite que terceros desarrollen aplicaciones que interactúan con las API públicas.

    br
    br
    .titulo-segundo.mt-5
      h2#t_4_3 4.3 ¿Por qué son importantes las API?

    p(data-aos="fade-up") Si se cuenta con una API no será necesario crear desde cero un servicio, como ejemplo, se puede tomar un sistema de pagos. Es posible integrar a una aplicación una API de un servicio de pago ya existente, por ejemplo, PayPal; cuando se suministra la información de una tarjeta, la aplicación utiliza una API para compartir la información y enviar esos datos de forma remota a otro programa que verificará y validará la información.

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul(style="background-color: #DBFBFF;")
      p(data-aos="fade-up") Una vez se verifica la información se retornará una respuesta a la aplicación, indicando si los datos son válidos; esta pasarela de pago suministra un servicio muy complejo de desarrollar, que requiere altos niveles de seguridad que pueden ser aviados, al utilizar esta API que permite la integración y utilización de este servicio.

    br
    br
    .titulo-segundo.mt-5
      h2#t_4_4 4.4 Tipos de API según su función

    p(data-aos="fade-up") El funcionamiento de las API se establece sobre protocolos o sobre arquitecturas. Conózcalos a continuación.

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema4/2.svg" data-aos="fade-up")

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-primario.p-4(titulo="SOAP" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") SOAP
        p.mt-4(data-aos="fade-up") Fue un protocolo muy utilizado que, paulatinamente, se ha venido convirtiendo en obsoleto. SOAP (Protocolo de Acceso a Objetos Simples) permitió la estandarización del cambio de información y datos; las API diseñadas con SOAP usaron formato XML para el diseño de sus mensajes y transacciones, recibían solicitudes a través de HTTP o SMTP.
      
      .tarjeta.color-primario.p-4(titulo="Estandarización del lenguaje" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") Estandarización del lenguaje
        p.mt-4(data-aos="fade-up") Con SOAP se facilita el proceso de comunicación estandarizando del lenguaje, reglas y políticas definidas, entre aplicaciones que funcionan en entornos distintos o están escritas en lenguajes diferentes, pero logran compartir la información.

      .tarjeta.color-primario.p-4(titulo="Entornos descentralizados" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") Entornos descentralizados
        p.mt-4(data-aos="fade-up") El protocolo SOAP se caracteriza por ser liviano y se utiliza, primordialmente, para realizar un intercambio de información en entornos descentralizados; con frecuencia se suele asociar SOAP con el lenguaje de descripción de servicios web UDDI y WSDL.

      .tarjeta.color-primario.p-4(titulo="REST" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") REST
        p.mt-4(data-aos="fade-up") Por otra parte, está REST, que no es un protocolo sino una arquitectura, es la de mayor uso en la actualidad. Los denominados Restful son derivaciones de la arquitectura REST.

      .tarjeta.color-primario.p-4(titulo="Arquitecturas locales y remotas" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") Arquitecturas locales y remotas
        p.mt-4(data-aos="fade-up") Existen por su parte arquitecturas locales, aquellas en las que la aplicación se comunica con la API que se encuentra en el mismo ambiente o dispositivo y las arquitecturas remotas, aquellas en las que la aplicación necesita consumir una API, ubicada o alojada en servidores remotos y es necesario contar con un servicio de conexión de datos o Internet para acceder al servicio.

    h3.mt-5(data-aos="fade-up") API de servicios web o remotas.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 5]  Formatos más comunes de envío de datos 

    figure.mt-5.col-md-5.m-auto
      img.image_floating(src="@/assets/curso/tema4/3.svg" data-aos="fade-up")

    .col-lg-5.mt-5
      a.anexo.mb-4.caja_flotante_azul(href="https://www.youtube.com/watch?v=u2Ms34GE14U" target="_blank" data-aos="fade-up")
        .anexo__icono
          img(src="@/assets/curso/tema4/4.svg")
        .anexo__texto
          p(style="color:#12263F;") #[strong(style="color:#12263F;") ¿Qué son las APIs y para qué sirven?]

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Estándares web")
        .col-md-12.mb-4.mb-md-0
          p En su gran mayoría las API están desarrolladas bajo los estándares web. Se debe comprender que no todas las API remotas se pueden considerar como API web, pero sí se concluye que todas las API web son remotas. Usan el protocolo de transferencia de información HTTP para solicitar mensajes y proporcionar una definición de la estructura de los mensajes de respuesta.

      .row(titulo="Formatos válidos y adaptables")
        .col-md-12.mb-4.mb-md-0
          p En particular, los mensajes de respuesta se transforman tomando la forma de un archivo XML o JSON, que son los formatos válidos y los que mejor se adaptan al momento de presentar los datos y la información, de una manera fácil de comprender y manipular para otras aplicaciones.

      .row(titulo="XML")
        .col-md-12.mb-4.mb-md-0
          p Extensible Markup Language, este metalenguaje permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium utilizado para almacenar datos en forma legible.

      .row(titulo="JSON")
        .col-md-12.mb-4.mb-md-0
          p Javascript Object Notation es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML se considera un formato independiente del lenguaje, es el más utilizado, hoy en día, por su fácil manejo.

      .row(titulo="Texto plano")
        .col-md-12.mb-4.mb-md-0
          p Plain text son aquellos archivos formados exclusivamente por texto, solo caracteres, sin ningún formato, es decir, no requieren ser interpretados para leerse.

    h3.mt-5(data-aos="fade-up")  API de código fuente

    p.mt-4(data-aos="fade-up") Ofrece librerías de objetos, se usan con frecuencia para el desarrollo de una aplicación compuesta, que toma recursos y datos de varias fuentes remotas.

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema4/5.svg" data-aos="fade-up")

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul(style="background-color: #DBFBFF;")
      p(data-aos="fade-up") Las llamadas de estos servicios se ejecutan de acuerdo con los estándares del entorno de la aplicación, como por ejemplo .NET o J2EE.

    h3.mt-5(data-aos="fade-up") API heredadas.

    p.mt-4(data-aos="fade-up") Se utilizan en la integración de interfaces de aplicaciones que usan reglas y protocolos de comunicación. Estas API se utilizan integrando elementos de hardware, usando protocolos de objetos remotos, por medio de archivos planos, integrando interfaces de sistemas operativos.

    .row.mt-5
      .col-md-7.mb-3
        .p-5.caja_flotante_rosada.caja__1.caja_escalada_hover(style="background-color:#FFF5D5")
          h4(data-aos="fade-up") CORBA
          p.mt-4(data-aos="fade-up") Uno de los ejemplos que permite comprender su funcionamiento es la API heredada CORBA (COMMON Object Request Broker Architecture).

        .p-5.caja_flotante_rosada.caja__1.mt-4.caja_escalada_hover(style="background-color:#FFF5D5")
          h4(data-aos="fade-up") OMG
          p.mt-4(data-aos="fade-up") Es un estándar definido por el grupo de gestión de objetos (OMG) que permite el funcionamiento conjunto de componentes de software escritos en distintos lenguajes informáticos y que se ejecutan en distintos sistemas.

        .p-5.caja_flotante_rosada.caja__1.mt-4.caja_escalada_hover(style="background-color:#FFF5D5")
          h4(data-aos="fade-up") Asociación por medio de token
          p.mt-4(data-aos="fade-up") Estos tipos de objetos CORBA pueden recibir muchas llamadas y repeticiones de acceso, pero el tipo de objeto del cliente no cambia, cada instancia del tipo de objeto del cliente se asocia por medio de un token a sus datos.

      .col-md-5.text-center(style="place-self:center;")
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema4/6.svg" style="width:150px;display:inline;")

    h3.mt-5(data-aos="fade-up") API de producción.

    p.mt-4(data-aos="fade-up") Son fundamentales porque manejan la lógica comercial de las aplicaciones. Una vez desarrollada la app, esta debe recibir datos reales y es, en este momento, cuando la API de producción permite realizar esta actividad de generación de información real.

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul(style="background-color: #DBFBFF;")
      p(data-aos="fade-up") Se utiliza como un servidor que permite realizar la incisión de datos en la aplicación, permitiendo la activación de los servicios y la realización de actualizaciones de datos. 

      p.mt-3(data-aos="fade-up") Estas API de producción no deben devolver datos a los usuarios que no estén autorizados en visualizar la información; tampoco debe permitir la actualización de la información que no debe ser modificada. Deben ser rápidas porque son las responsables de manejar, en el mundo real, todo el tráfico de la aplicación.

    h3.mt-5(data-aos="fade-up") API de desarrollo.

    p.mt-4(data-aos="fade-up") También conocidas como API falsas, son utilizadas para realizar presentaciones previas al cliente demostrando el funcionamiento de la aplicación, antes de salir a producción. El objetivo de este tipo de API es realizar las pruebas de Frontend y Backend, continuar con el desarrollo, aunque no existan bases de datos o datos reales, como se muestra en la siguiente figura.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 6]  Tipos de API

    figure.mt-5.col-md-9.m-auto
      img.image_floating(src="@/assets/curso/tema4/7.svg" data-aos="fade-up")

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul(style="background-color: #DBFBFF;")
      p(data-aos="fade-up") Las API de desarrollo generalmente no guardan, ni alojan datos en una base de datos, lo que se debe hacer es guardar todo en la memoria de manera temporal mientras se realizan las pruebas. Las API web que trabajan con las limitaciones de la arquitectura REST se conocen como las API de RESTFUL. Una API web de RESTFUL no cuenta con ningún estándar oficial que genere unas reglas para su desarrollo y utilización Fielding (2000).

    br
    br
    .titulo-segundo.mt-5
      h2#t_4_5 4.5 Arquitectura cliente-servidor REST

    p(data-aos="fade-up") La arquitectura REST se compone de tres elementos: los clientes, los servidores y los recursos. De esta manera, se administran las solicitudes con HTTP; los servicios web RESTFUL son un grupo de parámetros que están ajustados bajo los principios de la arquitectura de transferencia de estado representacional (REST).

    p.mt-4(data-aos="fade-up") Los elementos de REST esencialmente utilizan la arquitectura cliente/servidor, basados en el protocolo de trasferencia HTTP, que admite la ejecución de los indicadores de recursos universales (URI).

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema4/8.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") WSDL (Web Services Description Language) es un formato del Extensible Markup Language que se usa para detallar servicios web, es un lenguaje de programación fundamentado en XML y su principio fundamental es detallar servicios web. Cuando se está programando una API y se solicita información a una API REST el servidor responde, generalmente, la solicitud con un código o códigos preestablecidos; estos son algunos de los principales:

    .mt-5.p-5.caja_flotante_azul(style="background-color:#DBFBFF")
      ul.lista-ul
        li(data-aos="fade-up")
          i.fas.fa-check(style="color: #FFA726;")
          |  #[strong 2xx:] demuestran que la petición se ha procesado correctamente.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color: #FFA726;")
          |  #[strong 3xx:] señala qué se debe redireccionar, indicando la realización de una acción adicional para completar la petición.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color: #FFA726;")
          |  #[strong 4xx:] marca una solicitud inválida, se genera cuando se realizan peticiones a recursos inexistentes o no autorizados.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color: #FFA726;")
          |  #[strong 5xx:] indica fallas o errores relacionados directamente con el servidor.

    br
    br
    .titulo-segundo.mt-5
      h2#t_4_6 4.6 Métodos HTTP usados en las APIs

    p(data-aos="fade-up") Los métodos HTTP permiten la interacción con la información de la API, esto es equivalente al CRUD de las bases de datos. Get es el método que realiza la solicitud de información, post expide la nueva información registrada actualizando los datos, put permite la actualización de los datos cuando se realiza el cambio relevante en la información y delete realiza la eliminación de recursos; en la siguiente figura se muestran estos métodos.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 7]  Métodos HTTP en las APIS

    figure.mt-5.col-md-5.m-auto
      img.image_floating(src="@/assets/curso/tema4/9.svg" data-aos="fade-up")

    .col-lg-5.mt-5
      a.anexo.mb-4.caja_flotante_azul(href="https://www.youtube.com/watch?v=u2Ms34GE14U" target="_blank" data-aos="fade-up")
        .anexo__icono
          img(src="@/assets/curso/tema4/4.svg")
        .anexo__texto
          p(style="color:#12263F;") #[strong(style="color:#12263F;") ¿Qué son las APIs y para qué sirven?]

    p.mt-5(data-aos="fade-up") #[strong Finalmente, algunas características a tener en cuenta cuando se utiliza la arquitectura RESTFUL son:]

    PasosA.color-primario.mt-2.p-5(tipo="l")
      .row
        .col-md-12.mb-4.mb-md-0
          h4(data-aos="fade-up") Arquitectura cliente-servidor
          p.mt-4(data-aos="fade-up") La arquitectura REST administra las solicitudes #[br] realizadas por HTTP, estas solicitudes pueden provenir de los clientes, servidores y recursos.

      .row
        .col-md-12.mb-4.mb-md-0
          h4(data-aos="fade-up") Sin estado
          p.mt-4(data-aos="fade-up") El contenido de los clientes no se almacena en el servidor entre las solicitudes, sino que la #[br] información sobre el estado de la sesión se queda en el cliente. En su lugar, la información sobre el #[br] estado de la sesión está en posesión del cliente.

      .row
        .col-md-12.mb-4.mb-md-0
          h4(data-aos="fade-up") Capacidad de caché
          p.mt-4(data-aos="fade-up") El almacenamiento en caché puede eliminar la necesidad de algunas interacciones cliente-servidor.

      .row
        .col-md-12.mb-4.mb-md-0
          h4(data-aos="fade-up") Sistema en capas
          p.mt-4(data-aos="fade-up") Las interacciones cliente-servidor pueden estar mediadas por capas adicionales, que pueden ofrecer #[br] otras funciones como el equilibrio de carga, los cachés compartidos o la seguridad. Estas capas #[br] pueden ofrecer funcionalidades adicionales como equilibrio de carga, cachés compartidos o seguridad.

      .row
        .col-md-12.mb-4.mb-md-0
          h4(data-aos="fade-up") Código de demanda
          p.mt-4(data-aos="fade-up") Los servidores pueden extender las funciones de un cliente, transfiriendo un código ejecutable.

      .row
        .col-md-12.mb-4.mb-md-0
          h4(data-aos="fade-up") Interfaz uniforme
          p.mt-4(data-aos="fade-up") Esta limitación es fundamental para el diseño de las API de RESTFUL e incluye 4 aspectos:

      .row
        .col-md-12.mb-4.mb-md-0
          h4(data-aos="fade-up")  Identificación de recursos en las solicitudes
          p.mt-4(data-aos="fade-up") Los recursos se identifican en las solicitudes y se separan de las representaciones #[br] que se devuelven al cliente.
        




</template>

<script>
export default {
  name: 'Tema4',
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
@keyframes float2
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.15))
    transform: translatex(20px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.17))
    transform: translatex(-10px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.22))
.imagen_flotante_animada2
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatex(20px)
  animation: float2 6s cubic-bezier(0.4, 0.5, .6, .7) infinite
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #A9EBF4
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #A9EBF4
  color: inherit
.tarjeta-numerada__numero .h2
  color: white !important
.cajon.color-primario:before
  background-color: #4DD0E1
.tabs-a__tab
  background-color: #E8E8E8
.caja__1:hover
  background-color: #FFDE79 !important
</style>
