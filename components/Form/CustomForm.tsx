import { FormEvent, ReactNode } from 'react';
import style from './customForm.module.css';

interface Props {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  title: string;
}

function Form({ children, onSubmit, title }: Props) {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <h3 className={style.title}>{title}</h3>
      {children}
    </form>
  );
}
export default Form;
