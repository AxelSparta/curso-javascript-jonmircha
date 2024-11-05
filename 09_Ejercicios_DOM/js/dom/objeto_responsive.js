const d = document
const w = window

export default function responsiveMedia (
  id,
  mediaQuerie,
  mobileContent,
  desktopContent
) {
  const breakpoint = w.matchMedia(mediaQuerie)
  const $elementContainer = d.getElementById(id)
  const responsive = (e) => {
    if (e.matches) {
      $elementContainer.innerHTML = desktopContent
    } else {
      $elementContainer.innerHTML = mobileContent
    }
  }
  responsive(breakpoint)
  breakpoint.addEventListener('change', responsive)
}
