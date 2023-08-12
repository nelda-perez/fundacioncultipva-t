import { useRef, useImperativeHandle, forwardRef, useState } from "react";
import style from "./inputForm.module.scss";

const InputForm = forwardRef(
  ({ name, type = "text", msgError, validator, isRequired = true }, ref) => {
    const refInput = useRef(null);
    const [isValid, setIsValid] = useState(true);

    useImperativeHandle(ref, () => ({
      isValidInput() {
        const data = refInput;
        if (data.current) {
          setIsValid(validator.test(data.current.value));
          return validator.test(data.current.value);
        }
        return false;
      },
    }));

    const handleChange = (event) => {
      const data = event.currentTarget;
      setIsValid(validator.test(data.value));
    };

    return (
      <div className={`${style.containerInput}`} htmlFor={name}>
        <input
          id={name}
          name={name}
          className={isValid ? "" : style.inputError}
          type={type}
          onChange={handleChange}
          ref={refInput}
        />
        <label>{name}<span>{isRequired && ' *'}</span></label>
        <p
          className={
            isValid ? style.errorMsg : `${style.errorMsg} ${style.showError}`
          }>
          {msgError}
        </p>
      </div>
    );
  }
);

InputForm.displayName = "InputForm";

export default InputForm;
