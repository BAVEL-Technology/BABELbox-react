import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Main() {
  return (
    <div>
      <div
        data-barba="container"
        data-barba-namespace="hero"
        class="w-full flex flex-col items-center items-center min-h-screen"
      >
        <ul class="transition">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
          {/* game card */}
        </div>
      </div>
    </div>
  );
}

export default Main;
