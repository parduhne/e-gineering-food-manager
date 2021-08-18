import {
  Input as MUIInput,
  InputProps as MUIInputProps,
} from "@material-ui/core";

// export interface InputProps extends MUIInputProps {}
export interface InputProps {
  label: string;
  id: string;
  type: string;
  value: string | number;
  onChange: Function;
}
function Input({ label, id, type, value, onChange }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input onChange={() => onChange()} id={id} type={type} value={value} />
    </div>
  );
}

export default Input;
