import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function DateSelector(props) {

        return (
            <DatePicker
            value={props.dateListened}
            selected={props.dateListened}
            onChange={props.onChange}
            filterDate = {(date) => {
              return moment() > date;
            }}
          />
    )

}

export default DateSelector;