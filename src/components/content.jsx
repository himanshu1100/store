

import reactLogo from '../assets/react.svg'
function Content(){

    return <>
        <div className='flex justify-evenly gap-4 m-9 p-5 mt-20 bg-[#198754]'>
            <div className=' w-1/3 flex '>
                <div className=' flex-col align-center flex content-center '>
                    <h1 className=' text-center text-6xl m-3'>
                    Modern Interior design studio
                    </h1>
                    <p className=' text-center m-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora dolores rem nesciunt dolore quas quidem officiis aperiam accusamus modi nihil natus, laudantium ex cum eveniet minus consectetur quia magnam!
                    </p>
                    <div className='flex justify-center m-3'>
                        <button>Shop Now</button>
                        <button>Explore</button>
                    </div>


                </div>
            </div>
            <div className='w-2/3 flex justify-center'>
                <img className=' w-1/3' src={reactLogo} alt="" />
            </div>
        </div>
    </>
}
export default Content;