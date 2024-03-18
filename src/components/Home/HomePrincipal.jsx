import Logo from '../../assets/Logo-Marca.png'
import Historia from '../../assets/img-historia.jpg'

export const HomePrincipal = () => {
    return (
        <>
            <section id='home' className="w-full h-full bg-center bg-no-repeat bg-cover bg-fixed flex flex-col justify-center items-center">
                <div className='bg-black/20 absolute h-full w-full'></div>
                <img
                    src={Logo}
                    className=' z-40 mb-4'
                />
                <button className='px-12 py-2 border-2 border-black bg-white hover:bg-black hover:text-white z-40'>Menu</button>
            </section>

            <div className='w-full h-5/6 flex flex-col items-center border-t-4 border-stone-800 justify-between pb-10 '>
                <h3 className=' bg-stone-900 text-white p-2 px-10 text-xl'>Nossa História</h3>
                <h2 className='text-5xl font-bold text-center'>A PAIXÃO POR PASTEL</h2>
                <img
                    src={Historia}
                    className='h-1/2 object-cover px-6'
                />
                <p className=' w-2/3 text-center overflow-scroll mt-4 sm:overflow-auto'>Venha saborear os mais deliciosos pasteis na nossa pastelaria, onde cada mordida é uma explosão de sabor. Nossos pasteis são feitos artesanalmente, com ingredientes frescos e de alta qualidade. Experimente nossa variedade de recheios, desde os clássicos de queijo e carne até opções vegetarianas e veganas. Na nossa pastelaria, garantimos uma experiência gastronômica única que deixará você com água na boca. Visite-nos hoje e descubra o verdadeiro prazer de um bom pastel!</p>
            </div>


            <section id="eathere" className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center">
                <div className='bg-black/20 absolute h-full w-full'></div>
                <button className=' size-60 border-8 rotate-45 bg-black/30 transition-all hover:scale-105 md:size-96'>
                    <div className='-rotate-45 text-white mt-5'>
                        <h2 className='text-5xl scale-x-75 scale-y-125 font-extrabold text-white tracking-wide '>COMER AQUI</h2>
                        <p className='mt-5'>Veja nosso Menu</p>
                    </div>
                </button>
            </section>
        </>
    )
}