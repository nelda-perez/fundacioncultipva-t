import { ContainerImageCards, ImageCards } from './components';
import { TEAMS } from './constant';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['about', 'test'];

async function About({ params: { locale } }: { params: { locale: string } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      {TEAMS.map(team => (
        <ContainerImageCards key={team.key} team={team}>
          {team.members.map(member => (
            <ImageCards key={member.key} member={member} />
          ))}
        </ContainerImageCards>
      ))}
    </TranslationsProvider>
  );
}

export default About;
