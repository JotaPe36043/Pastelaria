import { HomePrincipal } from '../components/Home/HomePrincipal.jsx';
import { HomeReserva } from '../components/Home/HomeReserva.jsx';
import { HomeGaleria } from '../components/Home/HomeGaleria.jsx';
import { HomeLocal} from '../components/Home/HomeLocal.jsx';


export const Home = () => {

    return (
        <>
            <HomePrincipal/>
            <HomeReserva />
            <HomeGaleria />
            <HomeLocal />
        </>
    )
}

