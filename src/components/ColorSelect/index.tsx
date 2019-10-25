import React, { useState } from "react";
import Select from "react-select";

const options = [
  { label: "House", value: 1 },
  { label: "red", value: 2 },
  { label: "purple", value: 3 },
  { label: "orange", value: 4 },
  {
    label: "yellow",
    value: 7
  }
];

export default function ColorSelect() {
  const [open, setOpen] = useState(false);

  return (
    <Select
      isClearable={false}
      placeholder="Select..."
      onMenuOpen={() => setOpen(true)}
      onMenuClose={() => setOpen(false)}
      styles={{
        multiValue: base => ({
          ...base,
          background: "#F2F2F2",
          height: "24px",
          boxSizing: "border-box",
          padding: "5px 8px",
          borderRadius: "12px",
          fontSize: "12px",
          paddingRight: "11px"
        }),
        multiValueLabel: base => ({
          ...base,
          fontSize: "12px",
          marginTop: "-3px"
        }),
        multiValueRemove: base => ({
          ...base,
          display: "none"
        }),
        placeholder: base => ({
          ...base,
          color: "#A6A6A6",
          fontSize: "12px"
        }),
        control: base => ({
          ...base,
          border: "none",
          borderRadius: open ? "4px" : "0px",
          borderBottom: "1px solid hsl(0,0%,80%)"
        }),
        dropdownIndicator: base => ({
          ...base,
          color: "#000000"
        }),
        indicatorSeparator: base => ({ ...base, display: "none" })
      }}
      options={options}
      isMulti
    />
  );
}
