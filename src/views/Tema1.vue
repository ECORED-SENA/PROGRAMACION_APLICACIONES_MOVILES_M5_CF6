<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Flujos de navegación en app multiplataforma

    .bloque-texto-a.color-secundario.p-4.p-md-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-4
            img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p(data-aos="fade-right") El flujo de navegación de una aplicación hace referencia a la sucesión de acciones requeridas para la navegación del usuario en una aplicación móvil.

            p.mt-3(data-aos="fade-right") #[strong El objetivo del diseño del flujo de navegación para una app es buscar que esta sea eficiente y fácil de usar.]

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1 Flujos de navegación por usuario

    p(data-aos="fade-up") El flujo de navegación define la interacción que se tendrá con la aplicación precisando cada uno de los roles o grupos de usuarios, personalizando la interfaz basados en el proceso de negocio.

    p.mt-4(data-aos="fade-up") #[strong Se pueden definir varias categorías de flujos de navegación:]

    PasosA.color-primario.mt-2.p-5(tipo="n")
      .row
        .col-md-9.mb-4.mb-md-0
          h4(data-aos="fade-up") Global
          p.mt-4(data-aos="fade-up") Todo usuario tiene acceso a este flujo de navegación sin #[br] restricciones. 
        .col-md-3
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/2.svg', alt='')

      .row

        .col-md-3
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/3.svg', alt='')
        
        .col-md-9.mb-4.mb-md-0
          h4(data-aos="fade-up") Rol
          p.mt-4(data-aos="fade-up") Este flujo de navegación está definido por el perfil del usuario #[br] que permitirá o restringirá el acceso según los permisos o #[br] privilegios que este posea, por ejemplo, el flujo de navegación #[br] de un usuario administrador.

      .row
        .col-md-9.mb-4.mb-md-0
          h4(data-aos="fade-up") Grupo
          p.mt-4(data-aos="fade-up") Este flujo de navegación no se da por rol sino por el grupo al cual #[br] pertenece y permite realizar actividades diferentes o tener #[br] restricciones según las características del grupo.

        .col-md-3
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/4.svg', alt='')

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_2 1.2 Flujos de navegación según Sistema Operativo

    p(data-aos="fade-up") Los flujos de navegación deben contar con una estructura sencilla e intuitiva que se familiarice con los antecedentes de las aplicaciones que se utilizan sobre ese sistema operativo a trabajar y, si es el caso trabajar sobre varios S.O., se debe adaptar y facilitar la navegación y, experiencia al usuario.

    .bloque-texto-a.color-secundario.p-4.p-md-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema1/5.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p(data-aos="fade-right") Todo el recorrido y navegación del usuario debe tener características previsibles, coherentes y sencillas, independientemente de la navegación que se utilice; gran parte del éxito de la aplicación móvil recae sobre estos tipos de detalles.  Si la aplicación no cuenta con un flujo de desplazamiento sencillo, los usuarios simplemente no la utilizarán por complicada o inapropiada.

    h3.mt-5(data-aos="fade-up") Flujo de navegación en #[em Android]

    p.mt-4(data-aos="fade-up") Desde sus primeras versiones, la navegación en #[em Android] se realizó por medio de un patrón o comportamiento nombrado como “hacia adentro, hacia atrás y hacia arriba”. Esta navegación se caracteriza porque cuenta con dos botones #[em “up”] y #[em “back”]: arriba y atrás, como se muestra en la siguiente figura.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 1] Flujo navegación #[em Android]

    figure.mt-5.col-md-7.m-auto
      img.image_floating(src="@/assets/curso/tema1/6.svg" data-aos="fade-up")

    br
    .tarjeta-avatar-b.mt-5
        .tarjeta-avatar-b__img
          figure.caja_flotante_azul.m-auto.text-center(style="background-color:#A9EBF4;padding: 2.5rem 0.5rem;border-radius:5px;")
            img.imagen_flotante_animada(src='@/assets/curso/tema1/7.svg' alt='' style="width:150px;display:inline;")
        .tarjeta.tarjeta--azul.caja_flotante_rosada(style="background-color:#FFF5D5 !important;border-radius:0px !important;")
          .p-5
            h4(data-aos="fade-up") #[em Up]
            p.mt-3(data-aos="fade-up") Por lo general, se encuentra en la parte superior o inferior izquierda y permite retroceder en la navegación, en un orden jerárquico establecido. La navegación permite replegarse de manera escalonada hacia el inicio o hacia la pantalla principal de la aplicación móvil.

    .tarjeta-avatar-b.mt-5
        .tarjeta-avatar-b__img
          figure.caja_flotante_azul.m-auto.text-center(style="background-color:#A9EBF4;padding: 2.5rem 0.5rem;border-radius:5px;")
            img.imagen_flotante_animada(src='@/assets/curso/tema1/8.svg' alt='' style="width:100px;display:inline;")
        .tarjeta.tarjeta--azul.caja_flotante_rosada(style="background-color:#FFF5D5 !important;border-radius:0px !important;")
          .p-5
            h4(data-aos="fade-up") #[em Back]
            p.mt-3(data-aos="fade-up") Este botón deshace ordenadamente la navegación que se ha ejecutado, restableciendo y ubicando al usuario, de nuevo en la pantalla de navegación de la que proviene.

    br
    h3.mt-5(data-aos="fade-up") Flujo de navegación en sistema operativo iOS

    p.mt-4(data-aos="fade-up") En este sistema operativo se encuentran tres estilos de navegación bien definidos que se adaptan y ajustan a la estructura de las aplicaciones, como se muestra en la siguiente figura.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 2]  Flujo de navegación IOS

    figure.mt-5.col-md-7.m-auto
      img.image_floating(src="@/assets/curso/tema1/9.svg" data-aos="fade-up")
      figcaption.mt-2(data-aos="fade-up")  Nota. Tomado de ejercicio práctico de descargas en app #[em store].

    .col-md-9.m-auto.mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF5D5")
      h4(data-aos="fade-up") Navegación jerárquica
      p.mt-4(data-aos="fade-up") Se organiza de manera descendente o ascendente para mostrar la información y los elementos que componen la aplicación por ejemplo Facebook. La navegación con estructura jerárquica permite a los usuarios elegir la pantalla de navegación y realizar un recorrido hasta llegar a su destino o realizar la actividad. Si desea realizar otra actividad debe retroceder o iniciar desde cero regresando hasta la pantalla de inicio de la aplicación. Un ejemplo de estas aplicaciones que manejan esta estructura es el correo y la opción de configuración del sistema operativo.

    .col-md-9.m-auto.mt-4.p-5.caja_flotante_rosada(style="background-color:#FFF5D5")
      h4(data-aos="fade-up") Navegación plana
      p.mt-4(data-aos="fade-up") La información está organizada para visualizarse y tener acceso a ella por medio de desplazamientos laterales de izquierda a derecha. La navegación con estructura plana permite la navegación desplazándose de una categoría a otra directamente y se cuenta con una pantalla principal que presenta todas las categorías de manera centralizada, como ejemplo se puede ver el funcionamiento de la app #[em store].

    .col-md-9.m-auto.mt-4.p-5.caja_flotante_rosada(style="background-color:#FFF5D5")
      h4(data-aos="fade-up") Navegación contenida
      p.mt-4(data-aos="fade-up") Esta navegación combina las dos anteriores, la jerárquica y la plana.

    br
    h3.mt-5(data-aos="fade-up")  Navegación en #[em Windows phone]

    p.mt-4(data-aos="fade-up") La navegación en este sistema operativo busca asemejar el funcionamiento de los sistemas operativos implementados en los computadores, ofreciendo una barra de estado o barra de navegación, ubicada en la parte inferior. Permite la interacción sencilla del usuario y recibe actualizaciones de información constantemente, mostrando diferentes notificaciones, como se muestra a continuación.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 3]  Navegación #[em Windows Phone]

    figure.mt-5.col-md-7.m-auto
      img(src="@/assets/curso/tema1/10.svg" data-aos="fade-up")
      figcaption.mt-2(data-aos="fade-up") http://catedraocampo.com.ar/diferencias-de-flujos-de-navegacion-en-apps-multiplatforma/

    br
    .tarjeta-avatar-b.mt-5
        .tarjeta-avatar-b__img
          figure.caja_flotante_azul.m-auto.text-center(style="background-color:#A9EBF4;padding: 2rem 1.5rem;border-radius:5px;")
            img.imagen_flotante_animada(src='@/assets/curso/tema1/11.svg' alt='' style="width:100px;display:inline;")
        .tarjeta.tarjeta--azul.caja_flotante_rosada(style="background-color:#FFF5D5 !important;border-radius:0px !important;")
          .p-5
            h4(data-aos="fade-up") La barra de estados
            p.mt-3(data-aos="fade-up") Se encuentra ubicada en la parte superior y ofrece la posibilidad de cambiar sus propiedades; puede estar visible o replegarse, ocultándose mientras no es utilizada o solicitada; por lo general, se manipula y visualiza para indicar el proceso de algunas actividades que están en progreso.

    .tarjeta-avatar-b.mt-5
        .tarjeta-avatar-b__img
          figure.caja_flotante_azul.m-auto.text-center(style="background-color:#A9EBF4;padding: 2rem 1.5rem;border-radius:5px;")
            img.imagen_flotante_animada(src='@/assets/curso/tema1/12.svg' alt='' style="width:100px;display:inline;")
        .tarjeta.tarjeta--azul.caja_flotante_rosada(style="background-color:#FFF5D5 !important;border-radius:0px !important;")
          .p-5
            h4(data-aos="fade-up") Barra de aplicaciones
            p.mt-3(data-aos="fade-up") Esta barra se asemeja a la barra del sistema operativo de Windows, permite ubicar y visualizar de manera sencilla los elementos habituales. También permite generar un acceso rápido a las aplicaciones más utilizadas, incluyendo un menú con los ejecutables más usados o relevantes; su ubicación se puede orientar de manera horizontal o vertical, por esa razón, las aplicaciones desarrolladas deben estar estructuradas, pensando en esta posibilidad de cambio de orientación.




</template>

<script>
export default {
  name: 'Tema1',
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
