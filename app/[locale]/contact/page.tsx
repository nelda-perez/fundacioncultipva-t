'use client';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import FormEmail from '@/components/FormContact';

function Contact() {
  return (
    <ContainerPage customStyles={{ marginTop: 40, marginBottom: 40 }}>
      <FormEmail title="Contáctenos" />
    </ContainerPage>
  );
}
export default Contact;
