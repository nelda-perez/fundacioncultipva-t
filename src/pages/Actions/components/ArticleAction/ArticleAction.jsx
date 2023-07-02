function ArticleAction({ title, description, helps }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {helps.map((help) => (
          <li>{help}</li>
        ))}
      </ul>
    </article>
  );
}
export default ArticleAction;
