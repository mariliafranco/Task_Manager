import React from "react";
import { Row } from "antd";
import styled from "styled-components";

export const DashboardCards = () => {
  const CardsLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const CardItemLayout = styled.div`
    height: 7rem;
    display: flex;
    align-items: center;
    border-radius: 0.6rem;
    margin: 2rem;
    padding: 0 2rem;
  `;

  const CardTitle = styled.div`
    display: flex;
    justify-content: left;
    color: #ffffff;
    font-weight: bold;
  `;

  const CardSubtitle = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 0.3rem;
    color: #ffffff;
  `;

  const CountCardLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color: #ffffff;
    color: #ffffff;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border-width: 0.3rem;
    margin: 1.2rem 0 1rem 2rem;
    font-size: 35px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  `;

  const DashboardTitle = styled.div`
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bolder;
    color: #373737;
  `;

  const cards = [
    {
      id: 1,
      name: "Novas Tarefas",
      count: 10,
      background: "#7a89b8",
    },
    {
      id: 2,
      name: "Tarefas em Progresso",
      count: 2,
      background: "#F2BE35",
    },
    {
      id: 3,
      name: "Tarefas Concluídas",
      count: 1,
      background: "#EB5550",
    },
    {
      id: 4,
      countTitle: "",
      count: 13,
      background: "#6B706B",
    },
  ];

  return (
    <Row>
      <DashboardTitle>Dashboard</DashboardTitle>
      <CardsLayout>
        {cards.map((x) => (
          <CardItemLayout
            key={x.id}
            style={{
              backgroundColor: x.background,
            }}
          >
            <Row>
              <CardTitle>{x.name}</CardTitle>
              <CardSubtitle>Total de Tarefas</CardSubtitle>
            </Row>
            <Row align="center">
              <CountCardLayout>{x.count}</CountCardLayout>
            </Row>
          </CardItemLayout>
        ))}
      </CardsLayout>
    </Row>
  );
};
