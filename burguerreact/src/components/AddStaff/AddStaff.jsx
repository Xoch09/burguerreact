/*Se importa el css, se crea una carpeta*/
import "./AddStaff.css";
import ButtonAddStaff from "../ButtonAddStaff/ButtonAddStaff";
/*Un componente se usa para reutilizar y dividir, se identifica porque esta escrito con Mayuscula
y retorna un HTML (JSX)*/
function AddStaff({ children }) {
  /*cuando pasan a los parentesis se llaman Props👈*/
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <form className="AddStaff-contenedor">
      <h1 className="Titulo">Ingresa los siguientes datos</h1>
      <input id="email" type="text" placeholder="Email" />
      <input id="rol" type="TEXT" placeholder="Rol"></input>
      <input id="password" type="password" placeholder="Password"></input>
      <h2 className="Subtitulo">Asigna un ID</h2>
      <input id="id" type="password" placeholder="ID"></input>
      {/* <button id="buttonAdd" type="submit">Agregar</button> */}
      <ButtonAddStaff>Agregar</ButtonAddStaff>
    </form>
  );
}
export default AddStaff;
