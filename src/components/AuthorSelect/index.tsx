import React, { useState, useRef } from "react";
import Select, { components } from "react-select";
import styled from "styled-components";

const options: OptionData[] = [
  { label: "Andrea Rodriguez", email: "arodriguez@acme.com", value: 1 },
  { label: "Brian Williams", email: "brian12@yahoo.com", value: 2 },
  {
    label: "Julie Davis",
    email: "julie.davis@gmail.com",
    value: 3
  },
  { label: "Taylor James", email: "james_tyl@acme.com", value: 4 }
];

type OptionData = {
  label: string;
  value: number | string;
  email: string;
};

const OptionContainer = styled(components.Option)<{
  isRootOption: boolean;
  data: OptionData;
}>`
  display: flex;
  margin-bottom: 0px;
  font-size: 13px !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    content: "${({ data }) =>
      data.label
        .split(" ")
        .map((s: string) => s.charAt(0).toUpperCase())
        .join("")}";
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgrey;
    margin-right: 8px;
  }
`;

const Option = (props: any) => {
  return (
    <OptionContainer
      ref={props.innerRef}
      {...props}
      style={{
        display: "flex",
        margin: "8px 0 8px 14px",
        fontSize: "13px"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span {...props} />
        <span style={{ fontSize: "11px", color: "#A6A6A6" }}>
          {props.data.email}
        </span>
      </div>
    </OptionContainer>
  );
};

export default function AuthorSelect() {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  return (
    <Select
      ref={ref}
      isClearable={false}
      placeholder="Select..."
      onMenuOpen={() => setOpen(true)}
      is
      onMenuClose={() => {
        setOpen(false);
        setFocused(false);
      }}
      onFocus={e => {
        console.log("focus", e);
        setFocused(true);
      }}
      components={{ Option }}
      styles={{
        multiValue: base => ({
          ...base,
          background: "transparent",
          fontSize: "12px",
          paddingRight: 0,
          paddingLeft: 0
        }),
        option: base => ({
          ...base,
          display: "flex"
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
        multiValueRemove: base => ({
          ...base,
          display: "none"
        }),
        control: base => {
          console.log("base", base);
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
