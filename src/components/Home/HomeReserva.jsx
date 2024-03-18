export const HomeReserva = () => {
    const today = new Date().toISOString().split('T')[0];
    
    return (
        <div className=' min-h-96 bg-white border-t-4 border-stone-800 flex flex-col items-center justify-between pb-20'>
                <h3 className='bg-stone-900 text-white p-2 px-10 text-xl'>Reservas</h3>
                <h2 className='text-5xl font-bold text-center'>FAÇA UMA RESERVA</h2>
                <div className='flex flex-col gap-5 items-center md:flex-row'>
                    <label htmlFor="pessoas">
                        <p>Tamanho do Grupo</p>
                        <select className='w-full p-2 border-2' name="pessoas" id="pessoas">
                            <option value="" selected disabled>Selecione a quantidade de pessoas</option>
                            <option value="1pes">1 Pessoa</option>
                            <option value="2pes">2 Pessoas</option>
                            <option value="3pes">3 Pessoas</option>
                            <option value="4pes">4 Pessoas</option>
                            <option value="5pes">5 Pessoas</option>
                            <option value="6pes">6 Pessoas</option>
                        </select>
                    </label>
                    <label htmlFor="date">
                        <p>Data</p>
                        <input className='p-1 px-2 w-52 border' type="date" name="" id="date" min={today} />
                    </label>
                    <label htmlFor="pessoas">
                        <p>Horario</p>
                        <input className='p-1 px-2 w-52 border' type="time" name="horario" id="horario" min="08:00" max="22:00" />
                    </label>
                    <button className='bg-stone-900 text-white px-5 h-3/4 transition-all border-2 border-stone-800 hover:bg-white hover:text-black'>Reservar Mesa</button>
                </div>
            </div>
    )
}