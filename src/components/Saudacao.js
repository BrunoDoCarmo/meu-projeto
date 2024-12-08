export function Saudacao({ nome }) {

    function gerarSaudacao(algumnome) {
        return `Olá, ${algumnome}, tudo bem?`
    }

    return (
        <>
            {nome && 
                <p>
                    {gerarSaudacao(nome)}
                </p>
            }
        </>
    )
}