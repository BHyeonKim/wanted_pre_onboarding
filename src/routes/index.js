/* eslint-disable react/jsx-fragments */
import { Fragment } from 'react'

import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Input from '../components/Input'
import Slider from '../components/Slider'
import Dropdown from '../components/Dropdown'

function App() {
  return (
    <Fragment>
      <Toggle className='center margin' />
      <Tab className='center margin' />
      <Slider className='center margin' />
      <Input className='center margin' />
      <Dropdown className='center margin' />
    </Fragment>
  )
}

export default App
