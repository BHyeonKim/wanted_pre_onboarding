import { Fragment } from 'react';

import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';

function App() {
  return (
    <Fragment>
      <Toggle className='center margin-vertical' />
      <Tab className='center margin-vertical' />
      <Slider className='center margin-vertical' />
      <Input className='center margin-vertical' />
    </Fragment>
  );
}

export default App;
