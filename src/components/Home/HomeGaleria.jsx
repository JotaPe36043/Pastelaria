import { imagens } from '../../listas'

export const HomeGaleria = () => {
    const listaImagens = imagens.map((item, i) => {
        return (
            <div className='size-96 flex overflow-hidden group' key={i}>
                <div className='absolute size-96 z-50 bg-black opacity-0 transition-all group-hover:opacity-70'></div>
                <img
                    src={item.url}
                    className='object-cover size-full '
                />
            </div>
        );
    });

    

    return (
        <>

            <section className=' flex flex-wrap justify-center border-t-2 py-2'>
                {listaImagens}
            </section>

            <div className='w-full h-1/2 flex flex-col items-center border-t-4 border-stone-800 justify-between pb-10 '>
                <h3 className=' bg-stone-900 text-white p-2 px-10 text-xl'>Eventos Privados</h3>
                <h2 className='text-5xl font-bold text-center'>Celebre com Exclusividade: Eventos Privados na Nossa Pastelaria!</h2>
                <p className=' w-2/3 text-center overflow-scroll mt-4 sm:overflow-auto'>De aniversários a encontros corporativos, transforme qualquer ocasião em uma experiência memorável com nossos eventos privados. Delicie-se com nossos pastéis artesanais enquanto desfruta de um ambiente acolhedor e serviço personalizado. Reserve sua data especial conosco e deixe-nos cuidar de todos os detalhes enquanto você aproveita momentos inesquecíveis com seus amigos, familiares ou colegas.</p>
                <a className='px-12 py-2 border-2 border-black bg-white hover:bg-black hover:text-white' href="#">Contato</a>
            </div>
        </>
    )
}