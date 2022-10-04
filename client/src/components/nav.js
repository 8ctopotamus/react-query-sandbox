const Nav = ({ active, setActive, tabs }) => {
  return (
    <nav>
      {tabs.map(t => (
        <button 
          onClick={() => setActive(t)}
          class={`button ${active !== t && 'button-outline'}`}
        >{t}</button>
      ))}
    </nav>
  )
}

export default Nav