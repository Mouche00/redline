import Background from 'src/assets/background.png'
import Shadow from 'src/assets/background-2.png'
import Overlay from 'src/assets/background-2-inverted.png'

const Card = () => {
    return (
        <div className="relative w-full h-64 bg-contain bg-center bg-no-repeat flex flex-col p-5" style={{backgroundImage: `url(${Shadow})`}}>
            <div className="relative w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Background})`}}>
                <img className="absolute h-full w-full" src={Overlay} alt="" />
            </div>
            <p className="absolute bottom-0 translate-y-[-1rem] rotate-[-5deg] right-0 px-2 text-center text-black bg-white font-black">Disco Elysium</p>
            <p className="absolute top-0 translate-y-[1rem] rotate-[3deg] right-0 px-2 text-center text-white bg-black font-black">Game</p>
        </div>
    )
}

export default Card