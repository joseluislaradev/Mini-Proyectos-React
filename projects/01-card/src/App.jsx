import './App.css'
import {useState} from 'react' //useState es un hook que nos permite manejar el estado de un componente funcional en React. Es una forma de declarar y actualizar el estado dentro de un componente sin necesidad de convertirlo en una clase.

//UN hook permiten a los componentes funcionales de React tener características que antes solo estaban disponibles en los componentes de clase, como el estado y los efectos secundarios. Los hooks son funciones que comienzan con "use" y se pueden usar dentro de componentes funcionales para agregar funcionalidades adicionales.
//SOn funcionalidades que ofrece react para dotar de mas funcionalidades a los componenetes en diferentes puntos del renderizado


//Se recomienda que los componenetes tenagan sus 

//NO podemso utilizart class ya que los jsx se transforma a Javascript y en JavaScript class es una palabra reservada, por lo que se utiliza className
//Enotnces en react por convencion para agregar una clase a un elemento se utiliza className en lugar de class

//En la clase se recomienda usar algun prefijo adelante e ir describiendo el componente, 
// por ejemplo card-jo, card-jo-title, card-jo-image, etc. Esto ayuda a identificar los estilos relacionados con el componente y evita conflictos con otros estilos globales.
//Eso es la metodologia de  BEM (Block Element Modifier), que es una convención de nomenclatura para CSS que ayuda a organizar y estructurar los estilos de manera más clara y mantenible.


//Hya mucahs formas de estilizar componentes pero no son nativos de REACT, react no se mete con eso pero podemos usar mas herrmientas que nos ayuden

export function App ({titulo, children, url}){ //EL prop universal children es una prop especial que se utiliza para pasar contenido entre las etiquetas de apertura y cierre del componente. Es una forma de componer componentes en React, permitiendo que un componente anide otros componentes o elementos dentro de él.
    //Si quisieramos pasar la url pór ejemplo y que cambie dependiendo del valor de una vairbale no se puede poner directamente porque lo reconoce como cadena de texto
    //Entonce sprimero creamos una avirbale con el conetneido en donde si agregamos la variable y luego la usamos en el src de la imagen para que ahora si la evalue


    //Auqi no se deben de modificar las prop que se reciben, es mala practica, ya que las props son inmutables en React. Si necesitas modificar el valor de una prop, debes hacerlo a través del estado del componente o pasando una nueva prop desde un componente padre.
    //ESto porque se cambia por asi decirlo, la fuente de la verdad, y react ya no sabe bine el estado del componente, por lo que no sabe si debe volver a renderizarlo o no, y puede causar problemas de rendimiento y errores en la aplicación.
    //Siempre crear una avriable nueva si queremos modificar el valor de una prop, o usar el estado del componente para manejar los cambios.


    //SI utilizaramos un prop para inciiarlizar el estado, solo se inciializa una vez, NO CAMBIA cunado se renderiza de nuevo el componente
    //Ademas lso estados son de tipo internos que quiere decir que no afectan a otros compoenentes, solo al que se ejecuta
    const [clicleada, setClicleada] = useState(true); //useState es un hook que nos permite manejar el estado de un componente funcional en React. Es una forma de declarar y actualizar el estado dentro de un componente sin necesidad de convertirlo en una clase. Use eState devuelve un array con dos elementos: el valor actual del estado y una función para actualizar ese estado. En este caso, clicleada es el valor actual del estado y setClicleada es la función para actualizarlo.
    //El nombre react de reactividad viene de que cuando se cambia el estado de un componente, React vuelve a renderizar ese componente y sus hijos para reflejar los cambios en la interfaz de usuario.
    //tiene un dom virtual que compara los cambios y solo actualiza lo que es necesario, por lo que es muy eficiente en cuanto a rendimiento.
    //React sabe que tiene que rerenderizar si cambia el estado o porque se actualiza un compoenete padre y propaga cambios, propaga cambios a toods los hijos independiendtemente de si estos cambioaron o no, el codigo se ejecuta pero react ve con su comparacion con le dom virtutal que los cambios serian iguales y ya no los renderiza en el DOM

    return (
        <div className="card-jo"  onClick={() => setClicleada(!clicleada)}> {/* onClick es un evento que se dispara cuando se hace clic en el elemento. En este caso, al hacer clic en el div, se cambia el estado de clicleada a su valor opuesto (true a false o false a true) utilizando la función setClicleada. */}
            <h1 className='card-jo-title'>{titulo}</h1>
            {clicleada ? <img className='card-jo-img' src={url} alt="" /> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dignissimos ipsa sit vel pariatur quo voluptas eum facilis! Placeat voluptatum, sapiente voluptatibus nesciunt numquam vitae ducimus corrupti modi ratione adipisci.</p>}
            {children}
        </div>
    )
}

//La diferencia entre un componente y un elemento es que un componente es una función o clase que devuelve un fragmento de JSX, mientras que un elemento es una instancia de un componente(loq ue devuelve un componenete) o un elemento HTML. 
// Los componentes pueden tener estado y propiedades, mientras que los elementos son inmutables y no tienen estado. Los componentes se utilizan para crear interfaces de usuario reutilizables y modulares, mientras que los elementos se utilizan para renderizar el contenido en el DOM.

//Entonces un compoenente devuelve un elemento, y react renderiza ese elemento en el DOM.