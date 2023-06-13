import "./ButtonRed.css";

function ButtonRed({ children }) {
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <button className="ButtonRed-container">
      {/* children que esta en App.jsx para que se muestre el contenido y se dupliquen los bloques, etc */}
      <p className="ButtonRed-text">{children}</p>
    </button>
  );
}
export default ButtonRed;
