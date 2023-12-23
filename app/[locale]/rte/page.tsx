'use client';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import { ItemPdf } from './components';
import './rte.css';
import { useTranslation } from 'react-i18next';

function RTE() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-rte">
        <h1 className="team-title">{t('rte__title')}</h1>
        <ItemPdf />
      </div>
      <ContainerPage>
        <section className="section__rte">
          <p>
            {t('rte__text_1_1')} <b>{t('rte__text_1_2')}</b>
            {t('rte__text_1_3')}
            <b>{t('rte__text_1_4')}</b>.
          </p>
          <p>
            {t('rte__text_2_1')}
            <b>{t('rte__text_2_2')}</b>
            {t('rte__text_2_3')}
            <b> {t('rte__text_2_4')}</b>
          </p>
          <p>
            {t('rte__text_3_1')}
            <b>{t('rte__text_3_2')}</b>
            {t('rte__text_3_3')}
          </p>
        </section>
      </ContainerPage>
    </>
  );
}
export default RTE;
