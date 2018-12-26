/**
 * setupTests module is loaded by Create-React-App before Jest testing,
 * the file name and location is conventional.
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

jest.mock(
  './scss/App.variables.scss',
  (...args: unknown[]) => {
    console.log('mock', args); // tslint:disable-line:no-console
    return require('./scss/App.variables.scss.mock').default;
  },
);
