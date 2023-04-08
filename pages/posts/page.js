import Author from "@/components/_child/author"
import Related from "@/components/_child/related"
import Format from "@/layout/format"
import Image from "next/image"

const Page = () => {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author />
                </div>

                <div className="post py-10">
                    <h1 className="font-bold text-4xl text-center pb-5">
                        Your most unhappy customers are your greatest source og learning
                    </h1>

                    <p className="text-gray-500 text-xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate fugiat, itaque minima molestias quasi ullam enim</p>

                    <div className="py-10">
                        <Image src={"/images/img1.jpg"} width={900} height={600} />
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae tempore quasi? Illo repudiandae blanditiis iusto pariatur? Delectus facere natus ea sit minus quia eius nobis excepturi ad consequuntur distinctio hic voluptatibus, obcaecati sed repellendus. Eos commodi neque vel autem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae tempore quasi? Illo repudiandae blanditiis iusto pariatur? Delectus facere natus ea sit minus quia eius nobis excepturi ad consequuntur distinctio hic voluptatibus, obcaecati sed repellendus. Eos commodi neque vel autem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae tempore quasi? Illo repudiandae blanditiis iusto pariatur? Delectus facere natus ea sit minus quia eius nobis excepturi ad consequuntur distinctio hic voluptatibus, obcaecati sed repellendus. Eos commodi neque vel autem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae tempore quasi? Illo repudiandae blanditiis iusto pariatur? Delectus facere natus ea sit minus quia eius nobis excepturi ad consequuntur distinctio hic voluptatibus, obcaecati sed repellendus. Eos commodi neque vel autem?
                        </p>
                    </div>
                </div>

                <Related />
            </section>
        </Format>
    )
}

export default Page
