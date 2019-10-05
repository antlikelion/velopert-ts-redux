import React from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <TodoInsert />
      <TodoList />
    </div>
  );
};

export default App;
