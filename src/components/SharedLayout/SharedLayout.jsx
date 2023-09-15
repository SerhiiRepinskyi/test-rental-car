import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar";
import { ContainerMain } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <main>
        <ContainerMain>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </ContainerMain>
      </main>
    </>
  );
};

export default SharedLayout;
