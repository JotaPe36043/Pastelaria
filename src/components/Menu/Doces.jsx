import { pasteisDoces } from '../../listas.js'

export const Doces = () => {

    const listaPasteis = pasteisDoces.map((item, i) => {
        return (
            <div key={i} className='flex text-center flex-col justify-between items-center w-1/2 h-26 border-t-2 p-6 sm:flex-row sm:text-left'>
                <div>
                    <h1 className='text-xl font-bold'>{item.nomeProduto}</h1>
                    <p className='text-sm'>{item.descricao}</p>
                </div>
                <h2 className='text-xl font-bold'>R$ {item.preco}</h2>
            </div>
        );
    });

    return (
        <section className="pt-16">
            <div className="flex flex-col items-center gap-5">
                <h3 className="text-3xl font-extrabold">PASTÉIS DOCES</h3>
                <p>Esta é uma seção do seu menu. Adicione aqui uma breve descrição.</p>
                <div className='w-full flex flex-col items-center'>
                    {listaPasteis}
                </div>
            </div>
        </section>
    )
}