import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StockService from "../Services/Stock/StockService";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function IApp(): any {
  const [stocks, setStocks] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getStocksFn = async () => {
      const { loading, data } = await StockService.getStocks();
      setStocks(data.stocks);
    };
    getStocksFn();
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Ticker Symbol</TableCell>
            <TableCell align="right">Last Price</TableCell>
            <TableCell align="right">Predicted Price</TableCell>
            <TableCell align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.tickerSymbol}>
              <TableCell component="th" scope="row">
                {stock.company}
              </TableCell>
              <TableCell align="right">{stock.tickerSymbol}</TableCell>
              <TableCell align="right">{stock.lastPrice}</TableCell>
              <TableCell align="right">{stock.predictedPrice}</TableCell>
              <TableCell align="right">None</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
