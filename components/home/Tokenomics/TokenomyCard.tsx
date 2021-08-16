import tw from "twin.macro"

function TokenomyCard({ tokenomy, index }) {

    let colors = [tw`text-red-500`, tw`text-blue-500`, tw`text-green-500`, tw`text-yellow-500`, tw`text-red-500`]


    return (
        <div tw="flex flex-col space-y-8 background-color[var(--card-bg)] rounded-xl max-w-sm p-8 hover:shadow-2xl lg:mr-8 mb-8">

            <div>
                <h2 css={[tw`text-5xl font-bold mb-2`, colors[index]]}>
                    {tokenomy.amount}
                </h2>

                <span css={[tw`text-2xl font-bold`, colors[index]]}>
                    {tokenomy.title}
                </span>
            </div>

            <p tw="color[var(--text-sub)]">
                {tokenomy.desc}
            </p>
        </div>
    )


}

export default TokenomyCard
