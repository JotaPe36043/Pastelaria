import { Link } from 'react-router-dom';

export const Header = () => {

    const scrollPage = (div_id) => {
        window.scrollTo({
            top: document.getElementById(div_id).offsetTop,
            behavior: 'smooth' // Adiciona uma animação de rolagem suave
          });
    }
    return (
        <header className='fixed z-50 h-16 w-full flex gap-20 justify-center items-center bg-stone-900'>
            <Link to="/" onClick={() => scrollPage('home')} className='text-white opacity-80 cursor-pointer hover:opacity-100'>Inicio</Link>
            <Link to="/menu" onClick={() => scrollPage('menu')} className='text-white opacity-80 cursor-pointer hover:opacity-100'>Cardápio</Link>
            <Link to="/" onClick={() => scrollPage('local')} className='text-white opacity-80 cursor-pointer hover:opacity-100'>Local e Horarios</Link>
        </header>
    )
}
