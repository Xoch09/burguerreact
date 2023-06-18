import "./ButtonUpdateStaff.css";

function ButtonUpdateStaff({ children }) {
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <button className="ButtonUpdateStaff-container">
      {children}
    </button>
  );
}
export default ButtonUpdateStaff;
