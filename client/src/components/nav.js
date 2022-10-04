const Nav = ({ active, setActive, tabs }) => {
  return (
    <nav style={{marginBottom: 60}}>
      {tabs.map(t => (
        <button 
          onClick={() => setActive(t)}
          className={`button ${active !== t && 'button-outline'}`}
          key={t}
        >{t}</button>
      ))}
    </nav>
  )
}

export default Nav