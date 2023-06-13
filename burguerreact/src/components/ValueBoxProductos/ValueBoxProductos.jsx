/*Se importa el css, se crea una carpeta*/
import "./ValueBoxProductos.css"
/*Un componente se usa para reutilizar y dividir, se identifica porque esta escrito con Mayuscula
y retorna un HTML (JSX)*/
function ValueBoxProductos ({children}) { /*cuando pasan a los parentesis se llaman Props👈*/
    return (
        /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
        <div className="ValueBoxProductos-contenedor">
            {/* children que esta en App.jsx para que se muestre el contenido y se dupliquen los bloques, etc */}
            <p className= "ValueBoxProductos-text">{children}</p>
        </div>
    )
}
export default ValueBoxProductos
