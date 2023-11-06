"use client"

import {useState, useRef, useEffect, forwardRef} from "react";

// --- Component ---
import Navbar from "@/app/components/Navbar";

// --- Image ---
import Image from "next/image"
import handShake from "../../public/image/handshake.png"
import fondateur from "../../public/image/thomasblin.png"
import listimg from "../../public/image/liste.png"
import hausseimg from "../../public/image/hausseimg.png"
import Dotimg from "../../public/image/dotimg.png"
import Circleimg from "../../public/image/circleimg.png"

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

    const handleclick = (value) => {
        switch(value){
            case "quiestideal":
                setQuiEstIdeal(true)
                setQuiSuisJe(false)
                setDirectorship(false)
                setFinancialOrganisation(false)
                circle1.current.classList.add("circle-visible")
                circle2.current.classList.remove("circle-visible")
                circle3.current.classList.remove("circle-visible")
                circle4.current.classList.remove("circle-visible")
                break;
            case "quisuisje":
                setQuiEstIdeal(false)
                setQuiSuisJe(true)
                setDirectorship(false)
                setFinancialOrganisation(false)
                circle1.current.classList.remove("circle-visible")
                circle2.current.classList.add("circle-visible")
                circle3.current.classList.remove("circle-visible")
                circle4.current.classList.remove("circle-visible")
                break;
            case "director":
                setQuiEstIdeal(false)
                setQuiSuisJe(false)
                setDirectorship(true)
                setFinancialOrganisation(false)
                circle1.current.classList.remove("circle-visible")
                circle2.current.classList.remove("circle-visible")
                circle3.current.classList.add("circle-visible")
                circle4.current.classList.remove("circle-visible")
                break;
            case "financial":
                setQuiEstIdeal(false)
                setQuiSuisJe(false)
                setDirectorship(false)
                setFinancialOrganisation(true)
                circle1.current.classList.remove("circle-visible")
                circle2.current.classList.remove("circle-visible")
                circle3.current.classList.remove("circle-visible")
                circle4.current.classList.add("circle-visible")
                break;
        }
    }

  return (
  <>
    <Navbar ref={navbar}></Navbar>

    <main className="flex w-full h-fit transition-all duration-500 homePage">
        <div className="presentation-page" ref={backgroundHome}>
            <buton className="entry-button" ref={entryButton} type="button" onClick={(e) => {
                backgroundHome.current.classList.toggle("changeScale")
                logoAndName.current.classList.toggle("hideLN")
                name.current.classList.toggle("hide")
                logoR.current.classList.toggle("hide")
                logoB.current.classList.toggle("hide")
                entryButton.current.classList.toggle("hide")
                navbar.current.classList.toggle("appear")
                dotnav.current.classList.toggle("dotNavappear")
                circle1.current.classList.toggle("circle-visible")
                setQuiEstIdeal(true)
                // card1.current.classList.toggle("appear")

                console.log('je suis présent')
            }}>
                <p className={"text-button"}>Entrer</p>
                <AiOutlineArrowLeft className={"arrow"}/>
            </buton>

            {/*---------------------------DIV qui est ideal------------------------*/}
            {quiEstIdeal && (
                <div className={"presentation-card"}>
                    <div className={"title-card"}>
                        <Image
                            src={handShake}
                            width={250}
                            height={250}
                            alt="logo qui est ideal"
                        />
                        <h2>
                            Qui est IDEAL ADVISOR ?
                        </h2>
                    </div>
                    <div className={"description-card"}>
                        <p className="text-card">
                            IDEAL ADVISOR est une société spécialisée en gestion et en organisation des départements financiers.<br/>
                            <br/>
                            IDEAL ADVISOR se démarque par sa maitrise des sujets techniques et  règlementaires ; expertise dédiée en gestion de fonds et en organisation, en particulier au sein de sociétés de gestion de portefeuille immobilier et Private Equity.<br/>
                            <br/>
                            La maitrise des sujets financiers, comptables, fiscaux et juridiques permet d’être le garant de l’information financière de ses clients.<br/>
                            <br/>
                            Faire appel à IDEAL ADVISOR, c est sélectionner un partenaire de confiance en organisation des départements financiers et en représentant légal.<br/>
                        </p>
                    </div>
                </div>
            )}

            {/*------------------------>DIV qui sui je?-----------------------------*/}
            {quiSuisJe && (
                <div className={"presentation-card"}>
                    <div className={"title-card"}>
                        <Image
                            className={"fondateur"}
                            src={fondateur}
                            width={200}
                            height={200}
                            alt={"image du fondateur"}
                        />
                        <h2>
                            Qui suis-je?
                        </h2>
                    </div>
                    <div className={"description-card"}>
                        <span className="text-card">
                        Thomas Blin, fondateur de IDEAL ADVISOR<br/>
                            <br/>
                        Diplômé d’expertise comptable et de commissariat aux comptes,
                        14 ans d’expérience dans les métiers de la finance, banque, comptabilité, fiscalité et de l’audit.<br/>
                            <br/>
                        Evolution dans les domaines de la finance particulièrement en immobilier et gestion de fonds d’investissement auprès d’investisseurs institutionnels.<br/>
                        Expérience : SwissLife AM, BNP Paribas, KPMG…<br/>
                            <br/>
                        Expertise :
                            <ul>
                                <li>   Accounting & Tax, clients internationaux, multi GAAP…</li>
                                <li>   Legal, gestion administrative corporate, constitution, fusion…</li>
                                <li>   Finance, Business Plan, représentant légal et conformité…</li>
                                <li>   Fund management, AIFM, Valuation, LTV, structuration…</li>
                            </ul>
                        </span>
                    </div>
                </div>
            )}

            {/*---------------------DIV directorship--------------------------------*/}
            {directorship && (
                <div className={"presentation-card"}>
                <div className={"title-card"}>
                    <Image
                        src={listimg}
                        width={150}
                        height={150}
                        alt={"logo page director ship"}
                    />
                    <h2>
                        Constitution<br/>
                        Domiciliation<br/>
                        Secrétariat<br/>
                        Général<br/>
                        Administrateur<br/>
                    </h2>
                </div>
                <div className={"description-card"}>
                    <p className="text-card">
                    Partenaire de confiance en France dans la gestion<br/><br/>

                    La maitrise des sujets règlementaires, comptables, fiscaux et juridiques permet à IDEAL ADVISOR de se positionner comme garant de l’information financière de ses clients en proposant la mission de représentant légal / mandat social.
                    <br/><br/>
                    Les services trustee portent sur la gestion courante corporate :
                    <ul>
                        <li>
                            Représentation légale, animation, constitution, liquidation
                        </li>
                        <li>
                            Coordination et supervision des différentes parties prenantes
                        </li>
                        <li>
                            Respect des obligations légales et fiscales
                        </li>
                        <li>
                            Assistance au financement bancaire et non bancaire
                        </li>
                        <li>
                            Assistance aux acquisitions et cessions
                        </li>
                        <li>
                            Conseil dans la stratégique des FIA et SPV…
                        </li>
                    </ul>
                    </p>
                </div>
            </div>
            )}

            {/*---------------------DIV financial organisation---------------------*/}
            {financialOrganisation && (
                <div className={"presentation-card"}>
                    <div className={"title-card"}>
                        <Image
                            src={hausseimg}
                            width={150}
                            height={150}
                            alt={"logo orga page"}
                        />
                        <h2>
                            OFFRE FINANCE<br/>
                            ORGANISATION<br/>
                            <br/>
                            Transformation de la direction financière & pilotage de la performance<br/>
                        </h2>
                    </div>
                    <div className={"description-card"}>
                        <span className={"text-card"}>
                            Partenaire de l’organisation des départements financiers<br/><br/>

                            L’offre couvre l’ensemble des process relatifs à la performance et l'évaluation des FIA :
                            <ul>
                                <li>
                                    Centralisation et contrôle des données de valorisation
                                </li>
                                <li>
                                    Gestion financière prévisionnelle / modélisation et analyse des écarts
                                </li>
                                <li>
                                    Validation des transactions, augmentations/diminutions de capital, dividendes, les primes d'émission, les SHL...
                                </li>
                                <li>
                                    Coordination entre les équipes internes et externes tels comptables, dépositaires, auditeurs, AM, banques etc…
                                </li>
                                <li>
                                    Suivi et anticipation des ratios bancaires, réglementaires et statutaires (stress tests, AIFM, PRIIPS, LTV, Leverage, ICR DSCR etc.) ainsi que le suivi fiscal (obligation de distribution, IS, TVA, WHT…)
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            )}
            <div className={"dotNav"} ref={dotnav}>
                <span className={"singleDot"} onClick={(e) => handleclick("quiestideal")}>
                    <Image
                        className={"dot"}
                        src={Dotimg}
                        width={14}
                        height={14}
                        alt={"dot of nav"}
                    />
                    <Image
                        className={"circleDot"}
                        ref={circle1}
                        src={Circleimg}
                        width={25}
                        height={25}
                        alt={"circle of dot nav"}
                    />

                </span>
                <span className={"singleDot"} onClick={(e) => handleclick("quisuisje")}>
                    <Image
                        className={"dot"}
                        src={Dotimg}
                        width={14}
                        height={14}
                        alt={"dot of nav"}
                    />
                    <Image
                        className={"circleDot"}
                        ref={circle2}
                        src={Circleimg}
                        width={25}
                        height={25}
                        alt={"circle of dot nav"}
                    />
                </span>
                <span className={"singleDot"} onClick={(e) => handleclick("director")}>
                    <Image
                        className={"dot"}
                        src={Dotimg}
                        width={14}
                        height={14}
                        alt={"dot of nav"}
                    />
                    <Image
                        className={"circleDot"}
                        ref={circle3}
                        src={Circleimg}
                        width={25}
                        height={25}
                        alt={"circle of dot nav"}
                    />
                </span>
                <span className={"singleDot"} onClick={(e) => handleclick("financial")}>
                    <Image
                        className={"dot"}
                        src={Dotimg}
                        width={14}
                        height={14}
                        alt={"dot of nav"}
                    />
                    <Image
                        className={"circleDot"}
                        ref={circle4}
                        src={Circleimg}
                        width={25}
                        height={25}
                        alt={"circle of dot nav"}
                    />
                </span>
            </div>
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
