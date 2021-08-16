import Head from 'next/head'
import tw from 'twin.macro'
import Nav from '../components/Nav'
import Link from 'next/link'
import RevealText from '../components/RevealText'
import Hero from '../components/home/Hero'
import Partners from '../components/home/Partners'
import Features from '../components/home/Features'
import LimitOrders from '../components/home/LimitOrders'
import TycheIndex from '../components/home/TycheIndex'
import Tokenomics from '../components/home/Tokenomics'
import Footer from '../components/Footer'



export default function Home() {



  return (
    <div tw=" w-full relative background-color[var(--bg-dark)] font-family[Inter]">
      <Head>
        <title>Tyche</title>
        <meta name="description" content="Tyche Token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="" tw=" flex flex-col  w-full items-center justify-center ">

        <Nav />
        <Hero />
        <Partners />
        <Features />
        <TycheIndex />
        <LimitOrders />
        <Tokenomics />
        <Footer />

      </div>


    </div >
  )
}
