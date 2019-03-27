import React from 'react';
import './Results.css';

type Props = {
  item: number;
};

const StackItem = ({item}: Props) => <li className="Result-item">{item}</li>;

export default StackItem;
