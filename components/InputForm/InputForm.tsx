'use client';
import {
  createRef,
  useImperativeHandle,
  forwardRef,
  useState,
  ChangeEvent
} from 'react';
import style from './inputForm.module.css';
import { InterInputForm } from '@/interfaces/default';
import { useTranslation } from 'react-i18next';

interface PropsInput extends InterInputForm {}

const InputForm = forwardRef(
  (
    {
      name,
      title,
      type = 'text',
      msgError,
      validator,
      isRequired = true
    }: PropsInput,
    ref
  ) => {
    const { t } = useTranslation();
    const refInput = createRef<HTMLInputElement>();
    const [isValid, setIsValid] = useState(true);

    useImperativeHandle(ref, () => ({
      isValidInput() {
        const data = refInput?.current;
        if (data) {
          setIsValid(validator.test(data.value));
          return validator.test(data.value);
        }
        return false;
      }
    }));

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const data = event.currentTarget;
      setIsValid(validator.test(data.value));
    };

    return (
      <div className={`${style.containerInput}`}>
        <label htmlFor={name}>
          {t(title)}
          <span>{isRequired && ' *'}</span>
        </label>
        <input
          id={name}
          name={name}
          className={isValid ? '' : style.inputError}
          type={type}
          onChange={handleChange}
          ref={refInput}
        />
        <p
          className={
            isValid ? style.errorMsg : `${style.errorMsg} ${style.showError}`
          }>
          {t(msgError)}
        </p>
      </div>
    );
  }
);

InputForm.displayName = 'InputForm';

export default InputForm;
