import {
  Input as MUIInput,
  InputProps as MUIInputProps,
} from "@material-ui/core";

// export interface InputProps extends MUIInputProps {}
interface SelectOption {
  label: string;
  value: string;
}
export interface SelectProps {
  label: string;
  id: string;
  placeholder: string;
  selectOptions: SelectOption[];
}
function Select(props: SelectProps) {
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <select id={props.id} placeholder={props.placeholder}>
        {props.selectOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
