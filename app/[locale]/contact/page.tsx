'use client';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import FormEmail from '@/components/FormContact';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <ContainerPage customStyles={{ marginTop: 40, marginBottom: 40 }}>
      <FormEmail title={ t('Contáctenos')} />
    </ContainerPage>
  );
}
export default Contact;
