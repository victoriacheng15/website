import React from "react";

function MainContainer({ children }: { children: React.ReactNode }) {
	return <main className="w-11/12 max-w-6xl mx-auto py-10">{children}</main>;
}

export default MainContainer;
