import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/Images/fb.png' alt='facebook' />
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target='_blank'>
                        <img src='/Images/tw.png' alt='twitter'/>
                    </a>
                </li>
                <li>
                    <a href='instagram.com' target='_blank'>
                        <img src='/Images/ig.png' alt='instagram'/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/Images/logo.png' alt='logo alura' />
        </section>
        <section>
            <p>
                Desenvolvido por Mateus Palmeira.
            </p>
        </section>
    </footer>
    )
}

export default Footer