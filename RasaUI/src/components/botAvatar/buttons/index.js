import { Button } from "@mui/material";
import React from "react";

const Buttons = (props) => {
  const [show, setShow] = React.useState(true);
  const buttonActions = [
    props.actionProvider.addStateToState,
    props.actionProvider.addLgaToState,
  ];
  const counter = props.actionProvider.stateRef.counter;
  const handleSend = (name) => {
    console.log("Sending button:", name);
    console.log(
      "counter = ",
      props.actionProvider.stateRef.counter,
      props.actionProvider.addLgaToState
    );
    props.actionProvider.enterName(name);
    if (buttonActions[counter]) buttonActions[counter](name);
    setShow(false);
    // props.actionProvider.showSelectState(name);
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
              width: "80%",
              display: "flex",
              // justifyContent: "space-between",
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
                    minWidth: "22%",
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
