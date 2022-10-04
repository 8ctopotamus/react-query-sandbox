const Nav = ({ active, setActive, tabs }) => {
  return (
    <nav>
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