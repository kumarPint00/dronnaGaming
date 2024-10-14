// components/roulette_components/table/RouletteTable.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Button, Tooltip, Typography, Box } from '@mui/material';
import './Table.css'; // Assuming this contains custom styling
import Chip from '../chips/Chips';

interface RouletteTableProps {
  firstRow: any[];
  firstBorder: any[];
  secondRow: any[];
  secondBorder: any[];
  thirdRow: any[];
  thirdBorder: any[];
  fourthRow: any[];
  fifthRow: any[];
  columnLeft: any[];
  columnRight: any[];
  updateRow: (row: string, val: any[]) => void;
  updateArr: (arr: string[]) => void;
  updateCoins: (coins: number) => void;
  arr: string[];
  coins: number;
  chip: number;
  spinning: boolean;
}

const RouletteTable: React.FC<RouletteTableProps> = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [rowsState, setRowsState] = useState({
    firstRow: props.firstRow,
    firstBorder: props.firstBorder,
    secondRow: props.secondRow,
    secondBorder: props.secondBorder,
    thirdRow: props.thirdRow,
    thirdBorder: props.thirdBorder,
    fourthRow: props.fourthRow,
    fifthRow: props.fifthRow,
    columnLeft: props.columnLeft,
    columnRight: props.columnRight,
  });

  const disableTable = useCallback(() => {
    setDisabled(props.spinning);
  }, [props.spinning]);

  useEffect(() => {
    disableTable();
  }, [disableTable]);

  const handleNumSelection = (num: string, whichRow: keyof typeof rowsState) => {
    let updatedArr = [...props.arr];
    let row = [...rowsState[whichRow]];
    let updatedCoins = props.coins;

    const numIndex = updatedArr.indexOf(num);

    if (numIndex >= 0) {
      updatedArr.splice(numIndex, 1);
      updatedCoins += props.chip;

      row = row.map((chip) => ({
        ...chip,
        visible: chip.n === num ? false : chip.visible,
      }));
    } else {
      updatedArr.push(num);
      updatedCoins -= props.chip;

      row = row.map((chip) => ({
        ...chip,
        visible: chip.n === num ? true : chip.visible,
      }));
    }

    setRowsState((prevState) => ({ ...prevState, [whichRow]: row }));
    props.updateArr(updatedArr);
    props.updateCoins(updatedCoins);
  };

  const renderRow = (rowName: keyof typeof rowsState) =>
    rowsState[rowName].map((num, index) => (
      <Tooltip key={`${num.n}-${index}`} title={`Bet on ${num.n}`} arrow>
        <Button
          onClick={() => handleNumSelection(num.n, rowName)}
          disabled={disabled}
          variant="outlined"
          sx={{ margin: 0.5 }}
        >
          <Chip id={num.n} active={num.visible} />
        </Button>
      </Tooltip>
    ));

  return (
    <Box className="roulette-table" sx={{ display: 'flex', flexDirection: 'row' }}>
      {/* Left Column */}
      <Box sx={{ marginRight: 2 }}>
        <ul className="list-unstyled">
          {rowsState.columnLeft.map((num, index) => (
            <li key={`${num.n}-${index}`} className={num.className}>
              <Typography>{num.n}</Typography>
            </li>
          ))}
        </ul>
      </Box>

      {/* Main Table */}
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {renderRow('firstRow')}
          </Grid>
          <Grid item xs={12}>
            {renderRow('firstBorder')}
          </Grid>
          <Grid item xs={12}>
            {renderRow('secondRow')}
          </Grid>
          <Grid item xs={12}>
            {renderRow('secondBorder')}
          </Grid>
          <Grid item xs={12}>
            {renderRow('thirdRow')}
          </Grid>
          <Grid item xs={12}>
            {renderRow('thirdBorder')}
          </Grid>
          <Grid item xs={12}>
            {renderRow('fourthRow')}
          </Grid>
          <Grid item xs={12}>
            {renderRow('fifthRow')}
          </Grid>
        </Grid>
      </Box>

      {/* Right Column */}
      <Box sx={{ marginLeft: 2 }}>
        <ul className="list-unstyled">
          {rowsState.columnRight.map((num, index) => (
            <li key={`${num.n}-${index}`} className={num.className}>
              <Button
                variant="outlined"
                onClick={() => handleNumSelection(num.n, 'columnRight')}
                disabled={disabled}
                sx={{ margin: 0.5 }}
              >
                <Chip id={num.n} active={num.visible} />
              </Button>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default RouletteTable;
