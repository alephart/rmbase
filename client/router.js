import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from './MainLayout.jsx';

import App from './main.jsx';

const options = {
    rootId: 'app'
}

FlowRouter.route('/', {
    name: 'AppMeteorReact',
    action() {
       mount(MainLayout, {
           content: () => (<App />)
       }, options)
    } 
});