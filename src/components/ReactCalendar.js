import React from "react";
import "antd/dist/antd.min.css";
import { Calendar } from "antd";
import moment from "moment";

export default class ReactCalendar extends React.Component {
  state = {
    value: moment(),
    selectedValue: moment(),
  };

  onChange = (value) => {
    this.DateChecker(value);
  };

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = (value) => {
    this.setState({ value });
  };

  DateChecker = (value) => {
    let selectedDate = moment(value).date();
    let selectedMonth = moment(value).month();

    /* Moment's Moneht counts from 0, January = 0, February = 1... */
    if (selectedMonth === 1) {
      this.props.bgIndexUpdate("Love");
    } else if (selectedMonth === 2 || selectedMonth === 3) {
      this.props.bgIndexUpdate("Easter");
    } else if (selectedMonth === 4) {
      this.props.bgIndexUpdate("May");
    } else if (selectedMonth > 4 && selectedMonth < 8) {
      this.props.bgIndexUpdate("Summer");
    } else if (selectedMonth === 8 && selectedDate > 27) {
      this.props.bgIndexUpdate("Birthday");
    } else if (selectedMonth === 8 && selectedDate < 28) {
      this.props.bgIndexUpdate("Moon");
    } else if (selectedMonth === 11) {
      this.props.bgIndexUpdate("Christmas");
    } else if (selectedMonth === 0) {
      this.props.bgIndexUpdate("Normal");
    } else if (selectedMonth === 9 && selectedDate < 15) {
      this.props.bgIndexUpdate("China");
    } else if (selectedMonth === 9) {
      this.props.bgIndexUpdate("Halloween");
    } else {
      this.props.bgIndexUpdate("Normal");
      console.log(this.props.bgIndex);
    }
  };

  componentDidMount() {
    this.DateChecker(this.value);
  }

  render() {
    const { value, selectedValue } = this.state;

    return (
      <>
        <div className="site-calendar-demo-card">
          <Calendar
            value={value}
            fullscreen={false}
            onSelect={this.onSelect}
            onChange={this.onChange}
            onPanelChange={this.onPanelChange}
          />
        </div>
      </>
    );
  }
}
