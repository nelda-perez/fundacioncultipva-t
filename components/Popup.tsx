'use client';
import { useTranslation } from 'react-i18next';

interface Props {
  open: boolean;
  content: string;
}

export default function BasicPopover({ open, content }: Props) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        background:
          'linear-gradient(45deg, var(--secondary-color) 0%, var(--primary-color) 100%)',
        padding: 15,
        color: 'white',
        borderRadius: 12,
        display: `${open ? '' : 'none'}`,
        position: 'fixed',
        bottom: 24,
        left: 14,
        zIndex: 999
      }}>
      <summary>{t(content)}</summary>
    </div>
  );
}
