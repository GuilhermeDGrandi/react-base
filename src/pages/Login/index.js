import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";


export default function Login(){
    return (
    <Container>
    <Title isRed>Login
        <small> olá</small>
        <Paragrafo> teste paragrafo</Paragrafo>
        <ul>
            <li>teste</li>
        </ul>
        <button type="button">Enviar</button>
    </Title>
    </Container>
    )
}


