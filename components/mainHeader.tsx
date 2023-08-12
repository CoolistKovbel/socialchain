"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"



interface MainHeaderProps{
    metamaskConnect: () => void;
    address: boolean; // change to string maybe
}


const MainHeader = ({metamaskConnect, address}: MainHeaderProps) => {



    return (
        <header id="MainHeader">
            <div className="w-96 flex justify-between items-center">
                <h1>
                    <Link href="/dashboard">U</Link>
                </h1>
                <nav>
                    <Link href="/About">About</Link>
                    <Link href="/AI">AI</Link>
                    {
                        !address && (
                        <Button
                            variant="outline" 
                            onClick={metamaskConnect}>
                            🦊
                        </Button>
                        )
                    }

                </nav>
            </div>
            {
                address ? (
                    <div className="bg-[#35343e] p-2 rounded">
                        Sat Aug 12 17:33
                    </div>
                ) : (
                    <div className="bg-[#35343e] p-2 rounded">
                        register
                    </div>
                )
            }
        </header>
    )
}

export default MainHeader;