import React from "react";
import type { ReactElement } from "react";
import { useTodolist } from "..";

export default function List(): ReactElement {
  const { list } = useTodolist();
  return (
    <ul>
      {list.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}
