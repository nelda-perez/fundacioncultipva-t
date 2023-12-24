import Link from 'next/link';
import style from './actionButton.module.css';
import { useTranslation } from 'react-i18next';

interface Props {
  textButton: string;
  path?: string;
  isButton?: Boolean;
}

function ActionButton({ textButton, path, isButton = false }: Props) {
  const { t } = useTranslation();
  return (
    <>
      {isButton ? (
        <button className={style.button} type="submit">
          {t(textButton)}
        </button>
      ) : (
        <Link href={path || ''} className={style.button}>
          {t(textButton)}
        </Link>
      )}
    </>
  );
}
export default ActionButton;
