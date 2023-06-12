import "./ButtonLogin.css"

function ButtonLogin ({children}) {
    return (
        /*se forman clases para manejarlos mejor en CSS, "nombre del componente + nombre de la clase*/
        <div className="ButtonLogin-container"> {children}
            {/* children que esta en App.jsx para que se muestre el contenido y se dupliquen los bloques, etc */}
            {/* <p className= "ButtonLogin-text">{children}</p> */}
        </div>
    )
}
export default ButtonLogin

