import {TitleHeader, HeaderImg, HeaderName} from './styled'

export const Header = ({dados}) => {

    return(
        <TitleHeader>
            <HeaderImg src={dados.foto}></HeaderImg>
            <HeaderName>{dados.nome}</HeaderName>
            Insta4
        </TitleHeader>
    )
}