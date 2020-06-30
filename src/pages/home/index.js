import React, { useState } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import { Container, ResultPanel } from './styles'

export default function Home() {

  // const now = moment().hour(0).minute(0);
  // const defaultWorkload = moment().hour(8).minute(0);
  const format = 'HH:mm';

  const [ firstEntry, setFirstEntry ] = useState(moment().hour(8).minute(0))
  const [ firstOut, setFirstOut ] = useState(moment().hour(12).minute(0))
  const [ secondEntry, setSecondEntry ] = useState(moment().hour(13).minute(0))
  const [ secondOut, setSecondOut ] = useState(moment().hour(17).minute(0))
  const [ totalTime, setTotalTime ] = useState('')

  const handleSubmit = () => {
    const firstDiff = moment.utc(firstOut.diff(firstEntry));
    const secondDiff = moment.utc(secondOut.diff(secondEntry));
    const totalTime = firstDiff.add(secondDiff);

    setTotalTime(totalTime.format(format))
  };

  const renderItemRow = (label, defaultValue, setFn) => (
    <article>
      <span>{label}</span>
      <TimePicker
        showSecond={false}
        defaultValue={defaultValue}
        onChange={(value) => setFn(value)}
        inputReadOnly
      />
    </article>
  );

  const renderResultPanel = () => (
    <ResultPanel>
      {totalTime && <span>{totalTime} horas trabalhadas</span>}
    </ResultPanel>
  );

  return (
    <Container>
      <main>
        <section>
          {renderItemRow("1° entrada", firstEntry, setFirstEntry)}
          {renderItemRow("1° saida", firstOut, setFirstOut)}
        </section>

        <section>
          {renderItemRow("2° entrada", secondEntry, setSecondEntry)}
          {renderItemRow("2° saida", secondOut, setSecondOut)}
        </section>

        <button onClick={handleSubmit}>Calcular</button>

        {renderResultPanel()}
      </main>
    </Container>
  );
};
