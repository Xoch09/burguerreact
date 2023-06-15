/*Se importa el css, se crea una carpeta*/
import "./FormLogin.css";
import ButtonLogin from "../ButtonLogin/ButtonLogin";

/*Un componente se usa para reutilizar y dividir, se identifica porque esta escrito con Mayuscula
y retorna un HTML (JSX)*/
function FormLogin({ children }) {
  /*cuando pasan a los parentesis se llaman Props👈*/
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <form className="FormLogin-contenedor">
      <h1 className="Titulo">Burguer Queen</h1>
      <h2 className="Subtitulo">Bienvenidos</h2>
      <input id="email" type="text" placeholder="Email" /> 
      <input id="password" type="password" placeholder="Password"></input>
      {/* <button id="buttonLogin" type="submit">Login</button> */}
      <ButtonLogin>Login</ButtonLogin>
    </form>
  );
}
export default FormLogin;
