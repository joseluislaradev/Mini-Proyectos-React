import { IDIOMAS_SOPORTADOS, IDIOMA_POR_DEFECTO } from '../constants';
import { type IdiomaConAuto } from '../types';


interface Props {
    onChange: (lenguaje: IdiomaConAuto) => void
}


export function LenguajeSelector({ onChange }: Props) { //Tipamos las props co una interfaz, o con 

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { //Debemos decirle lso eventos de que tipo son y de que elemento
        onChange(event.target.value as IdiomaConAuto); //El value siempre es string, pero nosotros sabemos que es un IdiomaConAuto, le decimos el string tratalo como IdiomaConAuto
    }

    return (
        <select onChange={handleChange}>
            <option value={IDIOMA_POR_DEFECTO}>Detectar idioma</option>
            {
            IDIOMAS_SOPORTADOS && Object.entries(IDIOMAS_SOPORTADOS).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
            ))
            }
        </select>
    )
}