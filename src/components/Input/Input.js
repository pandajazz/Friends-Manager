import React from 'react';

export const Input = ({
    name,
    type,
    value,
    onChange
  }) => {
    return (
      <input
        placeholder={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    )
  }
  