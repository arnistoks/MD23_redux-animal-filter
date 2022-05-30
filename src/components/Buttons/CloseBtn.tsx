import React, { FC } from 'react';

type CloseBtnProps = {
    onClick: () => void;
}

const CloseBtn:FC<CloseBtnProps> = ({ onClick }) => (
  <button
    className="button__add button__close"
    onClick={onClick}
    type="button"
  >
    X
  </button>
);

export default CloseBtn;
