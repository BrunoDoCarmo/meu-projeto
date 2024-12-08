import PropsTypes from 'prop-types'

export function Item({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.protoTypes = {
    marca: PropsTypes.string.isRequired,
    ano_lancamento: PropsTypes.number
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}