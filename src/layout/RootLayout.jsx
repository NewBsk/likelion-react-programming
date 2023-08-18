/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";

function RootLayout() {
  // React API
  // return React.createElement(
  //   type,
  //   // props,
  //   // ...children
  //   // [child, child, child]
  // )

  // JSX
  // children = []
  return (
    <>
      <HeaderBar />
      <main className="p-5">
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
