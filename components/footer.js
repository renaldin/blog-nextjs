
import Link from "next/link"
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im"
import Newslatter from "./_child/newslatter"

const Footer = () => {

    const bg = {
        backgroundImage: "url('/images/footer.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left'
    }

    return (
        <footer className="bg-gray-50" style={bg}>
            <Newslatter />

            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Link legacyBehavior href={"/"}>
                            <a><ImFacebook color="#88888" /></a>
                        </Link>
                        <Link legacyBehavior href={"/"}>
                            <a><ImTwitter color="#88888" /></a>
                        </Link>
                        <Link legacyBehavior href={"/"}>
                            <a><ImYoutube color="#88888" /></a>
                        </Link>
                    </div>

                    <p className="py-5 text-gray-400">Copyright @2023 All rights reserved | This template is made with by Renaldi Noviandi</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
