/*Se importa el css, se crea una carpeta*/
import "./UpdateStaff.css";
import ButtonUpdateStaff from "../ButtonUpdateStaff/ButtonUpdateStaff";
/*Un componente se usa para reutilizar y dividir, se identifica porque esta escrito con Mayuscula
y retorna un HTML (JSX)*/
function UpdateStaff({ children }) {
  /*cuando pasan a los parentesis se llaman Props👈*/
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <form className="UpdateStaff-contenedor">
      <h1 className="Titulo">Ingresa los siguientes datos</h1>
      <input id="email" type="text" placeholder="Email" />
      <input id="rol" type="TEXT" placeholder="Rol"></input>
      <input id="password" type="password" placeholder="Password"></input>
         <input id="id" type="password" placeholder="ID"></input>
      <ButtonUpdateStaff>Actualizar</ButtonUpdateStaff>
      {/* <button id="buttonUpdate" type="submit">Actualizar</button> */}
    </form>
  );
}
export default UpdateStaff;
