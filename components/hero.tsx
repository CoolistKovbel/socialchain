"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function HeroComp ( ) {

    const [ rewardX , setRewardX ] = useState(0)

    const setReward = () => {
        setRewardX(prev => prev + 1)
    }



    return (
        <div id="Hero" className="flex justify-center items-center"> 
            <Card className="w-62 h-62 p-10 text-center">
                <CardTitle>SocialChain</CardTitle>
                <CardDescription>The place where things are soon to be...</CardDescription>
                
                {/* reward component */}
                <div className="w-full">
                    <p>Set Reward: <span>{rewardX}</span> +</p>
                    <Button 
                        className="w-full"
                        onClick={setReward}
                    >Set</Button>
                </div>

            </Card> 
        </div>
    )
}