import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function ShowCount() {
    console.log("ShowCounte re render")
    const { count } = useContext(CounterContext);
    return <p>{count}</p>
}

export default ShowCount;
