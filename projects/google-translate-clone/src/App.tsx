import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LenguajeSelector } from './components/LenguajeSelector';
import { IDIOMA_POR_DEFECTO } from './constants';

function App() {

  const { from, to, text, result, loading, cambiarDeIdioma, cambiarFrom, cambiarTo, cambiarText, cambiarResult } = useStore();

  return (
    <>
      <Container fluid>
        <h1>Google Translate Clone</h1>

        <Row>
          <Col>
            <h2>From</h2>
            <LenguajeSelector onChange={cambiarFrom} />

          </Col>
          <Col>
            <Button disabled={from === IDIOMA_POR_DEFECTO || loading} onClick={cambiarDeIdioma}>Intercambiar Idioma</Button>
          </Col>
          <Col>
            <h2>To</h2>
            <LenguajeSelector onChange={cambiarTo} />
          </Col>
        </Row>
              

        
      </Container>
    </>
  )
}

export default App
