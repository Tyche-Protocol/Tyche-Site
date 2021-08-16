import tw from "twin.macro"
import Button from "../../Button"
import RevealText from "../../RevealText"

function Hero() {
    return (
        <div tw="min-h-screen w-full flex text-center space-y-12  flex-col items-center justify-center mt-32 py-24 px-4">

            <RevealText cls="header">
                <h1 tw="text-6xl md:text-7xl font-bold max-w-2xl text-left lg:text-center color[var(--text-main)]">Tyche Protocol Basket of Dapps</h1>
            </RevealText>

            <p tw="text-xl color[var(--text-sub)] text-left lg:text-center  max-w-3xl leading-10">
                Tyche is designed to help bridge and offer trading products found on other chains, or find ways to elevant your trading experience to the next level.
            </p>

            <div tw="grid grid-cols-1 gap-8 md:(grid-cols-2 ) ">
                <Button text="Join the Conversation" isLight={true} link="/" />
                <Button text="Enter App" link="/" />
            </div>

            <div>
                <img src="/assets/images/stats.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
