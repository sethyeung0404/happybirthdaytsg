import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Background from './components/Background';
import Calendar from './components/Calendar';
import { Row, Col } from 'antd';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Calendar />
  </React.StrictMode>,
  document.getElementById('root')
);