// import React from 'react';
import '../../App.css';
import Btn from "../Btn"
// export default function Estimator() {
//   return <h1 className='estimator'>Estimator</h1>;
// }


import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Box } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const bednbath = [
  { value: '1', label: '1'},
  {value: '2', label: '2',},
  {value: '3', label: '3',},
  {value: '4', label: '4',},
  {value: '5', label: '5',},
];

class Estimator extends React.Component {
  state = {
    bed: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <estimatore>
        
      <div className={classes.root}>
        <TextField
          id="outlined-simple-start-adornment"
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Acre lot"
          InputProps={{
            startAdornment: <InputAdornment position="start">number</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-simple-start-adornment"
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="House_size"
          InputProps={{
            startAdornment: <InputAdornment position="start">number</InputAdornment>,
          }}
        />
        <TextField
          select
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="bed size"
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Bed</InputAdornment>,
          }}
        >
          {bednbath.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="bath size"
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Bath</InputAdornment>,
          }}
        >
          {bednbath.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField
          id="outlined-simple-start-adornment"
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="City"
          InputProps={{
            startAdornment: <InputAdornment position="start">string</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-simple-start-adornment"
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="State"
          InputProps={{
            startAdornment: <InputAdornment position="start">string</InputAdornment>,
          }}
        />

        {/* <TextField
          id="outlined-adornment-amount"
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Amount"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          id="outlined-adornment-weight"
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Weight"
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          helperText="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />

        <TextField
          id="outlined-adornment-password"
          // className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
      </div>
      <Btn
          type="" 
          text="submit"
               />
      </estimatore>
    );
  }
}

Estimator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Estimator);
