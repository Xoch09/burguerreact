import "./ButtonYellow.css";

function ButtonYellow({ children }) {
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <button className="ButtonYellow-container">
      {/* children que esta en App.jsx para que se muestre el contenido y se dupliquen los bloques, etc */}
      <p className="ButtonYellow-text">{children}</p>
    </button>
  );
}
export default ButtonYellow;
