import Author from "./_child/author"
import Link from "next/link"
import Image from "next/image"

const Section4 = () => {
    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        {/* post */}
                        {Post()}
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {/* post */}
                        {Post()}
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4

function Post() {
    return (
        <div className="flex gap-5 ">
            <div className="image flex flex-col justify-start">
                <Link legacyBehavior href={"/"}>
                    <a><Image src={"/images/img1.jpg"} className="rounded" width={300} height={250} /></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600"> - July 3, 2023</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source og learning</a></Link>
                </div>
                <Author />
            </div>
        </div>
    )
}