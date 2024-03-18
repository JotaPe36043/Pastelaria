import { FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="h-1/5 bg-stone-800 flex gap-10 p-16 justify-around">
            <div className=" h-20">
                <div className="flex gap-3 mb-3">
                    <a href="#" className="size-10 bg-white flex justify-center items-center rounded-full"><FaTwitter /></a>
                    <a href="#" className="size-10 bg-white flex justify-center items-center rounded-full"><FaInstagram /></a>
                </div>
                <small className=" text-sm text-white">© 2024 por La Pastelaria. Orgulhosamente criado por João Pedro</small>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg">Junte-se à nossa lista de emails</h3>
                <input
                    className="border-2 bg-transparent px-3 text-white border-white placeholder:text-white invalid:border-red-800 valid:border-green-500"
                    placeholder="Insira seu email..."
                    type="email"
                    name="email"
                    id="email"
                />
                <button className="text-white p-1 border hover:border-black/0">Participar</button>
            </div>
        </footer>
    )

}