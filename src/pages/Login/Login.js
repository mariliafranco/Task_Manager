import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Login = () => {
  const LoginLayout = styled.div`
    background-color: #7a89b8;
    height: 100%;
    display: flex;
    justify-content: center;
  `;

  return (
    <Row style={{ height: "100%" }}>
        <LoginLayout>
          <LoginForm />
        </LoginLayout>
    </Row>
  );
};
