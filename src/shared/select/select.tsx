import { SelectStyle } from "./select.styles";
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Array<{ value: string; label: string }>;
  block?: boolean;
  error?: boolean;
}

function Select({label, options, ...props}: SelectProps) {
  return (
    <div>
      {label && <label>{label}</label>}
    <SelectStyle {...props}>
      {options
        ? options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        : props.children}
    </SelectStyle>
    </div>
  );
}

export default Select;
