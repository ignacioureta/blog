import React, { useState, useRef } from "react";
import Select, { components } from "react-select";
import styled from "styled-components";

import SpaceSvg from "./space.svg";
import NotebookSvg from "./notebook.svg";

const options = [
  { label: "Meeting Notes", value: 1 },
  { label: "red", value: 2 },
  { label: "purple", type: "space", value: 3 },
  { label: "orange is the new black", value: 4 },
  {
    label: "HR",
    options: [
      { label: "Freddy Mercury stormborn", value: 5 },
      { label: "Madonna", value: 6 }
    ]
  },
  {
    label: "Finance",
    options: [
      { label: "Results 2018", value: 7 },
      { label: "Results 2019", value: 8 }
    ]
  }
];

const GroupHeading = (props: any) => (
  <div
    style={{
      display: "flex",
      marginLeft: 14,
      marginBottom: 5,
      fontSize: "13px"
    }}
  >
    <img style={{ display: "inline-block", marginRight: 7 }} src={SpaceSvg} />
    <span {...props} />
  </div>
);

enum Type {
  SPACE = "space",
  NOTEBOOK = "notebook"
}

type OptionData = {
  label: string;
  value: number | string;
  type?: Type;
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
    position: relative;
    top: ${({ data: { type } }) => (type === Type.SPACE ? "4px;" : "2px")};
    ${({ data: { type } }) => (type === Type.SPACE ? "left: -2px;" : "")}
    margin-left: ${({ isRootOption }) => (isRootOption ? 3 : 30)}px;
    content: url("${({ data: { type } }) =>
      type === Type.SPACE ? SpaceSvg : NotebookSvg}");
    margin-right: 7px;
    display: inline-block; 
  }
`;

const Option = (props: any) => {
  const isRootOption = props.options.find(
    (option: any) => option.value === props.value
  );

  return (
    <OptionContainer data={props.data} isRootOption={isRootOption} {...props} />
  );
};

export default function LocatedInSelect() {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  return (
    <Select
      ref={ref}
      isClearable={false}
      placeholder="Notebook or Space..."
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
      components={{ GroupHeading, Option }}
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
        placeholder: base => ({
          ...base,
          color: "#A6A6A6",
          fontSize: "12px"
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
