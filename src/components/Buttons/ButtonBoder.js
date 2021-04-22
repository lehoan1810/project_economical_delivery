import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {    
    borderRadius: 50,
    border: '8px',
    boxShadow: 'inset 0 0 0 4px #F2994A',    
    fontFamily: 'Roboto',
    fontWeight: '400',
    background: 'transparent',
    color: 'black',
    height: 48,
    padding: '24px 30px',
    margin: '16px',
    textTransform: 'none',
    "&:hover": {
        backgroundColor: 'transparent',//remove hover
        }
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
