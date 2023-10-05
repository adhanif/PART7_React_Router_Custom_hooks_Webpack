import React from "react";

const Notification = ({ message }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
  };
  return message ? <div style={style}>{message}</div> : null;
};

export default Notification;
