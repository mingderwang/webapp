// @flow
// This file is shared across the demos.

import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import HistoryIcon from "material-ui-icons/History";
import AlarmIcon from "material-ui-icons/Alarm";
import DashboardIcon from "material-ui-icons/Dashboard";
import AssessmentIcon from "material-ui-icons/Assessment";
import HelpOutlineIcon from "material-ui-icons/HelpOutline";
import MemoryIcon from "material-ui-icons/Memory";
import BubbleChartIcon from "material-ui-icons/BubbleChart"

export const mailFolderListItems = (
  <div>
    <ListItem button component="a" href="/alarm">
      <ListItemIcon>
       <AlarmIcon />
      </ListItemIcon>
      <ListItemText primary="Alarm" />
    </ListItem>

    <ListItem button component="a" href="/hosts">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Hosts" />
    </ListItem>

    <ListItem button component="a" href="/test">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component="a" href="/about">
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="System Load" />
    </ListItem>

    <ListItem button component="a" href="/about">
      <ListItemIcon>
        <MemoryIcon />
      </ListItemIcon>
      <ListItemText primary="Memory" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button component="a" href="/about">
      <ListItemIcon>
        <BubbleChartIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component="a" href="http://b44.vrecle.com:8000">
      <ListItemIcon>
        <HelpOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Document" />
    </ListItem>

  </div>
);
