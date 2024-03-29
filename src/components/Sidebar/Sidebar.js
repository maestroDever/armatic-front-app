import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  FilterNone as UIElementsIcon,
  Drafts as DraftsIcon,
  AccountBalanceWallet as AccountBalanceWalletOutlinedIcon,
  ArrowBack as ArrowBackIcon,
  Assignment as AssignmentOutlinedIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Overview", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Inbox (10)",
    link: "/app/inbox",
    icon: <DraftsIcon />,
  },
  {
    id: 2,
    label: "Additions Reports",
    link: "/app/report",
    icon: <UIElementsIcon />,
  },
  {
    id: 3,
    label: "Bill Forms",
    link: "/app/billforms",
    icon: <AccountBalanceWalletOutlinedIcon />,
  },
  {
    id: 4,
    label: "Bill Update",
    link: "/app/billupdate",
    icon: <AssignmentOutlinedIcon />,
  },
  { id: 5, type: "divider" },
  { id: 6, type: "title", label: "Recents" },
  {
    id: 7,
    label: "Report 1",
    link: "",
    icon: <Dot size="large" color="warning" />,
  },
  {
    id: 8,
    label: "Report 2",
    link: "",
    icon: <Dot size="large" color="primary" />,
  },
  {
    id: 9,
    label: "Report 3",
    link: "",
    icon: <Dot size="large" color="secondary" />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
