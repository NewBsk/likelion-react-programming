// import styles from "@/styles/HeaderBar.module.css";
import Heading from "@/components/Heading";
import Nav from "./Nav";

// 리액트 도구 학습 -> 사용 (필수 JavaScript 언어 구문 독해 및 활용 능력)
// var mood = '기운차게 시작';
// 템플릿 리터럴 구문 `오늘도 ${mood}하자!` -> string

function HeaderBar() {
  return (
    <header className="flex justify-between items-center p-5 bg-indigo-950 text-indigo-50">
      <Heading />
      <Nav />
    </header>
  );
}

export default HeaderBar;
