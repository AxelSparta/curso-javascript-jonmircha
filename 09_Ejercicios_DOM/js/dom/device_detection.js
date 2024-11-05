const d = document
const n = navigator
const ua = n.userAgent
export default function deviceInfo (id) {
  const $div = d.getElementById(id)

  const isMobile = {
    // i-> no importa si esta en mayusaculas o minusculas
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows()
    }
  }

  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows()
    }
  }

  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safarai: () => ua.match(/safarai/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.ie() ||
        this.edge() ||
        this.chrome() ||
        this.safarai() ||
        this.firefox() ||
        this.opera()
      )
    }
  }

  $div.innerHTML = `
	<ul>
		<li>User agent: <b>${ua}</b></li>
		<li>phone or desktop?: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
		<li>Navegador: <b>${isBrowser.any()}</b></li>
	</ul>
	`
  // Contenido exclusivo
  if (isBrowser.chrome()) {
    $div.innerHTML += `<p>Este contenido es exclusivo de ${isBrowser.chrome()}</p>`
  }
}
