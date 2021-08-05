import React, { useState } from "react";
import { Button, Row, Col } from "antd";
import styled from "styled-components";

export const AddTaskModal = ({ closeModal, saveNewTask }) => {
  const [nameError, setNameError] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [progressError, setProgressError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);

  const ModalLayout = styled.div`
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    width: 23rem;
    height: 30rem;
    border-radius: 0.3rem;
    margin: 15% auto;
    border: 1px solid #888;
  `;

  const ModalTitle = styled.label`
    font-family: Georgia, "Times New Roman", Times, serif;
    padding: 1rem 0 1rem 1.5rem;
  `;

  const ModalSpecialTitle = styled.label`
    font-weight: bold;
    padding: 1rem 0;
  `;

  const FormContainer = styled.div`
    margin-top: -3rem;
    padding: 2rem;
    width: 100%;
  `;

  const InputItem = styled.input`
    padding: 0.5rem;
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
    border-radius: 0.3rem;
    width: 93%;
    border-style: solid;
    border-color: #7a89b8;
    border-width: 0.1rem;
    background-color: #dedeee;
  `;

  const FormItemDescription = styled.input`
    padding: 0.5rem;
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
    border-radius: 0.3rem;
    height: 5rem;
    width: 93%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: #7a89b8;
    background-color: #dedeee;
  `;

  const ErrorMessage = styled.div`
    margin: -0.8rem 0 0.3rem 0;
    margin-bottom: 0.3rem;
    color: #cc0000;
    font-size: 14px;
  `;

  const saveTask = () => {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const progress = document.getElementById("progress").value;
    const description = document.getElementById("description").value;

    if (!name) {
      setNameError("required");
    }

    if (!type) {
      setTypeError("required");
    }

    if (!progress) {
      setProgressError("required");
    }

    if (!description) {
      setDescriptionError("required");
    } else if (name && type && progress && description) {
      saveNewTask({ name, type, progress, description });
    }
  };

  return (
    <ModalLayout>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "left",
            borderBottom: "solid",
            borderBottomColor: "#7a89b8",
            borderWidth: "0.1rem",
          }}
        >
          <ModalTitle>
            Nova <ModalSpecialTitle>Tarefa</ModalSpecialTitle>
          </ModalTitle>
        </Col>
        <Col
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormContainer>
            <InputItem placeholder="Título da Tarefa" id="name" />
            {nameError ? (
              <ErrorMessage> Ops! Esse campo é obrigatório. </ErrorMessage>
            ) : undefined}
            <div className="select-container">
              <select
                id="type"
                placeholder="Categoria"
                style={{
                  marginBottom: "1rem",
                  width: "99%",
                  height: "2.2rem",
                  borderRadius: "0.3rem",
                  borderStyle: "solid",
                  borderColor: "#7a89b8",
                  backgroundColor: "#dedeee",
                }}
              >
                <option value={null}>Selecionar Categoria</option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Infraestrutura">Infraestrutura</option>
              </select>
            </div>
            {typeError ? (
              <ErrorMessage> Ops! Esse campo é obrigatório. </ErrorMessage>
            ) : undefined}
            <InputItem placeholder="Progresso" id="progress" />
            {progressError ? (
              <ErrorMessage> Ops! Esse campo é obrigatório. </ErrorMessage>
            ) : undefined}
            <FormItemDescription
              placeholder="Descrição da Tarefa"
              id="description"
            />
            {descriptionError ? (
              <ErrorMessage> Ops! Esse campo é obrigatório. </ErrorMessage>
            ) : undefined}
            <Row justify="space-around">
              <Button
                style={{
                  marginBottom: "1rem",
                  color: "red",
                  marginTop: "2rem",
                  borderStyle: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => {
                  closeModal();
                }}
              >
                {" "}
                Cancelar{" "}
              </Button>
              <Button
                style={{
                  marginBottom: "1rem",
                  color: "#ffffff",
                  width: "50%",
                  height: "2rem",
                  borderRadius: "0.3rem",
                  marginTop: "2rem",
                  marginLeft: "5rem",
                  fontWeight: "bold",
                  borderStyle: "none",
                  backgroundColor: "#7a89b8",
                  cursor: "pointer",
                }}
                onClick={() => {
                  saveTask();
                }}
              >
                {" "}
                SALVAR{" "}
              </Button>
            </Row>
          </FormContainer>
        </Col>
      </Row>
    </ModalLayout>
  );
};
