import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";
import styled from "styled-components";

export const Container = () => {
  const ContainerLayout = styled.div`
    display: grid;
    height: calc(100vh - 1rem);
    margin-top: 0.1em;
    overflow-y: auto;

    body {
        margin: 0px;
        padding: 0px;
      }
  `;
  const ContainerRow = styled.div`
    background: linear-gradient(
      180deg,
      rgba(236, 236, 236, 0.7) 0%,
      rgba(254, 254, 254, 0.7) 10%
    );
    min-height: 90%;
  `;
  return (
    <Fragment>
      <BrowserRouter>
        <ContainerLayout>
          <ContainerRow>
            <Switch>
              <Redirect from="/" to="/login" exact />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
          </ContainerRow>
        </ContainerLayout>
      </BrowserRouter>
    </Fragment>
  );
};
