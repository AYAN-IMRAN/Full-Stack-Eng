import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/ThemeContext";

function ShowCount() {
    console.log("ShowCounte re render")
    const { count } = useContext(CounterContext);
    return <p>{count}</p>
}

export default ShowCount;
