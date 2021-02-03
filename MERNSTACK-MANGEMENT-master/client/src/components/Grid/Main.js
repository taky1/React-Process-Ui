import React, { useState, useEffect } from "react";

import { Dustbin } from './Dustbin.js';
import { useDispatch } from "react-redux";
import { getPosts } from "../../Mern/actions/posts";

import "./main.css";
import Modal1 from "..\\..\\testt\\Modal1";
import { Box } from './Box';
import { Grid } from "@material-ui/core";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";

import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Main = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  useEffect(
    () => {
      dispatch(getPosts());
    },
    [dispatch]
  );
  return (
    <div>
    

      <Grid container direction="row" spacing={3} maxWidth="lg">
     
        <Grid
          className="grid2"
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          item
          xs={12}
          sm={2}
          elevation={3}

          style={{ padding: 20, display: "block", textAlign: "center" }}
        >
          <h1 className="h1">Tools</h1>
          <Box
            name="MailOutlineIcon"
            color="#eec360"
            iconToShow={<MailOutlineIcon style={{ fontSize: 60, color: "#eec360", padding: 10 }}
            />
            } />

          <Box
            name="CalendarTodayTwoToneIcon"
            color="#eec360"
            iconToShow={<CalendarTodayTwoToneIcon
              style={{ fontSize: 60, color: "#eec360", padding: 10 }}
            />
            } />

          <Box
            name="LaunchSharpIcon"
            color= "#93d2f0"
            iconToShow={<LaunchSharpIcon
              style={{ fontSize: 60, color: "#93d2f0", padding: 10 }}
            />
            } />

          <Box
            name="AssignmentIndTwoToneIcon"
            color= "#adee82"
            iconToShow={<AssignmentIndTwoToneIcon
              style={{ fontSize: 60, color: "#adee82", padding: 10 }}
            />
            } />


        </Grid>

        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          xs={12}
          sm={10}
        >
          <h1>Work Flow</h1>

          <Dustbin
            list={list}
            setList={setList} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
