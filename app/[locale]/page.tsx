'use client';
import styles from './page.module.css';
import slide1 from '@/public/assets/slide-1.jpg';
import slide2 from '@/public/assets/slide-2.jpg';
import slide3 from '@/public/assets/slide-3.jpg';
import slide4 from '@/public/assets/slide-4.jpg';
import slide5 from '@/public/assets/slide-5.jpg';
import slide6 from '@/public/assets/slide-6.jpg';
import slide8 from '@/public/assets/slide-8.jpg';
import ActionButton from '@/components/ActionButton/ActionButton';
import Carousel from '@/components/Carousel/Carousel';
import ContainerCard from '@/components/ContainerCard/ContainerCard';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import { ROUTES } from '@/constants';
import { CARD_ACTIONS } from '@/public/database';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide8];

  return (
    <>
      <Carousel images={images} autoPlay={true} />
      <ContainerPage>
        <p className={`${styles.text} ${styles.principalText}`}>
          {t('home__first_text')}
        </p>
        <p className={`${styles.text} ${styles.principalText}`}>
          {t('home__second_text')}
        </p>
        <p className={styles.text}>{t('home__three_text')}</p>
        <p className={styles.text}>{t('home__fourth_text')}</p>
        <div className={styles.containerButton}>
          <ActionButton
            textButton={t('want_participate')}
            path={ROUTES.PARTICIPATE.path}
          />
        </div>
      </ContainerPage>
      <ContainerPage>
        <ContainerCard
          infoCards={CARD_ACTIONS}
          principalPath={ROUTES.ACTION.path}
        />
      </ContainerPage>
    </>
  );
}

export default Home;
