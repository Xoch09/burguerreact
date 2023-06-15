import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ValueBox from "./components/ValueBox/ValueBox";
import "./App.css";
import ButtonRed from "./components/ButtonRed/ButtonRed";
import ButtonYellow from "./components/ButtonYellow/ButtonYellow";
import ButtonLogin from "./components/ButtonLogin/ButtonLogin";
import ButtonBlack from "./components/ButtonBlack/ButtonBlack";
import FormLogin from "./components/FormLogin/FormLogin";
import ValueBoxProductos from "./components/ValueBoxProductos/ValueBoxProductos";
import AddStaff from "./components/AddStaff/AddStaff";
import UpdateStaff from "./components/UpdateStaff/UpdateStaff";
import ButtonAddStaff from "./components/ButtonAddStaff/ButtonAddStaff"
import ButtonUpdateStaff from "./components/ButtonUpdateStaff/ButtonUpdateStaff";
import ViewsLogin from "./Views/ViewsLogin"
import ViewsWelcome from "./Views/ViewsWelcome";



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        {/* se llaman children 👈 y el texto se coloca en medio de los dos nombres del componente que sustituyen a un <div></div> */}
        <ValueBox>ID</ValueBox>
        <ValueBox>Email</ValueBox>
        <ValueBox>Rol</ValueBox>
        <br />
        <br />
        <br />
        <br />
        <ValueBoxProductos>ID</ValueBoxProductos>
        <ValueBoxProductos>Name</ValueBoxProductos>
        <ValueBoxProductos>Price</ValueBoxProductos>
        <ValueBoxProductos>DateEntry</ValueBoxProductos>
        {/* botones */}
        <ButtonRed>Eliminar</ButtonRed>
        <ButtonYellow>Actualizar</ButtonYellow>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonBlack>Productos</ButtonBlack>
        <ButtonBlack>Miembros del equipo</ButtonBlack>
       <ButtonAddStaff>Agregar</ButtonAddStaff>
       <ButtonUpdateStaff>Actualizar</ButtonUpdateStaff>
        {/* Formularios */}
        <FormLogin>Burguer Queen</FormLogin>
       <AddStaff>Agregar personal</AddStaff>
       <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       <UpdateStaff>Actualizar personal</UpdateStaff>
       <ViewsLogin></ViewsLogin>
       <ViewsWelcome/>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
