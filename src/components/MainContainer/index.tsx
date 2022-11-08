import React from "react";

function MainContainer({ children }) {
  return (
    <main className="container container--fluid padding-vert--lg">
      {children}
    </main>
  );
}

export default MainContainer;
