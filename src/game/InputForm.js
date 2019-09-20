import React from 'react';

function InputForm({textLabel, name, placeholder, value, onChange}) {
  return (
    <>
      <label htmlFor='row'>{textLabel}</label>
      <input
        type='number'
        name={name}
        className={name}
        placeholder={placeholder}
        min='4'
        max='50'
        value={value}
        required
        onChange={onChange}
      />
    </>
  );
}

export default InputForm;
