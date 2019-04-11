import React from 'react';
import './Results.css';

type Props = {
  item: number;
};

const StackItem = ({item}: Props) => <div className="Result-item">{item}</div>;

export default StackItem;
