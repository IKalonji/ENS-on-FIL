import React, { Component } from 'react';
import Button from '@mui/material/Button';

class MainButton extends Component {
  render() {
    const { variant, styling, buttonText, ButtonIsClicked } = this.props;

    return (
      <Button variant={variant} sx={styling} onClick={ButtonIsClicked} size='large'>
        {buttonText}
      </Button>
    );
  }
}

export default MainButton;
