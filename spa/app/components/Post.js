export function Post (props) {
  const { title, content, date } = props
  //   const dateFormat = date.toLocaleDateString();

  return `
        <section class="post-page">
        
            <aside>
                <h2>${title.rendered}</h2>
                <date datetime="${date}">${date.toLocaleString()}</date>
            </aside>
            <hr />
            <article>${content.rendered}</article>
        </section>
    `
}
