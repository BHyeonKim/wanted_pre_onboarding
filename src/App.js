import { Fragment } from 'react';

import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';

function App() {
  return (
    <Fragment>
      <Toggle className='center margin-vertical' />
      <Tab className='center margin-vertical' />
      <Slider className='center margin-vertical' />
    </Fragment>
  );
}

export default App;
