import {Salgados} from '../components/Menu/Salgados'
import {Doces} from '../components/Menu/Doces'
import {Bebidas} from '../components/Menu/Bebidas'

export const Menu = () => {

    return (

        <>
            <div className="h-1/2 bg-cover bg-center flex justify-center items-center" id="menu">
                <h2 className="bg-white size-1/2 min-w-96 text-center flex justify-center items-center text-6xl font-extrabold tracking-wider scale-x-90">NOSSO MENU</h2>
            </div>
            <Salgados />
            <Doces />
            <Bebidas />
        </>
    )
}