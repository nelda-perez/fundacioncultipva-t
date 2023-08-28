import styles from './articleAction.module.scss'

function ArticleAction({ title, description, helps, nameId, boldDesc }) {
  return (
    <article id={nameId} className={styles.container}>
      <h3>{title}</h3>
      <p className={styles.description}>{description} <strong>{boldDesc}</strong></p>
      <ul>
        {helps.map((help, index) => (
          <li key={index}>{help}</li>
        ))}
      </ul>
    </article>
  );
}
export default ArticleAction;
