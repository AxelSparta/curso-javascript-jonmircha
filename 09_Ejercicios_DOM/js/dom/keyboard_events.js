let x = 0
let y = 0
export function moveBall (e, ball, stage) {
  const d = document
  const $ball = d.querySelector(ball)
  const $stage = d.querySelector(stage)
  const $ballLimits = $ball.getBoundingClientRect()
  const $stageLimits = $stage.getBoundingClientRect()

  switch (e.keyCode) {
    case 37:
      e.preventDefault()
      if ($ballLimits.x > $stageLimits.x) x--
      break
    case 38:
      e.preventDefault()
      if ($ballLimits.y > $stageLimits.y) y--
      break
    case 39:
      if ($ballLimits.right < $stageLimits.right) x++
      e.preventDefault()
      break
    case 40:
      e.preventDefault()
      if ($ballLimits.bottom < $stageLimits.bottom) y++
      break
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}

export function shortcuts (e) {
  if (e.key === 'a' && e.altKey) {
    alert('alert perri')
  }
  if (e.key === 'p' && e.altKey) {
    prompt('prompt perri')
  }
  if (e.key === 'c' && e.altKey) {
    confirm('confirm perri')
  }
}
