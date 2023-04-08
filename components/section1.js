import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

const Section1 = () => {
    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                >
                    <SwiperSlide>{Slide(1, 'jpg')}</SwiperSlide>
                    <SwiperSlide>{Slide(2, 'jpg')}</SwiperSlide>
                    <SwiperSlide>{Slide(3, 'png')}</SwiperSlide>
                    <SwiperSlide>{Slide(4, 'png')}</SwiperSlide>
                    <SwiperSlide>{Slide(5, 'png')}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Section1

function Slide(no, type) {
    return (
        <div className="grid md:grid-cols-2" >
            <div className="image">
                <Link legacyBehavior href={"/"}>
                    <a><Image src={"/images/img" + no + "." + type} width={600} height={600} /></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600"> - July 3, 2023</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source og learning</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, maiores veritatis? Debitis nostrum eum illo quae aperiam, culpa soluta cum laudantium esse veniam maiores mollitia veritatis ex nulla aliquid sint!
                </p>
                <Author />
            </div>
        </div>
    )
}