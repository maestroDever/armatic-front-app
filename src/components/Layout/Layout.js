import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import BillForms from "../../pages/billforms";
import BillUpdate from "../../pages/billupdate/BillUpdate";
import Reports from "../../pages/reports/reports";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/billforms" component={BillForms} />
            <Route path="/app/billupdate" component={BillUpdate} />
            <Route path="/app/report" component={Reports} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
