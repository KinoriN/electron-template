import React from 'react';
import ReactDom from 'react-dom';
import {Button} from "antd";

const App = (props)=>{
    return <div><h1>hello</h1><Button>Demo</Button></div>
};
const element = <App/>;
ReactDom.render(element,document.getElementById('app'));
