import { useState } from 'react'
import Nav from './components/nav'
import CatDogCount from './components/contextTest/catDogCount'
import { CTXProvider } from './components/contextTest/testCtx'

const tabs = ['react-query', 'zustand', 'react-context']

function App() {
  const [active, setActive] = useState(tabs[0])

  const renderUI = () => {
    switch(active) {
      case 'react-query':
        return 'react-query'
      case 'zustand':
        return 'Zustand'
      case 'react-context':
        return (
          <CTXProvider>
            <CatDogCount />
          </CTXProvider>
        )
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
