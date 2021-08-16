import tw from "twin.macro"
function Partners() {
    return (
        <div tw="flex flex-col items-center background-color[var(--bg-light)] w-full py-24">
            <span tw="text-2xl color[var(--text-sub)] mb-12 text-center">Integrating closely with our partners</span>
            <div tw="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                <img src="/assets/images/partners/unidex.png" alt="Unidex" />
                <img src="/assets/images/partners/spirit.png" alt="Spirit Swap" />
            </div>
        </div>
    )
}

export default Partners
