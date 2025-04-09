import './home.css';



const Products = [
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 254,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 254,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 254,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 254,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 254,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 254,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
]

const Home = () => {



    return (
        <section className="relative container mx-auto w-ful h-full">
            <div className="products border px-1 md:h-[20rem] mt-2 rounded-xl">
                <h1 className='font-bold text-[1.5rem]'>Cars : </h1>
                <div className="px-4 py-2 product md:grid-cols-6 grid grid-cols-2 h-full w-full gap-x-3 gap-y-5">
                    {Products.map((item, index) => (
                        <div id={index} className="product-card cursor-pointer lg:h-full w-full">
                            <div className="product-images flex gap-4 ">
                                <img src={item.img} alt="img" className="product-image h-40 mx-auto" />
                            </div>
                            <h2 className="product-title w-full md:text-[1rem] font-[400] text-gray-400 text-center text-[0.6rem]">{item.title}</h2>
                            <p className="product-price font-medium lg:text-[22px] text-center">From: ₹{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;