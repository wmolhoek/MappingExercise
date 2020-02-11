import React from "react";
import "./styles.css";
import dataBig from "./dataBig";

export default function App() {
  const Person = dataBig.map(d => (
    <div key={d.first}>
      First Name: {d.first}
      <br /> Last Name: {d.last}
      <br /> Email: {d.email}
      <br />
      Address: {d.address}
      <br /> Created: {d.created}
      <br />
      Balance: {d.balance}{" "}
    </div>
  ));
  return <div>{Person}</div>;
}
