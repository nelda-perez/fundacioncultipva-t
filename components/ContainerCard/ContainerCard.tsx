import { InfoCards } from '@/interfaces/default';
import Card from '../Card/Card';
import style from './containerCard.module.css';

interface Props {
  infoCards: InfoCards[];
  principalPath: string;
}

function ContainerCard({ infoCards, principalPath }: Props) {
  return (
    <section className={style.container}>
      {infoCards.map(info => (
        <Card
          key={info.key}
          title={info.title}
          description={info.description}
          path={`${principalPath}#${info.path}`}
        />
      ))}
    </section>
  );
}
export default ContainerCard;
