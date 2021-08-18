import MuiButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "cyan",
  },
});

function Button() {
  const classes = useStyles();
  return <MuiButton className={classes.button}></MuiButton>;
}
