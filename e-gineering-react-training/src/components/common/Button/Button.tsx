import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";

const useStyles = makeStyles({
  button: {
    backgroundColor: "cyan",
  },
});

export interface ButtonProps extends MuiButtonProps {}

function Button(props: ButtonProps) {
  const classes = useStyles();
  return (
    <MuiButton
      {...props}
      className={cx(classes.button, props.className)}
    ></MuiButton>
  );
}

export default Button;
