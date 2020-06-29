import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  text-align: center;
  justify-content: center;
  align-items: center;

  button {
    background: #3b9eff;
    margin: 5px 0 0;
    padding: 0px 10px;
    height: 28px;
    font-weight: bold;
    border-radius: 4px;
    color: #fff;
    transition: background 150ms ease-in-out;
    &:hover {
      background: ${lighten(0.03, '#3b9eff')};
    }
    &:active {
      background: ${darken(0.05, '#3b9eff')};
    }
  }
`;

export const TimePickerRow = styled.div`
  display: flex;
  
  .item-row {
    display: flex;
    flex-direction: column;
    margin: 10px 5px;

    span {
      color: #fff;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 20px;

  span {
    color: #fff;
    font-weight: bold;
  }
`;