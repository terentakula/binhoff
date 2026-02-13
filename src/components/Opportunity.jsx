import icon1 from "../../public/icon.svg"



function Opportunity() {
    return (
        <section className="p-5 xl:p-40">
            <h1 className="text-4xl lg:text-6xl p-5 xl:p-40 text-gray-800 text-center">The unique investment opportunity</h1>
            <div className="box-wrapper flex gap-4 lg:gap-12 items-center justify-center p-4 lg:p-12">
                <div className="box">
                    <img src={icon1} alt="icon" />
                    <h3>Private investors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed neque praesentium! Tenetur aut, fugiat iure ducimus odit obcaecati sunt sit rem reiciendis dolore nulla?</p>
                    <button>View More</button>
                </div>
                <div className="box">
                    <img src={icon1} alt="icon" />
                    <h3>Private investors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed neque praesentium! Tenetur aut, fugiat iure ducimus odit obcaecati sunt sit rem reiciendis dolore nulla?</p>
                    <button>View More</button>
                </div>
                <div className="box">
                    <img src={icon1} alt="icon" />
                    <h3>Private investors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed neque praesentium! Tenetur aut, fugiat iure ducimus odit obcaecati sunt sit rem reiciendis dolore nulla?</p>
                    <button>View More</button>
                </div>
            </div>
        </section>
    )
}

export default Opportunity
