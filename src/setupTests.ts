/**
 * setupTests module is loaded by Create-React-App before Jest testing,
 * the file name and location is conventional.
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
