import { useId, useState } from "react";

// const getOne = () => 1;

function LearnStateAndEffects() {
  // 지역 변수는 상태 변수가 안됩니다
  // 리액트 상태 변수는 useState 훅(함수) 사용한다.
  // Q. 리액트의 컴포넌트 count 상태를 리액트에서 인식하도록 정의해봅니다.
  // let count = 100
  const [count, setCount] = useState(100);
  const [step, setStep] = useState(15);
  // const [count2] = useState(() => getOne());

  // console.log(count);
  // console.log(count2);

  // 상태 정의와 상태 변경

  // 관리가 까다로운 ID 속성 값을 자동 생성하는 훅
  const stepperId = useId();

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className="text-indigo-600 text-2xl uppercase">
        Learn State And Effects {count}
      </h2>
      <div className="flex flex-col gap-2 items-end">
        <div className="flex gap-2 items-center">
          <label htmlFor="" className="text-base">
            step
          </label>
          <input
            id={stepperId}
            type="number"
            value={step}
            onChange={(e) => {
              const nextStep = Number(e.target.value);
              setStep(nextStep); // <- 리렌더링(렌더 트리거)
            }}
            className="w-[60px] py-1 px-2 border-slate-300 border rounded-xl"
          />
        </div>
        <button
          type="button"
          onClick={() => setCount(count + step)}
          className="py-0.5 px-2.5 border rounded-md border-slate-600"
        >
          +{step}
        </button>
      </div>
    </div>
  );
}

export default LearnStateAndEffects;
