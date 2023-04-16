import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

const Section2 = () => {

    const { data, isLoading, isError } = fetcher('api/posts')

    if (isLoading) return <Spinner />
    if (isError) return <Error />

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            {/* grid columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data.map((value, index) => (
                        <Post data={value} key={index}></Post>
                    ))
                }
            </div>
        </section>
    )
}

export default Section2

function Post({ data }) {
    const { id, title, subtitle, category, img, published, author } = data;
    return (
        <div className="item">
            <div className="images">
                <Link legacyBehavior href={"/"}>
                    <a className="rounded"><Image src={img || "/"} width={500} height={350} /></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || 'Unknown'}</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {subtitle || 'Subtitle'}
                </p>
                {author ? <Author /> : <></>}
            </div>
        </div>
    )
}