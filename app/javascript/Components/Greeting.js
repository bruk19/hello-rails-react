import React, { useEffect } from "react";
import { getMessage } from "../Redux/reducer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    await axios.get("api/messages").then((response) => {
      dispatch(getMessage(response.data.greeting));
    });
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return <h1>{message}</h1>;
};

export default Greeting;