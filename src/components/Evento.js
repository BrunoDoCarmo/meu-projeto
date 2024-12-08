import { Button } from "./evento/Button";

export function Evento({ numero }) {
    
    function meuEvento() {
        console.log('Ativando o primeiro evento');
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento');
        
    }

    return (
        <div>
            <p>Clique para desparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}