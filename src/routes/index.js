import styles from './Routes.module.scss'

import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Input from '../components/Input'
import Slider from '../components/Slider'
import Dropdown from '../components/Dropdown'

function App() {
  return (
    <div className={styles.app}>
      <Toggle className='center' />
      <Tab className='center' />
      <Input className='center' />
      <Slider className='center' />
      <Dropdown className='center' />
    </div>
  )
}

export default App
