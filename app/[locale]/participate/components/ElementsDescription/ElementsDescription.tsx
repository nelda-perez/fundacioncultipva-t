import { existLinks } from '@/utilities/showLinks';
import React from 'react';
import styles from './elementsDescription.module.css';
import { LinkParticipate } from '@/interfaces/default';
import { useTranslation } from 'react-i18next';

interface Props {
  list: string[];
  links?: LinkParticipate[];
}

function ElementsDescription({ list = [], links = [] }: Props) {
  const { t } = useTranslation();
  const getLinks = (position: number | string) => {
    return existLinks(position, links);
  };

  return (
    <ul>
      {list.map((cont, index) => {
        const { length, linksFilt } = getLinks(index);
        return (
          <li key={index} className={styles.list}>
            {t(cont)}{' '}
            {length > 0 &&
              linksFilt.map((link, i) => (
                <React.Fragment key={link.routerLink}>
                  <a className={styles.link} href={link.routerLink}>
                    {t(link.label)}
                  </a>
                  {length - 2 === i && 'y'}
                </React.Fragment>
              ))}
          </li>
        );
      })}
    </ul>
  );
}
export default ElementsDescription;
