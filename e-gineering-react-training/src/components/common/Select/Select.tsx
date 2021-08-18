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
  value: string;
  selectOptions: SelectOption[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
function Select(props: SelectProps) {
  const { label, id, placeholder, value, selectOptions, onChange } = props;
  return (
    <div>
      <label>{label}</label>
      <br />
      <select id={id} placeholder={placeholder}>
        <option value=""></option>
        {selectOptions.map((opt) => (
          <option
            selected={value === opt.value}
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
