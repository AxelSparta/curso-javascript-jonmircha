import stripe_keys from './stripe-keys.js'

const d = document
const $sneakers = d.querySelector('#sneakers')
const $fragment = d.createDocumentFragment()
const $loader = d.getElementById('loader')
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${stripe_keys.secret_key}`
  }
}
let products, prices
const moneyFormat = num => `$${num.slice(0, num.length - 2)},${num.slice(-2)}`

Promise.all([
  fetch('https://api.stripe.com/v1/products', fetchOptions),
  fetch('https://api.stripe.com/v1/prices', fetchOptions)
])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(json => {
    products = json[0].data
    prices = json[1].data

    prices.forEach(el => {
      const productData = products.filter(product => product.id === el.product)[0]

      const sneaker = d.createElement('figure')
      sneaker.classList.add('sneaker')

      sneaker.innerHTML = `
      <img src="${productData.images[0]}" alt="${
        productData.name
      }" class="sneaker-img" />
      <figcaption class="sneaker-name"> <span> ${productData.name} </span> 
      <br/> ${moneyFormat(el.unit_amount_decimal)}</figcaption>
      <button class="sneaker-btn" data-price="${el.id}">Comprar</button>`

      $fragment.appendChild(sneaker)
    })
    $sneakers.appendChild($fragment)
  })
  .catch(err => {
    console.error(err)
  })

d.addEventListener('click', e => {
  if (e.target.matches('.sneaker-btn')) {
    const priceId = e.target.getAttribute('data-price')
    $loader.classList.add('loading')
    Stripe(stripe_keys.public_key)
      .redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        successUrl: 'http://localhost:5500/success.html',
        mode: 'payment',
        cancelUrl: 'http://localhost:5500/index.html'
      })
      .then(res => {
        if (res.error) {
          $sneakers.insertAdjacentHTML('beforeend', res.error.message)
        }
      })
  }
})
