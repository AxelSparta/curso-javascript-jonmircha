import hamburgerMenu from './dom/hamburger_menu.js'
import digitalClock from './dom/clock.js'
import alarm from './dom/alarm.js'
import { moveBall, shortcuts } from './dom/keyboard_events.js'
import countdown from './dom/countdown.js'
import backToTop from './dom/top_btn.js'
import pageTheme from './dom/theme.js'
import responsiveMedia from './dom/objeto_responsive.js'
import responsiveTester from './dom/responsive_tester.js'
import deviceInfo from './dom/device_detection.js'
import networkStatus from './dom/network_detection.js'
import webcamDetection from './dom/webCam_detection.js'
import getLocation from './dom/geolocation.js'
import searchFilter from './dom/search_filter.js'
import lottery from './dom/lottery.js'
import responsiveSlider from './dom/responsive_slider.js'
import scrollSpy from './dom/scrollSpy.js'
import smartVideo from './dom/video_inteligente.js'
import contactFormValidations from './dom/form_validation.js'
import speechReader from './dom/speech.js'

const d = document

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('#toggle-btn', '#nav', '.nav-link')
  digitalClock('#start-reloj-btn', '#stop-reloj-btn', '#reloj')
  alarm('assets/alarm-clock.mp3', '#start-alarma-btn', '#stop-alarma-btn')
  countdown('#date', '#countdown', 'Llegó el día perra')
  backToTop('#top-btn')
  pageTheme('#theme-toggle-btn', '[data-theme]')
  responsiveMedia(
    'video-yt',
    '(min-width: 744px)',
    `<a
      href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91"
      target="_blank"
      >Ver video</a
    >`,
    `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6IwUl-4pAzc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    `
  )
  responsiveMedia(
    'gmaps',
    '(min-width: 744px)',
    `
    <a
      href="https://www.google.com/maps?ll=-32.848982,-68.883685&z=14&t=m&hl=es-419&gl=AR&mapclient=embed&cid=16970068734170108539"
      target="_blank"
      >Ver mapa</a>
    `,
    `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13407.4362395177!2d-68.8924393057823!3d-32.84898318674972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e080ae38a7877%3A0xeb81cb9a3a2c127b!2sMendoza%20Norte%20Country%20Club!5e0!3m2!1ses-419!2sar!4v1627338868481!5m2!1ses-419!2sar"
      width="400"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    `
  )
  responsiveTester('#responsive-tester-form')
  deviceInfo('user-device')
  webcamDetection('webcam-container')
  getLocation('geolocation')
  searchFilter('.card-filter', '.card')
  lottery('#lottery-item', '#lotteryBtn')
  responsiveSlider('.prev', '.next', '.slider-slides')
  scrollSpy()
  smartVideo()
  contactFormValidations()
})

d.addEventListener('keydown', (e) => {
  shortcuts(e)
  moveBall(e, '.ball', '.stage')
})

networkStatus()
speechReader()
