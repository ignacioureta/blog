import React, { useState, useRef } from "react";
import Select from "react-select";

const options = [
  { label: "Email", value: 1 },
  { label: "Desktop", value: 2 },
  { label: "Mobile", value: 3 },
  { label: "Web", value: 4 },
  { label: "Scanner", value: 5 },
  { label: "Skitch", value: 6 },
  { label: "Web Clipper", value: 7 }
];

export default function LocatedInSelect() {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  return (
    <Select
      ref={ref}
      isClearable={false}
      placeholder="Mobile, desktop..."
      onMenuOpen={() => setOpen(true)}
      defaultValue={options[0]}
      onMenuClose={() => {
        setOpen(false);
        setFocused(false);
      }}
      onFocus={e => {
        console.log("focus", e);
        setFocused(true);
      }}
      styles={{
        multiValue: base => ({
          ...base,
          fontSize: "12px",
          background: "transparent",
          padding: 0
        }),
        placeholder: base => ({
          ...base,
          color: "#A6A6A6",
          fontSize: "12px"
        }),
        multiValueLabel: base => ({
          ...base,
          fontSize: "12px",
          marginTop: "2px",
          color: "#0081C2"
        }),
        option: base => ({ ...base, fontSize: "13px", color: "#333333" }),
        multiValueRemove: base => ({
          ...base,
          display: "none"
        }),
        control: base => {
          return {
            ...base,
            "&:after": {
              borderBottom: "1px solid red"
            },
            border: "none",
            borderRadius: open || focused ? "4px" : "0px",
            borderBottom: "1px solid hsl(0,0%,80%)"
          };
        },
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
