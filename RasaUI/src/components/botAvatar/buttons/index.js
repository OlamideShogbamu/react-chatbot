import { Button } from "@mui/material";
import React from "react";

const Buttons = (props) => {
  const [show, setShow] = React.useState(true);

  const data = ["Gombe", "Kaduna", "Kano", "Lagos"];

  const handleSend = (name) => {
    console.log("Sending button:", name);
    props.actionProvider.addStateToState(name);
    props.actionProvider.enterName(name);
    setShow(false);
    props.actionProvider.showSelectState(name);
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
              justifyContent: "space-between",
            }}
          >
            {(props.actionProvider.stateRef.buttons || data).map((name) => {
              return (
                <Button
                  key={name}
                  variant="contained"
                  style={{ background: "#e6237e", fontWeight: 500 }}
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
