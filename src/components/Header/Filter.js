import React from "react";

import NativeSelect from "@mui/material/NativeSelect";

const Filter = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <NativeSelect
      onChange={handleChange}
      defaultValue={""}
      inputProps={{
        name: "age",
        id: "uncontrolled-native",
      }}
    >
      {props.filterBy.map((el) => (
        <option key={el.id} value={el.id}>Ten - {el.amount}</option>
      ))}
    </NativeSelect>
  );
};

export default Filter;
