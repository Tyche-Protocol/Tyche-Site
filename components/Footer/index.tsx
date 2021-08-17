import tw from "twin.macro"
import Link from "next/link"
import { useRouter } from 'next/router'

import { footerdata } from "./Footer.data"
import Button from "../Button"


function Footer() {
    const router = useRouter()


    return (
        <div tw="h-32 pt-4 px-4 lg:px-32 w-full max-width[1920px] flex items-center justify-evenly ">
            <div tw="flex items-center space-x-4 z-index[20]">
                <Link href="/">
                    <img src="/assets/images/icon.png" alt="tyche logo" />
                </Link>
                <h1 tw="text-3xl font-bold color[var(--text-main)]">Tyche</h1>
            </div>

            <div tw="xl:flex items-center justify-center space-x-20 text-2xl flex-1 hidden ">


                {footerdata.map((link) =>
                    <div tw="capitalize color[var(--text-sub)] hover:text-white cursor-pointer" key={link.link}>
                        <a href={link.link}>
                            {link.name}
                        </a>
                    </div>
                )}

            </div>

            <div tw="hidden md:flex">
                <Button text="Lanching Soon" link="https://discord.gg/3dNPHRBRau" />
            </div>



        </div>
    )
}

export default Footer
