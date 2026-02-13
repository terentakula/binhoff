import img1 from "../../public/image-1.jpg"
import img2 from "../../public/image-2.jpg"
import img3 from "../../public/image-3.jpg"
import img4 from "../../public/image-4.jpg"
import img5 from "../../public/image-5.jpg"
import img6 from "../../public/image-6.jpg"



function Welcome() {
    return (
        <section className="h-screen overflow-hidden pt-16">
            <div className="flex flex-col xl:flex-row items-center justify-between h-full ">
                <div className="flex-1 flex flex-col justify-center p-5 w-full max-w-xl lg:max-w-2xl">
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-10">Invest <br /> in real estate</p>
                    <div className="flex gap-4">
                        <button className="btn bg-green-500 text-white">Request a call</button>
                        <button className="btn border border-grey-600 font-medium">To get the consultation</button>
                    </div>
                </div>
                <div className="img-container flex-1 flex sm:gap-4 gap-1 justify-center lg:justify-end">
                    <img className="img" src={img1} alt="img" />
                    <img className="img" src={img2} alt="img" />
                    <img className="img" src={img3} alt="img" />
                    <img className="img" src={img4} alt="img" />
                    <img className="img" src={img5} alt="img" />
                    <img className="img" src={img6} alt="img" />
                </div>
            </div>
        </section>
    )
}

export default Welcome
