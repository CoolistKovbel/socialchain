"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"


const MainHeader = () => {

    const metamaskConnect = () => {
        console.log('metamask')
    }

    return (
        <header id="MainHeader">
            <h1>Socialchain</h1>
            <nav>
                <Link href="/About">About</Link>
                <Link href="/AI">AI</Link>
                <Button
                    variant="outline" 
                    onClick={metamaskConnect}>
                    🦊
                </Button>
            </nav>
        </header>
    )
}

export default MainHeader;