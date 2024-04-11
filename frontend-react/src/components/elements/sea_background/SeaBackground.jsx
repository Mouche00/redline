import Waves from 'src/assets/waves-6.png'
import './SeaBackground.css'

const SeaBackground = ({ children, className }) => {
    return (
        <div className="relative z-5">
            <div className='absolute z-[-1] h-[100vh] w-[100vw] flex flex-col overflow-hidden bg-[#2c2e29]'>
                <div className="waves relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-2 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-3 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-4 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>

                <div className="waves relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-2 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-3 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-4 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>

                <div className="waves relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-2 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-3 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-4 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>

                <div className="waves relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-2 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-3 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
                <div className="waves-4 relative z-10 h-16 mx-[-8rem] bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}>
                    <div className="absolute z-[-1] bottom-0 left-0 translate-y-[60%] h-full w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Waves})`}}></div>
                </div>
            </div>

            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default SeaBackground