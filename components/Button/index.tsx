import tw from "twin.macro"

function Button({ text, isLight = false, link }) {
    return (
        <div
            css={
                [
                    tw`text-2xl font-bold text-white background-color[var(--primary)] rounded-xl px-8 py-4 select-none cursor-pointer hover:text-white`,
                    isLight && tw`color[var(--text-main)] background-color[var(--primary-light)]`
                ]
            }
            tw="" >
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default Button
