const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});
// 함수명에 커서 올려서 type을 확인해보셈 string이 아님(as const 덕분임)

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
// ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입임
// 위에서 액션의 type을 선언할 때 as const로 선언해주지 않으면 ReturnType이 반환한 type값이 string이 된다.
// 그러면 리듀서를 쓰기 힘듬
