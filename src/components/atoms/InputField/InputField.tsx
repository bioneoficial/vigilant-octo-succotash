import { ChangeEventHandler, memo } from "react";
import { classNames } from "@/utils/utils";

type Props = {
  autoFocus?: boolean;
  errorMessage?: string;
  initialValue?: string | number | null;
  id?: string;
  label: string;
  name: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  type?:
    | "date"
    | "email"
    | "number"
    | "password"
    | "tel"
    | "text"
    | "time"
    | "checkbox"
    | "file";
  className?: string[];
  classNameInput?: string[];
  inputRef?: React.RefObject<HTMLInputElement>;
};

const InputFieldComponent: React.FC<Props> = ({
  autoFocus = false,
  errorMessage,
  initialValue,
  id,
  label,
  name,
  placeholder,
  onChange,
  required = false,
  type = "text",
  className = [],
  classNameInput = [],
  inputRef,
}: Props) => {
  if (type === "file") {
    return (
      <label className={classNames(...className)} htmlFor={id}>
        {label}
        <input
          aria-invalid={!!errorMessage}
          autoFocus={autoFocus}
          className={classNames(...classNameInput)}
          name={name}
          onChange={onChange}
          required={required}
          type={type}
          id={id}
          accept="image/*"
          ref={inputRef}
        />
        {!!errorMessage && <div>{errorMessage}</div>}
      </label>
    );
  } else if (
    type === "checkbox" &&
    (initialValue === "true" ||
      initialValue === "false" ||
      typeof initialValue === null)
  ) {
    return (
      <label className={classNames(...className)} htmlFor={id}>
        <input
          className={classNames(...classNameInput)}
          name={name}
          onChange={onChange}
          type={type}
          id={id}
          ref={inputRef}
          checked={initialValue === "true" ? true : false}
        />
        {label}
      </label>
    );
  } else if (
    type === "number" &&
    (typeof initialValue === "number" || typeof initialValue === null)
  ) {
    return (
      <label className={classNames(...className)} htmlFor={id}>
        {label}
        <input
          aria-invalid={!!errorMessage}
          autoFocus={autoFocus}
          className={classNames(...classNameInput)}
          defaultValue={initialValue ?? 0}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          type={type}
          id={id}
          ref={inputRef}
        />
        {!!errorMessage && <div>{errorMessage}</div>}
      </label>
    );
  }

  return (
    <label className={classNames(...className)} htmlFor={id}>
      {label}
      <input
        aria-invalid={!!errorMessage}
        autoFocus={autoFocus}
        className={classNames(...classNameInput)}
        defaultValue={initialValue ?? ""}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        type={type}
        id={id}
        ref={inputRef}
      />
      {!!errorMessage && <div>{errorMessage}</div>}
    </label>
  );
};

export const InputField = memo(InputFieldComponent);
