import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Row, Col } from "antd";
import { DashboardSlice } from "../../pages/Dashboard/Dashboard.Slice";

export const TaskList = () => {
  const dashboardState = useSelector((state) => state.dashboard);

  const TasksListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
  `;

  const CardItemLayout = styled.div`
    display: flex;
    margin: 0.6em;
    max-width: 10rem;
    background-color: #ffffff;
    border-left: solid;
    border-left-width: 0.5rem;
    border-radius: 0.5rem;
    font-family: Georgia, "Times New Roman", Times, serif;
  `;

  const CardTitle = styled.div`
    display: flex;
    justify-content: left;
    font-size: 14px;
    color: #545454;
    margin: 0.5rem 1rem 0.2rem 1rem;
    height: 2rem;
    font-weight: bold;
  `;

  const CardType = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 12px;
    margin: -0.6rem 1rem;
    padding-left: 0.3rem;
    width: 6rem;
    height: 1rem;
    border-radius: 5px;
    color: #ffffff;
  `;

  const CardDescription = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    margin: 1.3rem 1rem 0.6rem 1rem;
    color: #373737;
    height: 4rem;
  `;

  const TaskListTitle = styled.div`
    display: flex;
    font-family: cursive;
    color: #191919;
    margin-bottom: 1rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: #373737;

  `;

  const TaskListSpecialTitle = styled.div`
    margin-left: 4px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bolder;
    color: #373737;
  `;

  const ProgressContainer = styled.div`
    border-radius: 5rem;
    margin: 1rem;
    background-color: #e9e9e9;
  `;


  const taskList = [
    {
      id: 1,
      name: "Breadcrumb",
      description: "Criar um novo breadcrumb para a aplicação web",
      progress: 0,
      type: 1,
    },
    {
      id: 2,
      name: "Navegação",
      description: "Criar a navegação para a aplicação web",
      progress: 25,
      type: 1,
    },
    {
      id: 3,
      name: "Cross-origin",
      description: "Configurar os endpoints para não dar erro de cross origin",
      progress: 25,
      type: 2,
    },
    {
      id: 4,
      name: "AWS",
      description: "Configurar a infra para CD/CI",
      progress: 70,
      type: 3,
    },
    {
      id: 5,
      name: "Integração API",
      description: "Integrar o novo endpoint no front",
      progress: 30,
      type: 1,
    },
    {
      id: 6,
      name: "Endpoint Login",
      description: "Criar endpoint para login",
      progress: 45,
      type: 2,
    },
  ];

  const NewTaskButton = styled.button`
    height: 6rem;
    border-radius: 0.6rem;
    width: 10rem;
    height: 10rem;
    margin: 3rem 2.5rem;
    background-color: rgb(122, 137, 184, 0.3);
    border-style: none;
    color: #ffffff;
    cursor: pointer;

    :hover {
      border-style: solid;
      border-color: #7a89b8;
      border-width: 0.6rem;
    }
  `;

  const IconLayout = styled.div`
    font-size: 120px;
    font-weight: 30rem;
  `;

  const returnType = (type) => {
    switch (type) {
      case 1:
        return "Frontend";

      case 2:
        return "Backend";

      case 3:
        return "Infraestrutura";

      default:
        break;
    }
  };

  const returnSpecialColor = (type) => {
    switch (type) {
      case 1 || 'Frontend':
        return "#7a89b8";

      case 2 || 'Backend':
        return "#F2BE35";

      case 3 || 'Infraestrutura':
        return "#EB5550";

      default:
        break;
    }
  };

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(DashboardSlice.actions.TOOGLE_MODAL(true));
  };

  const returnTasksCard = () => {
    if (dashboardState.taskList) {
    return dashboardState.taskList.map((x) => (
    // return taskList.map((x) => (
      <CardItemLayout
        key={x.id}
        style={{ borderLeftColor: returnSpecialColor(x.type) }}
      >
        <Row>
          <CardTitle>{x.name}</CardTitle>
          <CardType style={{ backgroundColor: returnSpecialColor(x.type) }}>
            {returnType(x.type)}
          </CardType>
          <CardDescription>{x.description}</CardDescription>
          <ProgressContainer>
            <div
              style={{
                backgroundColor: returnSpecialColor(x.type),
                width: `${x.progress}%`,
                marginLeft: "0",
                borderRadius: "5em",
              }}
            >
              <div style={{ marginLeft: "3rem", fontSize: "12px" }}>
                {x.progress}%
              </div>
            </div>
          </ProgressContainer>
        </Row>
      </CardItemLayout>
    ));
    }
  };

  return (
    <Row>
      <TaskListTitle>
        Lista de
        <TaskListSpecialTitle>tarefas</TaskListSpecialTitle>
      </TaskListTitle>
      <Col span={24}>
        <TasksListContainer>{returnTasksCard()}</TasksListContainer>
      </Col>
      <Row>
        <NewTaskButton onClick={openModal}>
          <IconLayout>+</IconLayout>
        </NewTaskButton>
      </Row>
    </Row>
  );
};
