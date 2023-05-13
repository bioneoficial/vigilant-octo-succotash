import { classNames, gambiarraDoSelect } from "@/utils/utils";
import { ChangeEventHandler, memo } from "react";

type Props = {
  className?: string[];
  errorMessage?: string;
  initialValue?: string | null;
  label: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options: { value: string; text: string }[];
  required?: boolean;
  tooltip?: string;
  classNameInput?: string[];
};

const SelectFieldComponent: React.FC<Props> = ({
  className,
  errorMessage,
  initialValue,
  label,
  name,
  onChange,
  options,
  tooltip,
  required = false,
  classNameInput = [],
}: Props) => {
  gambiarraDoSelect(String(initialValue), options);

  return (
    <label className={classNames(...(className ?? []))} title={tooltip}>
      {label}
      <select
        name={name}
        onChange={onChange}
        required={required}
        defaultValue={initialValue ?? ""}
        className={classNames(...classNameInput)}
      >
        <option hidden disabled value="">
          -- selecione uma opção --
        </option>
        {options.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </select>
      {!!errorMessage && <div>{errorMessage}</div>}
    </label>
  );
};

export const SelectField = memo(SelectFieldComponent);
