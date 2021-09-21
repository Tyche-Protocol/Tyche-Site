import tw from "twin.macro"
import RevealText from "../../RevealText"
import IndexCard from "./IndexCard"

function TycheIndex() {
    return (
        <div tw="background-color[var(--bg-light)] w-full flex items-center justify-center">
            <div tw="flex flex-col-reverse lg:flex-row w-full items-center max-w-7xl py-24 ">
                <div tw="flex[2]">
                    <img tw="w-full " src="/assets/images/tyche-index.png" alt="" />
                </div>

                <div tw="flex-1 flex flex-col justify-evenly space-y-12 px-4 pb-16 lg:pt-16">
                    <RevealText cls="index">
                        <h1 tw="text-4xl md:text-6xl font-bold  color[var(--text-main)] text-center lg:text-left" >Tyche Index</h1>
                    </RevealText>

                    <p tw="text-xl color[var(--text-sub)]">
                        Tyche Index's will allow trader to trade a handful of tokens in a single collapasable token in 1 transaction.
                    </p>

                    <div tw="grid grid-cols-2 gap-4">
                        <IndexCard value="5 ETFs" label="Diversify" color="red" />
                        <IndexCard value="No Gas" label="Sub-zero Gas" color="blue" />
                        <IndexCard value="On-chain" label="All on chain" color="yellow" />
                    </div>

                    <div tw="flex items-center flex-row space-x-4 text-xl">
                        <a href="/" tw="color[var(--primary)]">
                            View the docs
                        </a>
                        <div tw="h-7 w-7 color[var(--text-main)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TycheIndex
