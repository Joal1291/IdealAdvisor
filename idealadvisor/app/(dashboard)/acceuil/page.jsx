"use client"
import Navbar from "@/app/components/Navbar";

// ----- Image

import Image from "next/image"
import handShake from "../../../public/image/handshake.png"
import fondateur from "../../../public/image/thomasblin.png"
import listimg from "../../../public/image/liste.png"
import hausseimg from "../../../public/image/hausseimg.png"
import Dotimg from "../../../public/image/dotimg.png"
import Circleimg from "../../../public/image/circleimg.png"

import { useState } from "react";

// const dotnav = useRef(null)
// const circle1 = useRef(null)
// const circle2 = useRef(null)
// const circle3 = useRef(null)
// const circle4 = useRef(null)


export default function Acceuil() {

    const handleClick = () => {
        console.log("fonctionne")
    }

    const [quiEstIdeal, setQuiEstIdeal] = useState(true)
    const [quiSuisJe, setQuiSuisJe] = useState(false)
    const [directorship, setDirectorship] = useState(false)
    const [financialOrganisation, setFinancialOrganisation] = useState(false)


    return(
        <>
        <Navbar className={"navbar"}/>
            <main className={"main-presentation"}>
                <div className={"presentation-page"}>
                    {/*/!*---------------------------DIV qui est ideal------------------------*!/*/}
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
                    <div className={"dotNav"}>

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
                            src={Circleimg}
                            width={25}
                            height={25}
                            alt={"circle of dot nav"}
                        />
                    </span>
                    </div>
                </div>
            </main>
        </>
    )
}