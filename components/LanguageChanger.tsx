'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import Image from 'next/image';
import ingles from '@/public/assets/estados-unidos.png';
import español from '@/public/assets/colombia.png';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      zIndex: 9999
    }
  }
};

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const handleChange = (e: SelectChangeEvent) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 25,
        right: 15,
        zIndex: 999,
        height: 50
      }}>
      <Select
        value={currentLocale}
        displayEmpty
        onChange={handleChange}
        style={{ height: 50, zIndex: 9991, background: '#ffffff69' }}
        MenuProps={MenuProps}>
        <MenuItem value="en">
          <Image width={25} height={25} src={ingles} alt="english" />
        </MenuItem>
        <MenuItem value="es">
          <Image width={25} height={25} src={español} alt="español" />
        </MenuItem>
      </Select>
    </div>
  );
}
