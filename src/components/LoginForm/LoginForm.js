import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const history = useHistory();

  const FormLayout = styled.div`
    height: 22rem;
    width: 32rem;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    border-radius: 0.6rem;
    align-self: center;
    align-items: center;
  `;

  const TitleLayout = styled.div`
    font-family: "Dancing Script", cursive;
    font-size: 30px;
    display: flex;
    justify-content: center;
  `;

  const ButtonLayout = styled.button`
    background-color: #7a89b8;
    width: 25.6rem;
    height: 2.5rem;
    margin-top: 1.5rem;
    border-radius: 0.4rem;
    font-size: 12px;
    color: #ffffff;
    border-style: none;
  `;

  const InputLayout = styled.input`
    padding-left: 0.5rem;
    margin-top: 1rem;
    height: 2.5rem;
    width: 25rem;
    display: flex;
    justify-content: center;
    background-color: rgb(232, 232, 232);
    border-style: none;
    border-radius: 0.4rem;
  `;

  const ErrorMessage = styled.div`
    margin-top: 0.3rem;
    color: #cc0000;
    font-size: 14px;
  `;

  const checkFields = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email) {
      setEmailError("required");
    }

    if (!password) {
      setPasswordError("required");
    } else if (email && password) {
      history.push("dashboard");
    }
  };

  const FormContainer = styled.div``;
  return (
    <FormLayout>
      <FormContainer>
        <TitleLayout>React Do</TitleLayout>
        <InputLayout name="E-mail" id="email" placeholder="E-mail" />
        {emailError ? (
          <ErrorMessage> Ops! Esse campo é obrigatório. </ErrorMessage>
        ) : undefined}
        <InputLayout name="Senha" id="password" placeholder="Senha" type='password'/>
        {passwordError ? (
          <ErrorMessage> Ops! O campo senha obrigatório. </ErrorMessage>
        ) : undefined}
        <ButtonLayout onClick={() => checkFields()}>LOGIN</ButtonLayout>
      </FormContainer>
    </FormLayout>
  );
};
