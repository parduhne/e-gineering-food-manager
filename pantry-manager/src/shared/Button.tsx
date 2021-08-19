import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "cyan",
    },
  })
);

export interface ButtonProps extends MuiButtonProps {}

export default function Button(props: ButtonProps) {
  const classes = useStyles();
  return <MuiButton {...props} className={classes.root}></MuiButton>;
}
