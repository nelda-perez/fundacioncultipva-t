import styles from "./articleParticipate.module.css";

function ArticleParticipate({ title, contributions, img }) {
  return (
    <article className={styles.container}>
      <img className={styles.image} src={img} alt={title} />
      <h3>{title}</h3>
      <ul>
        {contributions.map((cont, index) => (
          <li key={index} className={styles.list}>
            {cont}
          </li>
        ))}
      </ul>
    </article>
  );
}
export default ArticleParticipate;
