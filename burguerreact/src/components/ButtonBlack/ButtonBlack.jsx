/*Se importa el css, se crea una carpeta*/
import "./ButtonBlack.css";
/*Un componente se usa para reutilizar y dividir, se identifica porque esta escrito con Mayuscula
y retorna un HTML (JSX)*/
function ButtonBlack({ children }) {
  /*cuando pasan a los parentesis se llaman Props👈*/
  return (
    /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
    <button className="ButtonBlack-contenedor">{children}</button>
  );
}
export default ButtonBlack;
