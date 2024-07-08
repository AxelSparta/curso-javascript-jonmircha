const d = document

export default function responsiveSlider (prevBtn, nextBtn, sliderSlides) {
  d.addEventListener('click', (e) => {
    if (e.target.matches(prevBtn)) {
      e.preventDefault()
      const $sliderActive = d.querySelector(sliderSlides + ' .active')
      const $sliderSlides = d.querySelector(sliderSlides)
      // considerando que el slider anterior del primero que es null
      if ($sliderActive.previousElementSibling === null) {
        $sliderSlides.lastElementChild.classList.add('active')
        $sliderActive.classList.remove('active')
      } else {
        $sliderActive.previousElementSibling.classList.add('active')
        $sliderActive.classList.remove('active')
      }
    }

    if (e.target.matches(nextBtn)) {
      e.preventDefault()
      const $sliderActive = d.querySelector(sliderSlides + ' .active')
      const $sliderSlides = d.querySelector(sliderSlides)
      // considerando que el slider siguiente del ultimo que es null
      if ($sliderActive.nextElementSibling === null) {
        $sliderSlides.firstElementChild.classList.add('active')
        $sliderActive.classList.remove('active')
      } else {
        $sliderActive.nextElementSibling.classList.add('active')
        $sliderActive.classList.remove('active')
      }
    }
  })
}
