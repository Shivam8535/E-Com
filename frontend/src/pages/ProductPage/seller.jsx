

const ProductDetails = () => {



    return (<>
        <section className="container mx-auto bg-red-400 h-[89vh] ">
            <div className="container mx-auto h-[80vh]">
                <h2 className="text-[2rem] font-[600]">Product Details : </h2>
                <div className="flex justify-center">
                    <form action="" className="border lg:w-[50rem] px-4 py-2">
                        <div className="border w-fit px-4 py-2">
                            <h1>Title : </h1>
                            <input className=" outline-none rounded-[4px]"  /><br />
                            <h1>Model No : </h1>
                            <textarea className=" outline-none rounded-[4px]" rows={1} cols={50} /><br />
                            <h1>Discription : </h1>
                            <textarea className="outline-none border rounded-[4px] border-gray-500" rows={4} cols={50} name="discription" id="discription"></textarea><br /> 
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>)
}

export default ProductDetails;