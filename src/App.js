import { Fragment } from 'react';
import Tab from './components/Tab';

import Toggle from './components/Toggle';

function App() {
  return (
    <Fragment>
      <Toggle className='center margin-vertical' />
      <Tab className='center margin-vertical' />
    </Fragment>
  );
}

export default App;
