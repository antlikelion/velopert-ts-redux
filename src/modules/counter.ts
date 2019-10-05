import Counter from "../components/Counter";
import { createStandardAction, createReducer } from "typesafe-actions";

export const increase = createStandardAction("counter/INCREASE")();
export const decrease = createStandardAction("counter/DECREASE")();
export const increaseBy = createStandardAction("counter/INCREASE_BY")<number>();
// 액션의 payload로 들어갈 값은 generic으로 설정 가능
// payload가 필요 없다면 generic생략

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

const counter = createReducer(initialState)
  .handleAction(increase, state => ({ count: state.count + 1 }))
  .handleAction(decrease, state => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload
  }));
// 가독성 면에서는 object map의 형식이 더 좋으나, 위와 같은 메소드 체이닝 방식은
// handleAction의 첫번째 인자로 액션의 문자열 타입이 아닌 액션 생성 함수를 넣어도 작동한다는 장점이 있다
// ->즉, 사전에 액션들의 문자열 타입들을 선언할 필요도, 액션들의 객체 타입을 준비할 필요도 없음
// createStandardAction으로 만든 액션 생성 함수가 getType이라는 함수를 가지고 있기에 이러한 것이 가능

export default counter;
