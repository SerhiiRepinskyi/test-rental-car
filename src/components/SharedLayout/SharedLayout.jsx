import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar";

const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
