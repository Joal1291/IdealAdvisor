"use client"

import {useState, useRef, useEffect, forwardRef} from "react";
import Link from "next/link"

// --- Component ---
//
// --- Image ---
import Image from "next/image"
import handShake from "../../public/image/handshake.png"
// import fondateur from "../../public/image/thomasblin.png"
// import listimg from "../../public/image/liste.png"
// import hausseimg from "../../public/image/hausseimg.png"
// import Dotimg from "../../public/image/dotimg.png"
// import Circleimg from "../../public/image/circleimg.png"

// --- Icons ---
import {AiOutlineArrowLeft} from "react-icons/ai"


export default function Home() {

    const backgroundHome = useRef(null)
    const logoAndName = useRef(null)
    const logoR = useRef(null)
    const logoB = useRef(null)
    const name = useRef(null)
    const entryButton = useRef(null)
    const navbar = forwardRef(null)
    const dotnav = useRef(null)
    const circle1 = useRef(null)
    const circle2 = useRef(null)
    const circle3 = useRef(null)
    const circle4 = useRef(null)

    const [quiEstIdeal, setQuiEstIdeal] = useState(false)
    const [quiSuisJe, setQuiSuisJe] = useState(false)
    const [directorship, setDirectorship] = useState(false)
    const [financialOrganisation, setFinancialOrganisation] = useState(false)


  return (
  <>
    <main className="flex w-full h-fit transition-all duration-500 homePage">
        <div className="entry-page" ref={backgroundHome}>
            <Link href={"/acceuil"}>
            <buton className="entry-button" ref={entryButton} type="button">
                <p className={"text-button"}>Entrer</p>
                <AiOutlineArrowLeft className={"arrow"}/>
            </buton>
            </Link>
        </div>

        <div className="logo-and-name" ref={logoAndName}>
            <p className="companyName" ref={name}>IDEAL<br/>ADVISOR</p>
            <div className="logo">
                <div className="logo-blue-part" ref={logoR}></div>
                <div className="logo-red-part" ref={logoB}></div>
            </div>
        </div>
    </main>
  </>
  )
}
