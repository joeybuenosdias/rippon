import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import type { ReactElement } from "react";
import List from "./List";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type Todolist = {
  list: Todo[];
};

const defaultTodolist = {
  list: [],
};

const TodolistContext = createContext<Todolist>(defaultTodolist);

export function useTodolist(): Todolist {
  return useContext(TodolistContext);
}

export default function Todolist(): ReactElement {
  const [todolist, setTodolist] = useState<Todo[]>([]);

  useEffect(() => {
    const newList = [
      {
        id: "1",
        title: "Do laundry",
        completed: false,
      },
      {
        id: "2",
        title: "Work out",
        completed: false,
      },
    ];
    setTodolist(newList);
  }, []);

  const value = useMemo(() => {
    return {
      list: todolist,
    };
  }, [todolist]);

  return (
    <TodolistContext.Provider value={value}>
      <div>
        <List />
      </div>
    </TodolistContext.Provider>
  );
}
