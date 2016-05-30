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

class MainLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="My App Meteor + React" />
      </MuiThemeProvider>
    );
  }
}

export default MainLayout;