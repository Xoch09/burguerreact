import "./ButtonLogin.css";

function ButtonLogin({ children }) {
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <button className="ButtonLogin-container">
      {children}
    </button>
  );
}
export default ButtonLogin;
