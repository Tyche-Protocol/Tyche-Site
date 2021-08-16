import tw from "twin.macro"
import RevealText from "../../RevealText"
import { features } from "./features.data"

function Features() {
    return (
        <div tw="flex flex-col lg:flex-row justify-center items-center py-24 w-full px-4 lg:px-24 max-width[1440px]">


            <div tw="flex flex-col  space-y-12 flex-1 px-4">
                <RevealText cls="trading">
                    <h1 tw="text-4xl md:text-6xl font-bold  color[var(--text-main)]">Tyche Protocol Basket of Dapps</h1>
                </RevealText>
                <p tw="color[var(--text-sub)] text-lg">
                    Be able to play the market like never before without sacrificing gas costs.
                </p>
                <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {features.map((feature, index) =>
                        <div tw="flex space-x-4 items-center" key={index}>
                            <div tw="h-10 w-10 bg-green-500 color[var(--text-main)] rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span tw="text-xl color[var(--text-sub)]">
                                {feature}
                            </span>
                        </div>)}
                </div>

                <div tw="flex items-center flex-row space-x-4 text-xl">
                    <a href="/" tw="color[var(--primary)]">
                        Explore more features
                    </a>
                    <div tw="h-7 w-7 color[var(--text-main)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <div tw="flex-1 mt-8">
                <img tw="w-full" src="/assets/images/stats.png" alt="" />
            </div>

        </div>
    )
}

export default Features
