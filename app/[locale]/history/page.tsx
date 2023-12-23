'use client';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import styles from './history.module.css';
import { useTranslation } from 'react-i18next';

function History() {
  const { t } = useTranslation();
  return (
    <ContainerPage>
      <h1 className={styles.title}>{t('history')}</h1>
      <p>
        {t('history__first_1')}
        <strong>{t('history__first_2')}</strong>
        {t('history__first_3')}
        <b>{t('history__first_4')}</b>
        {t('history__first_5')}
      </p>
      <p>{t('history__second')}</p>
      <p>
        {t('history__third_1')}
        <b> CULTIPVA-T </b>
        {t('history__third_2')}
      </p>
      <p>{t('history__fourth')}</p>
      <p>{t('history__fifth')}</p>
      <h2 className={styles.subtitle}>{t('history__sexth_title')}</h2>
      <p>{t('history__sexth_desc_1')}</p>
      <p>{t('history__sexth_desc_2')}</p>
      <br />
      <p className={styles.phrase}>
        <b>{t('history__sexth_phrase')}</b>
      </p>
    </ContainerPage>
  );
}
export default History;
