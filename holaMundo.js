//Vanilla JavaScript se le llama al javascript que no usa ninguna libreria o framework, es decir, el JavaScript puro que se ejecuta en el navegador sin ninguna modificacion. Es el JavaScript que se usa para crear aplicaciones web sin usar frameworks como React, Angular, Vue, etc.


//ESto es puro vanilla javascript
//Estyo es imperativo, es decir, le dices paso por paso que hacer, no es declarativo, no le dices que quieres hacer, le dices como hacerlo
const appDomElement = document.getElementById("vanilla");

const button = document.createElement("button");
button.setAttribute("data-id", 123);
button.innerText = "Button 1";
const button2 = document.createElement("button");   
button2.setAttribute("data-id", 456);
button2.innerText = "Button 2";
const button3 = document.createElement("button");
button3.setAttribute("data-id", 789);
button3.innerText = "Button 3"; 

const buttons = document.createDocumentFragment();

buttons.appendChild(button);
buttons.appendChild(button2);
buttons.appendChild(button3);

appDomElement.appendChild(buttons);




//ESto es react puro
const appDomElement1 = document.getElementById("react"); // Este es el elemento del DOM donde se renderizará la aplicación React

const root = ReactDOM.createRoot(appDomElement1); // Crea un root de React que se vincula al elemento del DOM, eto porque todo lo que creemos es como una arbol, esta es la copa.

//Sigue siendo dificil crear compoenentes y sigue siendo imperativo, pero es mas facil que con vanilla javascript, pero le dices paro por paso que hacer
const buttonR = React.createElement('button', {"data-id": 123}, "Button 1")
const buttonR2 = React.createElement('button', {"data-id": 456}, "Button 2")
const buttonR3 = React.createElement('button', {"data-id": 789}, "Button 3")

const buttons1 = React.createElement(React.Fragment, null, [buttonR, buttonR2, buttonR3]); //Crea un fragmento de React que contiene los botones

root.render(buttons1);


//Esto es react con JSX (JavaScript XML)
//JSX es una sintaxis que permite escribir HTML dentro de JavaScript, lo que facilita la creación de componentes y la manipulación del DOM. JSX se compila a JavaScript puro antes de ser ejecutado en el navegador.
//El codigo no s HTML pero JSX utiliza tradcutores, los dos mas famosos son swc y babel, que permiten escribir JSX y convertirlo a JavaScript puro. Estos traductores son utilizados por frameworks como React para facilitar la creación de componentes y la manipulación del DOM.
//SWC es mas rapidpo que babel

const appDomElement2 = document.getElementById("jsx");
const root2 = ReactDOM.createRoot(appDomElement2);

//Para los atributos normalmente se usa camelCase, por ejemplo, className en lugar de class, y dataId en lugar de data-id. Esto es porque JSX se basa en JavaScript y sigue las convenciones de nomenclatura de JavaScript.
const buttonsJSX = 
<React.Fragment>
    <button data-id="123">Button 1</button> 
    <button data-id="456">Button 2</button>
    <button data-id="789">Button 3</button>
</React.Fragment>;

const name = "React con JSX";
const h1 = <h1>Hola, esto es {name}</h1>;

// Para mostrar ambos, puedes renderizar un fragmento que contenga ambos elementos
root2.render(
    <React.Fragment>
        {h1}
        {buttonsJSX}
    </React.Fragment>
);



//Para instalar react nosotros debemos instalar una empequetador de aplciaciones web, como Vite, Webpack o Parcel. Estos empaquetadores nos permiten crear aplicaciones web modernas y optimizadas, y son necesarios para trabajar con React y JSX de manera eficiente.
//Vite es un empaquetador de aplicaciones web moderno y rápido que permite crear aplicaciones web con React y JSX de manera eficiente. Vite utiliza una arquitectura basada en módulos ES y permite el desarrollo en caliente, lo que significa que los cambios se reflejan instantáneamente en el navegador sin necesidad de recargar la página. Además, Vite es compatible con TypeScript y otros lenguajes modernos, lo que lo convierte en una excelente opción para desarrollar aplicaciones web modernas. 
