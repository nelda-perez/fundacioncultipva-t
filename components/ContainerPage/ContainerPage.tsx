import { ReactNode } from 'react';
import style from './containerPage.module.css';

interface Props {
  children: ReactNode;
  customStyles?: any;
}

function ContainerPage({ children, customStyles }: Props) {
  return (
    <article className={style.container} style={customStyles}>
      {children}
    </article>
  );
}
export default ContainerPage;
