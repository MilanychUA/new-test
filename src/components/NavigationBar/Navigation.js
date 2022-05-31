import React, { useEffect, useState } from "react";
import classes from "./Navigation.module.css";
import Button from "@mui/material/Button";
import loader from "../assest/Blocks-1s-200px.gif";
import axios from "axios";
const NavigationBar = ({ isAnimationShown }) => {
  const [titleButton, setTitleButton] = useState(0);

  // TODO: REREAD and Understand
//   const user = { firstName: 'Volodymyr', lastName: 'Milanych' }
  //   const firstName = user.firstName
  //   const lastName = user.lastName
//   const { firstName, lastName } = user

  const onChangeTtitle = () => {
    setTitleButton(titleButton + 1);
  };

  async function getUser() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className={classes.div}>
      {isAnimationShown && (
        <div>
          <img src={loader} />
        </div>
      )}
      <Button variant="contained" onClick={getUser}>
        {titleButton}
      </Button>
    </div>
  );
};

export default NavigationBar;
