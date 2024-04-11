import MenuImg from 'src/assets/menu.jpg'
import './MenuPage.css'
import MenuItem from 'src/components/elements/MenuItem'
import Border from 'src/components/elements/Border'
import Loader from 'src/components/elements/loader/Loader'

const MenuPage = () => {
    return (
        <Loader className="relative w-full h-[100vh] flex justify-center overflow-hidden">
                <img className='menu-image max-w-fit' src={MenuImg} alt="" />
                <div className="absolute bg-transparent w-full h-full grid grid-cols-3 text-white">
                    <div 
                        className='relative bg-gradient-to-b from-bronze to-transparent w-[60%] mx-auto'
                        style={{
                            // borderImageSource: `url(${BorderImage})`,
                            // borderImageSlice: 100,
                            // borderImageWidth: 100,
                            // borderImageOutset: 1,
                            // borderImageRepeat: 'repeat',
                        }}    
                    >
                        <Border direction='left' />
                        <Border direction='right' />
                        
                        <div className='w-full h-full z-5 p-12 absolute flex flex-col items-center justify-center gap-4 text-5xl'>
                            <MenuItem label='HOME'/>
                            <MenuItem label='FEED'/>
                            <MenuItem label='PROFILE'/>
                        </div>

                        
                    </div>
                    <div className='col-span-2 mx-auto mt-auto'>
                        <h1 className='text-8xl font-black py-16'>THE EMPORIUM</h1>
                    </div>
                </div>
        </Loader>
    )
}

export default MenuPage