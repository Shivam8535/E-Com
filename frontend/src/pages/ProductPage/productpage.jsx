


const items = [
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 20954,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 25984,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 23254,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 7854,
        details: {
            model: '5445D457',
            discription: "The new BMW M5 ditches the V8 powertrain for a hybridised 2.0-litre powertrain. And like its other siblings in the stable, the M5 is filled to the brim with modern features, aggressive styling, and a myriad of M-specific elements.",
        }
    },
    {
        title: "BMW Car",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
        price: 294,
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


const Product = () => {
    return (<>
        {/* Products Section */}
        <section id="products" className="py-16 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* {/* Product Card */}
                    {items.map((items) => (
                        <>
                            {/* {/* Product Card */}
                            <div className="bg-white rounded-xl shadow p-4">
                                <img src={items.img} alt="Product" className="rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{items.title}</h3>
                                <p className="mb-2">Short description of the product.</p>

                                <span className="text-blue-600 font-bold text-lg">${items.price}</span>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    </>)
}


export default Product;