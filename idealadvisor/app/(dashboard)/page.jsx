"use client"

// import {useState, useRef, useEffect, forwardRef} from "react";
import Link from "next/link"

// --- Component ---
//


// --- Icons ---
import {AiOutlineArrowLeft} from "react-icons/ai"


export default function Home() {


    // const logoAndName = useRef(null)
    // const logoR = useRef(null)
    // const logoB = useRef(null)
    // const name = useRef(null)
    // const entryButton = useRef(null)
    // const navbar = forwardRef(null)
    // const dotnav = useRef(null)
    // const circle1 = useRef(null)
    // const circle2 = useRef(null)
    // const circle3 = useRef(null)
    // const circle4 = useRef(null)

  return (
  <>
    <main className="flex w-full h-fit transition-all duration-500 homePage">
        <div className="entry-page">
            <Link href={"/acceuil"}>
            <buton className="entry-button"type="button">
                <p className={"text-button"}>Entrer</p>
                <AiOutlineArrowLeft className={"arrow"}/>
            </buton>
            </Link>
        </div>

        <div className="logo-and-name">
            <p className="companyName" >IDEAL<br/>ADVISOR</p>
            <div className="logo">
                <div className="logo-blue-part"></div>
                <div className="logo-red-part" ></div>
            </div>
        </div>
    </main>
  </>
  )
}
