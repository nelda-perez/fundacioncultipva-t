import { useTranslation } from 'react-i18next';
import styles from './articleAction.module.css';

interface Props {
  title: string;
  description: string;
  helps: string[];
  nameId: string;
  boldDesc?: string;
}

function ArticleAction({ title, description, helps, nameId, boldDesc }: Props) {
  const { t } = useTranslation();
  return (
    <article id={nameId} className={styles.container}>
      <h3>{t(title)}</h3>
      <p className={styles.description}>
        {t(description)} <strong>{t(boldDesc || '')}</strong>
      </p>
      <ul>
        {helps.map((help, index) => (
          <li key={index}>{t(help)}</li>
        ))}
      </ul>
    </article>
  );
}
export default ArticleAction;
