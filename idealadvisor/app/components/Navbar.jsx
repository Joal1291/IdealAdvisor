"use client"

import {forwardRef} from "react";

// --- icons
import Image from 'next/image'
import CompanyLogo from "../../public/image/CompanyLogo.png"

//--- icons
import {BiMenu} from 'react-icons/bi'

const Navbar = forwardRef((props,ref)=> {
    return (
        <header className={"navbar"} ref={ref}>
            <BiMenu className={"menu-logo"}/>
            <div className={"flex w-48 justify-between items-center"}>
                <h1>
                    IDEAL ADVISOR
                </h1>
                <Image
                    src={CompanyLogo}
                    width={60}
                    height={60}
                    alt={"navbar logo company"}
                />
            </div>
        </header>
    );
});

export default Navbar;