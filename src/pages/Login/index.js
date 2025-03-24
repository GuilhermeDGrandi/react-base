import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";
import * as exambleActions from '../../store/modules/example/actions'


export default function Login(){
    const dispatch = useDispatch()


    function handleClick(e){
        e.preventDefault()

        dispatch(exambleActions.buttonClickedRequest())
    }

    return (
    <Container>
    <Title>Login
        <small> olá</small>
        <Paragrafo> teste paragrafo</Paragrafo>
        <ul>
            <li>teste</li>
        </ul>
        <button type="button" onClick={handleClick} >Enviar</button>
    </Title>
    </Container>
    )
}


