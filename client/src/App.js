import { useState } from 'react'
import Nav from './components/nav'
import ContextTest from './components/contextTest'
import ReactQueryTest from './components/reactQueryTest'
import ZustandTest from './components/zustandTest'
import RecoilTest from './components/recoilTest'

const tabs = ['zustand', 'react-query', 'react-context'] //'recoil',

function App() {
  const [active, setActive] = useState(tabs[0])

  const renderUI = () => {
    switch(active) {
      case 'react-query':
        return <ReactQueryTest />
      case 'zustand':
        return <ZustandTest />
      case 'react-context':
        return <ContextTest />
      case 'recoil':
        return <RecoilTest />
    }
  }

  return (
    <div className='container'>
      <Nav
        tabs={tabs}
        active={active}
        setActive={setActive}
      />
      { renderUI() }
    </div>
  )
}

export default App;
