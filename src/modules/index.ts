import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import { useSelector } from "react-redux";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
// 이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해서
// useSelector를 사용하기 위해서 필요함
