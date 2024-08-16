import { Button } from "@mui/material";
import React from "react";

const Buttons = (props) => {
  const [show, setShow] = React.useState(true);
  const buttonActions = [
    props.actionProvider.addStateToState,
    props.actionProvider.addLgaToState,
    props.actionProvider.addWardToState,
    props.actionProvider.addHcToState,
    props.actionProvider.showSelectState,
  ];
  const counter = props.actionProvider.stateRef.counter;

  const handleSend = (name) => {
    console.log("Sending button:", name);
    console.log(
      "counter = ",
      props.actionProvider.stateRef.counter,
      buttonActions[counter]
    );
    console.log(name.toLowerCase());
    props.actionProvider.enterName(name);
    // if (name.toLowerCase() === "go back") {
    //   if (counter === 0) {
    //     props.actionProvider.showSelectState();
    //     console.log("in go back");
    //   }
    //   else {

    //     props.actionProvider.decrementCounter();
    //     buttonActions[counter - 1](name);
    //     setShow(false);
    //   }
    //     return;
    // }
    if (buttonActions[counter]) buttonActions[counter](name);
    setShow(false);
    console.log(props.actionProvider.stateRef.buttons);
  };

  return (
    <>
      {show ? (
        <div style={{ marginLeft: "10%" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 500,
              textAlign: "left",
              padding: "10px 0 ",
              color: "#3a3b3d",
            }}
          >
            {props.title}
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {props.actionProvider.stateRef.buttons.map((name) => {
              return (
                <Button
                  key={name}
                  variant="contained"
                  style={{
                    background: "#e6237e",
                    fontWeight: 500,
                    marginTop: "10px",
                    flexBasis: "22%",
                    marginRight: "10px",
                  }}
                  onClick={() => handleSend(name)}
                >
                  {name}
                </Button>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Buttons;
