import React, { FC } from 'react';
import './button.scss';

type ButtonProps = {
    name: string;
    onClick: () => void;
}

const Button:FC<ButtonProps> = ({ name, onClick }) => (
  <button
    className="button__add"
    onClick={onClick}
    type="button"
  >
    {name}
  </button>
);

export default Button;
