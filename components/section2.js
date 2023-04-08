import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

const Section2 = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            {/* grid columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

export default Section2

function Post() {
    return (
        <div className="item">
            <div className="images">
                <Link legacyBehavior href={"/"}>
                    <a className="rounded"><Image src={"/images/img1.jpg"} width={500} height={350} /></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600"> - July 3, 2023</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source og learning</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, maiores veritatis? Debitis nostrum eum illo quae aperiam, culpa soluta cum laudantium esse veniam maiores mollitia veritatis ex nulla aliquid sint!
                </p>
                <Author />
            </div>
        </div>
    )
}