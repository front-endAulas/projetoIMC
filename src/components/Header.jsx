import '../css/header.css'

function Header(){
    return(
        <header>

            <h1 id='home'>Calculadora IMC</h1>

            <div className='navbar'>
                <nav>
                    <ul>
                        <li><a href="home"><i className='fa-regular fa-house'></i> Home</a></li>
                        <li><a href="https://www.linkedin.com/in/yanbreno" target='_blank'><i className='fa-brands fa-linkedin-in'></i> Linkedin</a></li>
                        <li><a href="https://github.com/Yan2809" target='_blank'><i className='fa-brands fa-github'></i> GitHub</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header