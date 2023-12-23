'use client';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { FILESPDF } from '../../constant';
import { useTranslation } from 'react-i18next';

function ItemPdf() {
  const { t } = useTranslation();

  return (
    <>
      {FILESPDF.map(item => (
        <a key={item.key} href={item.file} target="_blank">
          <span>
            <PictureAsPdfIcon sx={{ fontSize: '60px', color: 'red' }} />
          </span>
          <span className="span-rte">{t(item.name)}</span>
        </a>
      ))}
    </>
  );
}
export default ItemPdf;
