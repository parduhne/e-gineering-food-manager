import {
  Input as MUIInput,
  InputProps as MUIInputProps,
} from "@material-ui/core";

// export interface InputProps extends MUIInputProps {}
export interface InputProps {
  label: string;
  id: string;
  type: string;
}
function Input(props: InputProps) {
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input id={props.id} type={props.type} />
    </div>
  );
}

export default Input;
