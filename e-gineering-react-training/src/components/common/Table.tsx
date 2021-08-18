import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1000,
    backgroundColor: "#D3D3D3",
  },
  button: {
    backgroundColor: "cyan",
  },
});

interface Row {
  id: string;
  [key: string]: any;
}

export interface TableProps {
  head: string[];
  rows: Row[];
  onDelete?: Function;
}

function Table(props: TableProps) {
  const { head, rows, onDelete } = props;
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <MUITable
          size="small"
          aria-label="simple table"
          className={classes.table}
        >
          <TableHead>
            <TableRow>
              {onDelete && <TableCell></TableCell>}
              {head
                .filter((val) => val !== "id")
                .map((val) => (
                  <TableCell>{val}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((obj) => {
              const { id, ...row } = obj;
              return (
                <TableRow key={id}>
                  {onDelete && (
                    <Button
                      className={classes.button}
                      onClick={async () => onDelete && onDelete(id)}
                    >
                      Delete
                    </Button>
                  )}
                  {Object.values(row).map((val) => (
                    <TableCell component="th" scope="row">
                      {val}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </MUITable>
      </TableContainer>
    </>
  );
}

export default Table;
