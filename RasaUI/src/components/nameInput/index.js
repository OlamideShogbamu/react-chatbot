import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

export default function CustomizedInputBase(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [show, setShow] = React.useState(true);
  // Function to handle the input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle send action (for both Enter key and send button click)
  const handleSend = () => {
    if (inputValue.trim()) {
      console.log("Sending message:", inputValue);
      props.actionProvider.addNameToState(inputValue);
      props.actionProvider.enterName(inputValue);
      setInputValue("");
      setShow(false);
      props.actionProvider.showSelectState();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {show ? (
        <div
          style={{
            width: 300,
            marginLeft: "4%",
            marginTop: "-5px",
            padding: "5px  20px 0 ",
            background: "#fff",
          }}
        >
          <div
            style={{
              padding: "2px 4px 0",
              display: "flex",
              alignItems: "center",
              border: "2px solid #e6237e",
              borderRadius: "5px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter your name"
              inputProps={{ "aria-label": "Enter your name" }}
              value={inputValue} // Bind the input value to state
              onChange={handleInputChange} // Handle input change
              onKeyPress={handleKeyPress} // Handle Enter key press
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="send"
              onClick={handleSend} // Handle send button click
            >
              <SendIcon />
            </IconButton>
          </div>
          <p
            style={{
              fontSize: 12,
              fontWeight: 500,
              textAlign: "left",
              padding: "10px 0 ",
              color: "#3a3b3d",
            }}
          >
            Press enter to send
          </p>
        </div>
      ) : null}
    </>
  );
}
