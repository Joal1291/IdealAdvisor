"use client"
import {useState, useRef, useEffect} from "react";

import {AiOutlineArrowLeft} from "react-icons/ai"
export default function Home() {
    const [entryPage, setEntryPage] = useState(true)
    const [quiEstIdeal, setQuiEstIdeal] = useState(false)
    const [quiSuisJe, setQuiSuisJe] = useState(false)
    const [directorship, setDirectorship] = useState(false)
    const [financialOrganisation, setFinancialOrganisation] = useState(false)
    const [logoAndName, setLogoAndName] = useState(false)

    const bgpresention = document.querySelector(".presentation-page");
    const handleClickEntry = () => {
        console.log("ca fonctionne");
    }
  return (
    <main className="flex w-full h-fit ">
        <div className="presentation-page">
            <buton className="entry-button" type="button" onClick={(e) => {
                bgpresention.classList.toggle("changescale")
            }}>
                <p className={"text-button"}>Entrer</p>
                <AiOutlineArrowLeft className={"arrow"}/>
            </buton>
            {/*<div className={"qui-est-ideal"}>*/}
            {/*    <h2>*/}
            {/*        Qui est IDEAL ADVISOR ?*/}
            {/*    </h2>*/}
            {/*    <div>*/}
            {/*        <p className="text-explanation">*/}
            {/*            IDEAL ADVISOR est une société spécialisée en gestion et en organisation des départements financiers.<br/>*/}
            {/*            <br/>*/}
            {/*            IDEAL ADVISOR se démarque par sa maitrise des sujets techniques et  règlementaires ; expertise dédiée en gestion de fonds et en organisation, en particulier au sein de sociétés de gestion de portefeuille immobilier et Private Equity.<br/>*/}
            {/*            <br/>*/}
            {/*            La maitrise des sujets financiers, comptables, fiscaux et juridiques permet d’être le garant de l’information financière de ses clients.<br/>*/}
            {/*            <br/>*/}
            {/*            Faire appel à IDEAL ADVISOR, c est sélectionner un partenaire de confiance en organisation des départements financiers et en représentant légal.<br/>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"qui-suis-je"}>*/}
            {/*    <h2>*/}
            {/*        Qui suis-je?*/}
            {/*    </h2>*/}
            {/*    <div>*/}
            {/*        <p className="text-explanation">*/}
            {/*        Thomas Blin, fondateur de IDEAL ADVISOR<br/>*/}
            {/*            <br/>*/}
            {/*        Diplômé d’expertise comptable et de commissariat aux comptes,*/}
            {/*        14 ans d’expérience dans les métiers de la finance, banque, comptabilité, fiscalité et de l’audit.<br/>*/}
            {/*            <br/>*/}
            {/*        Evolution dans les domaines de la finance particulièrement en immobilier et gestion de fonds d’investissement auprès d’investisseurs institutionnels.<br/>*/}
            {/*        Expérience : SwissLife AM, BNP Paribas, KPMG…<br/>*/}
            {/*            <br/>*/}
            {/*        Expertise :*/}
            {/*            <ul>*/}
            {/*                <li>Accounting & Tax, clients internationaux, multi GAAP…</li>*/}
            {/*                <li>Legal, gestion administrative corporate, constitution, fusion…</li>*/}
            {/*                <li>Finance, Business Plan, représentant légal et conformité…</li>*/}
            {/*                <li>Fund management, AIFM, Valuation, LTV, structuration…</li>*/}
            {/*            </ul>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"directorship"}>*/}
            {/*    <h2>*/}
            {/*        Constitution<br/>*/}
            {/*        Domiciliation<br/>*/}
            {/*        Secrétariat<br/>*/}
            {/*        Général<br/>*/}
            {/*        Administrateur<br/>*/}
            {/*        OFFRE<br/>*/}
            {/*        DIRECTORSHIP<br/>*/}
            {/*        <br/>*/}
            {/*        IMAGE ICI*/}
            {/*    </h2>*/}
                {/*<div>*/}
                {/*    <p className="text-explanation">*/}
                {/*    Partenaire de confiance en France dans la gestion*/}

                {/*    La maitrise des sujets règlementaires, comptables, fiscaux et juridiques permet à IDEAL ADVISOR de se positionner comme garant de l’information financière de ses clients en proposant la mission de représentant légal / mandat social.*/}

                {/*    Les services trustee portent sur la gestion courante corporate :*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            Représentation légale, animation, constitution, liquidation*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Coordination et supervision des différentes parties prenantes*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Respect des obligations légales et fiscales*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Assistance au financement bancaire et non bancaire*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Assistance aux acquisitions et cessions*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Conseil dans la stratégique des FIA et SPV…*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*    </p>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className={"financial-organisation"}>*/}
            {/*    <h2>*/}
            {/*        OFFRE FINANCE<br/>*/}
            {/*        ORGANISATION<br/>*/}
            {/*        <br/>*/}
            {/*        Transformation de la direction financière & pilotage de la performance<br/>*/}
            {/*    </h2>*/}
            {/*    <div>*/}
            {/*        <p className={"text-explanation"}>*/}
            {/*            Partenaire de l’organisation des départements financiers<br/>*/}

            {/*            L’offre couvre l’ensemble des process relatifs à la performance et l'évaluation des FIA :*/}
            {/*            <ul>*/}
            {/*                <li>*/}
            {/*                    Centralisation et contrôle des données de valorisation*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Gestion financière prévisionnelle / modélisation et analyse des écarts*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Validation des transactions, augmentations/diminutions de capital, dividendes, les primes d'émission, les SHL...*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Coordination entre les équipes internes et externes tels comptables, dépositaires, auditeurs, AM, banques etc…*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Suivi et anticipation des ratios bancaires, réglementaires et statutaires (stress tests, AIFM, PRIIPS, LTV, Leverage, ICR DSCR etc.) ainsi que le suivi fiscal (obligation de distribution, IS, TVA, WHT…)*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        <div className="logo-and-name">
            <p className="companyName">IDEAL<br/>ADVISOR</p>
            <div className="logo">
                <div className="logo-blue-part"></div>
                <div className="logo-red-part"></div>
            </div>
        </div>
    </main>
  )
}
