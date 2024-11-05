const d = document
const n = navigator

export default function webcamDetection (id) {
  const $container = d.getElementById(id)
  const $video = d.createElement('video')

  $video.style.setProperty('width', '100%')
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        $video.srcObject = stream
        $video.play()
        $container.appendChild($video)
      })
      .catch((err) => {
        $container.append(`${err}`)
      })
  }
}
