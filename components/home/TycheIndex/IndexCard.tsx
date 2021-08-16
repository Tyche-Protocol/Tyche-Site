import tw from "twin.macro"

function IndexCard({ value, label, color }) {
    return (
        <div tw="flex flex-col items-center space-y-2 px-4 py-6 background-color[var(--bg-dark)] rounded-lg hover:shadow-2xl">
            <h3 css={[
                tw`text-2xl font-bold text-red-500`,
                color == 'blue' && tw`text-blue-600`,
                color == 'yellow' && tw`text-yellow-600`
            ]}>
                {value}
            </h3>

            <span tw="text-lg color[var(--text-sub)]">
                {label}
            </span>
        </div>
    )
}

export default IndexCard
