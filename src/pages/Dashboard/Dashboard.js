import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";
import { TasksCardList } from "../../components/TaskCardList/TaskCardList";
import { TaskManager } from "../../components/TaskManager/TaskManager";
import { DashboardSlice } from "../../pages/Dashboard/Dashboard.Slice";
import { AddTaskModal } from "../../components/AddTaskModal/AddTaskModal";

export const Dashboard = () => {
  const DashboardLayout = styled.div`
    background-color: #e6ebfa;
    height: 98%;
    display: flex;
    justify-content: center;
    padding: 3rem 5rem;
  `;

  const Navbar = styled.div`
    height: 3rem;
    display: flex;
    padding: 0 14rem;
    justify-content: space-between;
    background-color: #ffffff;
    align-items: center;
  `;

  const SloganLayout = styled.div`
    font-family: "Dancing Script", cursive;
    font-size: 30px;
  `;

  const ButtonLayout = styled.button`
    background-color: #7a89b8;
    border-style: none;
    width: 4rem;
    height: 2rem;
    margin-right: 2rem;
    color: #ffffff;
    float: right;
    border-radius: 2px;
  `;

  const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  `;

  const dashboardState = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  const history = useHistory();

  // useEffect(() => {
  //   if (!dashboardState.refreshList) {
  //     dispatch(asyncActions.GET_LIST());
  //   }
  // });

  const closeModal = () => {
    dispatch(DashboardSlice.actions.TOOGLE_MODAL(false));
  };

  const saveNewTask = () => {
    dispatch(DashboardSlice.actions.SAVE_NEW_TASK());
  };

  return (
    <Row style={{ height: "100%"}}>
      <Navbar>
        <SloganLayout> ReactDo</SloganLayout>
        <ButtonLayout onClick={() => history.push("/login")}>
          {" "}
          SAIR{" "}
        </ButtonLayout>
      </Navbar>
      <DashboardLayout>
        <Row>
          <Col span={24}>
            {" "}
            <TaskManager />
          </Col>
          {dashboardState.modalIsOpen ? (
            <ModalContainer>
              <AddTaskModal
                open={dashboardState.modalIsOpen}
                closeModal={closeModal}
                saveNewTask={saveNewTask}
              />
            </ModalContainer>
          ) : undefined}

          <Col span={24}>
            <TasksCardList />
          </Col>
        </Row>
      </DashboardLayout>
    </Row>
  );
};
