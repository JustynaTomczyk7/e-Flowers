import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
