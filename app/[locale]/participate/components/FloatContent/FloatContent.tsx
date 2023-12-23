/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import style from './floatContent.module.css';
import arrow from '@/public/assets/flecha verde.png';

function FloatContent({ children, update, hasIcon = true }: any) {
  return (
    <div className={`${style.content} ${style[update]}`}>
      {children}{' '}
      {hasIcon && <Image className={style.arrow} src={arrow} alt="flecha" />}
    </div>
  );
}
export default FloatContent;
