import { TextField, InputLabel } from "@material-ui/core";

type InputProps = {
  label: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "number" | "email" | "phone" | "date";
};

export function Input({
  label,
  id,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <TextField id={id} onChange={onChange} type={type} value={value} />
      {/* <label htmlFor={id}>{label}</label>
      <br />
      <input onChange={onChange} id={id} type={type} value={value} /> */}
    </div>
  );
}
