import tw from "twin.macro"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from "react"
import Button from "../Button"


function Nav() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div tw="h-32 lg:pt-4 px-8 lg:px-32 w-full max-width[1920px] flex items-center justify-between absolute top-0 ">
            <div tw="flex items-center space-x-4 z-index[20] cursor-pointer">
                <Link href="/">
                    <img src="/assets/images/icon.png" alt="tyche logo" />
                </Link>
                <h1 tw="text-3xl font-bold color[var(--text-main)]">Tyche</h1>
            </div>

            <div tw="xl:flex items-center justify-center space-x-20 text-2xl flex-1 hidden ">
                <Link href="/">
                    <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`, router.asPath === "/" && tw`color[var(--text-main)]`]} >
                        Home</span>
                </Link>
                <Link href="/about">
                    <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`, router.asPath === "/about" && tw`color[var(--text-main)]`]}>
                        About
                    </span>
                </Link>
                <Link href="/blog">
                    <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`, router.asPath === "/blog" && tw`color[var(--text-main)]`]} >
                        Blog
                    </span>
                </Link>
                <Link href="/portfolio">
                    <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`, router.asPath === "/portfolio" && tw`color[var(--text-main)]`]}>
                        Portfolio
                    </span>
                </Link>

            </div>

            <div tw="hidden md:flex">
                <Button text="Enter App" link="/" />
            </div>

            <div css={[tw`inset-0 fixed transform margin-left[100%] duration-500 background-color[var(--bg-dark)] rounded-md  z-10`, isOpen && tw` ml-0`]}>

                <div tw="w-full h-full flex flex-col space-y-8 text-2xl font-bold pt-32 px-8">
                    <Link href="/">
                        <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`,]} >
                            Home</span>
                    </Link>
                    <Link href="/about">
                        <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`,]}>
                            About
                        </span>
                    </Link>
                    <Link href="/blog">
                        <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`,]} >
                            Blog
                        </span>
                    </Link>
                    <Link href="/portfolio">
                        <span css={[tw`color[var(--text-sub)] hover:text-white cursor-pointer`,]}>
                            Portfolio
                        </span>
                    </Link>


                </div>

            </div>

            <div tw="z-10 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <div css={[tw`h-1 w-8 mb-1 bg-white rounded-md transform duration-500`, isOpen && tw` rotate-45 translate-y-1 `]}></div>
                <div css={[tw`h-1 w-8 mb-1 bg-white rounded-md duration-500`, isOpen && tw`hidden delay-500`]}></div>
                <div css={[tw`h-1 w-8 bg-white rounded-md transform duration-500 `, isOpen && tw` -rotate-45 -translate-y-1`]}></div>
            </div>

        </div>
    )
}

export default Nav
