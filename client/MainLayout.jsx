import React from 'react';
import {pink500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: pink500,
  },
  appBar: {
    height: 50,
  },
});

export const MainLayout = ({content}) => (
    <div className="main-layout">
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="My App Meteor + React" />
      </MuiThemeProvider>
      <main>
        {content()}
      </main>    
    </div>
)