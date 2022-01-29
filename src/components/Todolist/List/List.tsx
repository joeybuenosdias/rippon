import React from "react";
import type { ReactElement } from "react";
import { useTodoList } from "..";

export default function List(): ReactElement {
  const { list } = useTodoList();
  return (
    <ul>
      {list.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}
