import tw from 'twin.macro'
import RevealText from '../../RevealText'

function LimitOrders() {
    return (
        <div tw="flex flex-col space-y-8 items-center py-20 px-4  w-full">
            <RevealText cls="limit">
                <h1 tw="text-4xl md:text-6xl font-bold  color[var(--text-main)] text-center" >Trade any launch with limit orders</h1>
            </RevealText>
            <p tw="max-w-6xl text-center text-xl color[var(--text-sub)]">
                Trade initial token launches with the tools of a CEX exchange. Allow yourself to view how other traders are playihng the lauch and what the demand is in a single view
            </p>
            <img tw="mt-12" src="/assets/images/limit-orders.png" alt="" />
        </div>
    )
}

export default LimitOrders
