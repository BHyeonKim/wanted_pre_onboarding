import { Fragment } from 'react';

import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <Fragment>
      <Toggle className='center margin-vertical' />
      <Tab className='center margin-vertical' />
      <Slider className='center margin-vertical' />
      <Input className='center margin-vertical' />
      <Dropdown className='center margin-vertical' />
    </Fragment>
  );
}

export default App;
