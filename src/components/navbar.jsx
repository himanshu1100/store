
function Navbar(){


    return <>

        <div className="flex justify-between mt-5 text-lg w-screen m-2.5 px-5 ">
            <div>
                <a>Store</a>
            </div>

            <div className="flex justify-end gap-x-4">
                <a>home</a>
                <a>about</a>
                <a>services</a>
                <a>Blog</a>
                <a>contact us</a>
            </div>

            <div className="flex  gap-x-4">
                <a>account</a>
                <a>cart</a>
            </div>


        </div>
    
    
    </>
}
export default Navbar;