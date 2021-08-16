import tw from "twin.macro"
import RevealText from "../../RevealText"
import { tokenomics } from "./tokenomics.data"
import TokenomyCard from "./TokenomyCard"

function Tokenomics() {
    return (
        <div tw="flex flex-col items-center space-y-12 px-4 py-24  background-color[var(--bg-light)] w-full">

            <RevealText cls="tokenomics">
                <h1 tw="text-3xl md:text-6xl font-bold  color[var(--text-main)] text-center" >Tyche Token Economy</h1>
            </RevealText>
            <h2 tw="text-3xl md:text-5xl font-bold color[var(--text-main)] ">A Retroactive Launch</h2>
            <p tw="max-w-6xl text-center text-xl text-white">
                The TYCHE token is used to reimburse holders with the gas fees they use on the platform an rewards stakers with a perrcentage of the fees made form the platform. We want to release a working product before launching a sale to set a standard for more projects to follow.
            </p>

            <div tw="flex flex-col  justify-center lg:(flex-row )  flex-wrap max-w-7xl">

                {tokenomics.map((tokenomy, index) =>
                    <TokenomyCard tokenomy={tokenomy} index={index} key={index} />
                )}

            </div>
            {/* <div tw="grid grid-cols-1 lg:grid-cols-3 gap-8  ">
                {tokenomics.map((tokenomy, index) =>
                    <TokenomyCard tokenomy={tokenomy} index={index} key={index} />
                )}

            </div> */}
        </div>
    )
}

export default Tokenomics
