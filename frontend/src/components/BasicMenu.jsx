import { useState } from 'react';
import Button from './BaseButton';

export default function BasicMenu() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mainMenu">
      <Button
        id="basic-button"
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        Browse
      </Button>
      <ul
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="mainMenu"
      >
        <li onClick={handleClose}>Home</li>
      </ul>
    </div>
  );

}