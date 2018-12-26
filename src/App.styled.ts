import styled from 'styled-components';
import * as variables from './scss/App.variables.scss';

// console.log('variables', variables); // tslint:disable-line:no-console

export interface HeaderProps {
  color?: string;
}

export const Header = styled
  .header
  .attrs<HeaderProps>({
    role: 'app-header',
  })`

  color: ${
  (props: HeaderProps) => (
    props.color ||
    variables.color ||
    'white'
  )
  };
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
