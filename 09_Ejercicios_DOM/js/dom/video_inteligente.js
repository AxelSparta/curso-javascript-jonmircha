const d = document
const w = window

export default function smartVideo () {
  const $videos = d.querySelectorAll('video[data-smart-video]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play()
        } else {
          entry.target.pause()
        }
        w.addEventListener('visibilitychange', (e) => {
          d.visibilityState === 'visible'
            ? entry.target.play()
            : entry.target.pause()
        })
      })
    },
    {
      threshold: 0.7
    }
  )

  $videos.forEach((el) => observer.observe(el))
}
