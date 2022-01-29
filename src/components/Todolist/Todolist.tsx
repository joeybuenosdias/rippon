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

type TodoList = {
  list: Todo[];
};

const defaultTodoList = {
  list: [],
};

const TodoListContext = createContext<TodoList>(defaultTodoList);

export function useTodoList(): TodoList {
  return useContext(TodoListContext);
}

export default function TodoList(): ReactElement {
  const [todoList, setTodoList] = useState<Todo[]>([]);

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
    setTodoList(newList);
  }, []);

  const value = useMemo(() => {
    return {
      list: todoList,
    };
  }, [todoList]);

  return (
    <TodoListContext.Provider value={value}>
      <div>
        <List />
      </div>
    </TodoListContext.Provider>
  );
}
