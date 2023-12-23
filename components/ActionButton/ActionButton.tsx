import Link from 'next/link';
import style from './actionButton.module.css';

function ActionButton({ textButton, path, isButton = false }) {
  return (
    <>
      {isButton ? (
        <button className={style.button} type="submit">
          {textButton}
        </button>
      ) : (
        <Link href={path} className={style.button}>
          {textButton}
        </Link>
      )}
    </>
  );
}
export default ActionButton;
