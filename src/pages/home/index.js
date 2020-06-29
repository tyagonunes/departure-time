import React, { Component } from 'react'
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import { Wrapper, Container, TimePickerRow } from './styles'

const now = moment().hour(0).minute(0);
const defaultWorkload = moment().hour(8).minute(0);
const format = 'HH:mm';

export default class index extends Component {

  state = {
    first: moment().hour(8).minute(0),
    second: moment().hour(12).minute(0),
    third: moment().hour(13).minute(0),
    fourth: moment().hour(16).minute(0),
    totalTime: now,
    missing: now
  };

  handleSubmit() {
    const { first, second, third, fourth } = this.state;

    const res1 = moment.utc(second.diff(first));
    const res2 = moment.utc(fourth.diff(third));

    const totalTime = res1.add(res2);
    debugger
    if(defaultWorkload.isBefore(totalTime.toDate())) {
      const missing = moment(defaultWorkload.diff(totalTime));
      this.setState({ missing })
    }

    this.setState({ totalTime })
  }

  render() {
    const { totalTime, missing, first, second, third, fourth } = this.state;

    return (
      <Wrapper>
        <Container>
          <TimePickerRow>
            <div className='item-row'>
              <span>1° entrada</span>
              <TimePicker
                showSecond={false}
                defaultValue={now}
                onChange={(value) => this.setState({ first: value })}
                value={first}
                inputReadOnly
              />
            </div>
            <div className='item-row'>
              <span>1° saida</span>
              <TimePicker
                showSecond={false}
                defaultValue={now}
                onChange={(value) => this.setState({ second: value })}
                value={second}
                inputReadOnly
              />
            </div>
          </TimePickerRow>
          <TimePickerRow>
            <div className='item-row'>
              <span>2° entrada</span>
              <TimePicker
                showSecond={false}
                defaultValue={now}
                onChange={(value) => this.setState({ third: value })}
                value={third}
                inputReadOnly
              />
            </div>
            <div className='item-row'>
              <span>2° saida</span>
              <TimePicker
                showSecond={false}
                defaultValue={now}
                onChange={(value) => this.setState({ fourth: value })}
                value={fourth}
                inputReadOnly
              />
            </div>
          </TimePickerRow>

          <button onClick={() => this.handleSubmit()}>Caucular</button>

          <div>
              {totalTime && <span>Total de horas: {totalTime.format(format)}</span>}
              {missing && <span>Horas faltando: {missing.format(format)}</span>}
          </div>
        </Container>
      </Wrapper>

    );
  }
}
