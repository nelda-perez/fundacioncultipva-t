'use client';
import { useTranslation } from 'react-i18next';
import style from './title.module.css';

function Title({ title }: { title: string }) {
  const { t } = useTranslation();
  return <h3 className={style.title}>{t(title)}</h3>;
}
export default Title;
