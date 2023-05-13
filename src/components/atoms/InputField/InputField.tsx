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
    | "checkbox";
  className?: string[];
  classNameInput?: string[];
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
}: Props) => {
  if (
    type === "checkbox" &&
    (typeof initialValue === "boolean" || typeof initialValue === null)
  ) {
    return (
      <label className={classNames(...className)} htmlFor={id}>
        <input
          className={classNames(...classNameInput)}
          name={name}
          onChange={onChange}
          type={type}
          id={id}
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
      />
      {!!errorMessage && <div>{errorMessage}</div>}
    </label>
  );
};

export const InputField = memo(InputFieldComponent);
