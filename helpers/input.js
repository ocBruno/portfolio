import React, { useState } from "react";
export function useInput({ type, defaultVal }) {
  const [value, setValue] = useState(defaultVal);
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
}

export function useSelect({ name, values, className }) {
  const activeValue = values.length === 0 ? values : values[0];
  const [value, setValue] = useState(activeValue);
  const input = (
    <select
      id={name}
      name={name}
      className={className}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      {values.map((elementValue, index) => {
        return (
          <option
            selected={elementValue === value}
            value={elementValue}
            key={index}
          >
            {elementValue}
          </option>
        );
      })}
    </select>
  );
  return [value, input];
}
