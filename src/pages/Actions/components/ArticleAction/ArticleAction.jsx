import styles from './articleAction.module.css'

function ArticleAction({ title, description, helps, nameId }) {
  return (
    <article id={nameId} className={styles.container}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul>
        {helps.map((help, index) => (
          <li key={index}>{help}</li>
        ))}
      </ul>
    </article>
  );
}
export default ArticleAction;
