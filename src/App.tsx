import React from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
// import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div>
      {/* <Counter /> */}
      <TodoInsert />
      <TodoList />
    </div>
  );
};

export default App;
