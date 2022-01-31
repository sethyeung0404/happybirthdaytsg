import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

function ReactCalendar() {
    return (
        <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    );
}

export default ReactCalendar;