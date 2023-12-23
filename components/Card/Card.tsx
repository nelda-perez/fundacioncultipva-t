'use client';
import { useTranslation } from 'react-i18next';
import ActionButton from '../ActionButton/ActionButton';
import stylesCard from './card.module.css';

interface Props {
  title: string;
  description: string;
  path: string;
}

function Card({ title, description, path }: Props) {
  const { t } = useTranslation();
  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.cardDetails}>
        <p className={stylesCard.title}>{t(title)}</p>
        <p className={stylesCard.body}>{t(description)}</p>
        <div className={stylesCard.cardButton}>
          <ActionButton textButton={t('view_more')} path={path} />
        </div>
      </div>
    </div>
  );
}
export default Card;
