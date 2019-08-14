import React from 'react';
import ReactDom from 'react-dom';
const App = (props)=>{
    return <h1>hello world</h1>
};
const element = <App/>;
ReactDom.render(element,document.getElementById('app'));
