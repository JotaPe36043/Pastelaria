export const HomeLocal = () => {

    return (
        <section className='w-full h-1/2 bg-stone-900 flex flex-col items-center p-8 gap-10' id="local">
            <h2 className='text-5xl text-white font-bold'>Venha nos Conhecer!</h2>
            <div className='h-2/3 w-1/2 flex flex-col gap-3 justify-center text-white'>
                <p>Rua Fictícia, Bairro Imaginário,123<br />
                    Londrina, PR, CEP: 86000-000
                </p>

                <p>
                    Segunda - Sexta:  07:00 - 22:00<br/>
                    Sábado:    09:00 - 22:00<br/>
                    Domingo:    08:00 - 35:00
                </p>

                <p>
                    Email: contato@ficticio.lnd <br />
                    Tel: 043-5555-1234
                </p>
            </div>
        </section>
    )
}