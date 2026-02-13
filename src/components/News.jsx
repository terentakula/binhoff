import { useState } from "react"
import img1 from "../../public/image-1.jpg"
import img2 from "../../public/image-2.jpg"
import img3 from "../../public/image-3.jpg"
import img4 from "../../public/image-4.jpg"
import img5 from "../../public/image-5.jpg"
import img6 from "../../public/image-6.jpg"




function News() {

    const [isClick,setIsClick] = useState(false)

    const articles = [
        {
            id: 1,
            img: img1,
            headline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in!"
        },
        {
            id: 2,
            img: img2,
            headline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in!"
        },
        {
            id: 3,
            img: img3,
            headline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in!"
        },
        {
            id: 4,
            img: img4,
            headline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in!"
        },
        {
            id: 5,
            img: img5,
            headline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in!"
        },
        {
            id: 6,
            img: img6,
            headline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in!"
        },
    ]
    return (
        <section className="p-5 lg:p-40 flex flex-col gap-2 lg:gap-20 items-center justify-center border-b border-gray-300">
            <h1 className="text-4xl font-bold">Actual news</h1>
            <div className="flex flex-wrap items-center justify-center gap-12">
                {articles.map((article, index)=> (
                    <div className={`${index >= 4 && !isClick ? "hidden" : " "} article flex flex-col gap-2 max-w-96`} key={article.id}>
                        <img className="min-h-[400px] max-h-[600px] h-full object-cover rounded-lg" src={article.img} alt="img" />
                        <h3>{article.headline}</h3>
                        <button className="text-green-500 font-bold">More details</button>
                    </div>
                ))}
            </div>
            <button onClick={()=> setIsClick(!isClick)} className="btn border border-gray-300 px-12 mt-12">See {isClick ? "Less" : "More"}</button>
        </section>
    )
}

export default News
