import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
} from "@material-ui/core";
import React from "react";
type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label: string;
  options: SelectOption[];
  placeholderOption: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

// Destructuring props within the method signature to avoid repeating the word props.
export function Select({
  id,
  placeholderOption,
  value,
  options,
  onChange,
  label,
}: SelectProps) {
  const handleChange = ({
    target,
  }: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    debugger;
    if (target.name && onChange) {
      onChange({
        target: { id: target.name, value: target.value as string },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  return (
    <div>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          labelId="demo-simple-select-filled-label"
          name={id}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value=""></MenuItem>
          {options.map((option) => (
            <MenuItem
              selected={option.value === value}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
      {/* <label htmlFor={id}>{label}</label>
      <br />
      <select id={id} onChange={onChange} value={value}>
        <option value="">{placeholderOption}</option>
        {options.map((option) => (
          <option
            selected={option.value === value}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select> */}
    </div>
  );
}
