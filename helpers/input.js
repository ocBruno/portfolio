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

export function useSelect({ name, values, onChange = () => {} }) {
  const activeValue = values.length === 0 ? values : values[0];
  const [value, setValue] = useState(activeValue);
  const input = (
    <select
      id={name}
      name={name}
      onChange={(e) => setValue(e.target.value) && onChange()}
    >
      {values.map((element, index) => {
        return (
          <option value={element} key={index}>
            {element}
          </option>
        );
      })}
    </select>
  );
  return [value, input];
}
