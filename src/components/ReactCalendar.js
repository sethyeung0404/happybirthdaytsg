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

    if (selectedMonth === 1) {
      /*February & Valentines Day*/
      this.props.bgIndexUpdate(1);
      console.log(this.props.bgIndex);
    } else if (selectedMonth === 2) {
      /*March & Easter*/
      this.props.bgIndexUpdate(2);
      console.log(this.props.bgIndex);
    } else if (selectedMonth === 5 && selectedDate > 1) {
      /*From Jun 1 & Summer*/
      this.props.bgIndexUpdate(3);
      console.log(this.props.bgIndex);
    } else if (selectedMonth === 8 && selectedDate > 27) {
      /*From Sep 29 & Happy Birthday*/
      this.props.bgIndexUpdate(5);
      console.log(this.props.bgIndex);
    } else if (selectedMonth === 8 && selectedDate < 28) {
      /*From Sep 1 & Mid Autumn*/
      this.props.bgIndexUpdate(4);
      console.log(this.props.bgIndex);
    } else if (selectedMonth === 11) {
      /*December & Merry Christmas*/
      this.props.bgIndexUpdate(6);
      console.log(this.props.bgIndex);
    } else {
      /*Everyting else */
      this.props.bgIndexUpdate(0);
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
