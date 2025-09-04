function TopBar(){

const toggleTheme = (): void => {
    document.body.classList.toggle("darkmode");
  }; 


return(
<>
  <header>
    <nav>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>  

      <button
    onClick = {toggleTheme}
    className="darkmode"
    id = "theme-switch">
        <img src="/darkmode.svg" />
        <img src="/light_mode.svg"/>
    </button>
      
    </nav>  

    
  </header>
</>
)

}

export default TopBar