import styles from "./articleParticipate.module.scss";

function ArticleParticipate({ title, contributions, img, description, links, metafora }) {
  return (
    <article className={styles.container}>
      <figure>
        <img className={styles.image} src={img} alt={title} />
        <section>
          <h3>{title}</h3>
          {metafora && <div className={styles.metafora}><span>{metafora}</span></div>}
          {description && <p className={styles.text}>{description}</p>}
          <ul>
            {contributions.map((cont, index) => (
              <li key={index} className={styles.list}>
                {cont}
              </li>
            ))}
          </ul>
        </section>
      </figure>
      {links && (
        <section className={styles.containerLinks}>
          <h3>Links</h3>
          {links.map((link) => (
            <a href={link.routerLink} key={link.routerLink}>
              {link.label ? `${link.label}:` : ''} {link.routerLink}
            </a>
          ))}
        </section>
      )}
    </article>
  );
}
export default ArticleParticipate;
