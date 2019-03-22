import React from 'react';

type Props = {
  value?: number;
};

const UserInput = ({value}: Props) => <li>{value ? value : '0'}</li>;

export default UserInput;
