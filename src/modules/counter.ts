import Counter from "../components/Counter";
import {
  createStandardAction,
  ActionType,
  createReducer
} from "typesafe-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";
// typesafe-actions를 사용하면 as const로 선언할 필요가 없음

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();
// 액션의 payload로 들어갈 값은 generic으로 설정 가능
// payload가 필요 없다면 generic생략

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;
// actions에 모든 액션 생성 함수를 담고 ActionType으로 감싸주기

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1 }),
  [DECREASE]: state => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
});

export default counter;
