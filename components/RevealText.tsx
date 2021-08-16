import tw from 'twin.macro'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Children, useEffect, useRef } from 'react'

function RevealText({ cls, children }) {
    const textEl = useRef(null);
    useEffect(() => {
        cls = '#' + cls
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: cls,
                start: 'top bottom',
                end: 'bottom top',
                // markers: true,
                toggleActions: "restart",

            },
            defaults: { ease: "SlowMo.easeOut" }
        })
        tl.to(cls, {
            y: '0%',
            opacity: 1,
            duration: 0.8
        })
    }, [])
    return (
        <div tw=" overflow-hidden">
            <div ref={textEl} id={cls} css={[tw`transform[translateY(100%)] mb-4 opacity-0`,]} >
                {children}
            </div>
        </div>
    )
}

export default RevealText
