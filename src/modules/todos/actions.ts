import { createStandardAction } from "typesafe-actions";

// 액션 type
export const ADD_TODO = "todos/ADD_TODO";
export const TOGGLE_TODO = "todos/TOGGLE_TODO";
export const REMOVE_TODO = "todos/REMOVE_TODO";
// 리듀서 만들 때 사용해야 하기 때문에 액션의 문자열 타입도 export해줘야 함

// 액션 생성 함수
export const addTodo = createStandardAction(ADD_TODO)<string>();
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
