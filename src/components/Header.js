import { Outlet } from "react-router-dom";
import { MainMenu } from "./MainMenu";

export const Header = () => (
  <>
    <header className="main-header">
      <h1>Brem-vindo(a) ao Movie List</h1>
      <MainMenu />
    </header>
    <Outlet />
  </>
);
