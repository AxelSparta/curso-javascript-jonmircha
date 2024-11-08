export function SearchCard (props) {
  const { id, title, _embedded } = props
  const slug = _embedded.self[0].slug

  return `
        <article class="post-card">
            <h2>${title}</h2>
            <p>
                <a href="#/${slug}" data-id="${id}">Ver publicación</a>
            </p>
        </article>    
    `
}
