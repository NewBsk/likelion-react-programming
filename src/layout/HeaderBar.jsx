// import styles from "@/styles/HeaderBar.module.css";
import Heading from "@/components/Heading";

// 리액트 도구 학습 -> 사용 (필수 JavaScript 언어 구문 독해 및 활용 능력)
// var mood = '기운차게 시작';
// 템플릿 리터럴 구문 `오늘도 ${mood}하자!` -> string

function HeaderBar() {
  return (
    <header className="p-5 bg-indigo-900 text-indigo-50 ">
      <Heading />
    </header>
  );
}

export default HeaderBar;
