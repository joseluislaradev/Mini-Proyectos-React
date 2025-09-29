import "./App.css";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Pagina de ejemplo para crear un react router desde cero</p>
      <a href="/about">Ir a la página de about</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>HOla soy Jose Luis y estoy creadno un clon de React Router</p>
      <a href="/">Ir a la página de inicio</a>
    </>
  );
}

function App() {
  return (
    <>
      <HomePage />
      <AboutPage />
    </>
  );
}

export default App;
