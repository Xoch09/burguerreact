import "./ButtonAddStaff.css";

function ButtonAddStaff({ children }) {
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <button className="ButtonAddStaff-container">
      {children}
    </button>
  );
}
export default ButtonAddStaff;
