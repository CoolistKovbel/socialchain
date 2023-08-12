import { Button } from "@/components/ui/button";

export default function SupportComp ()  {
     return (
        <div>
            <h2>Support</h2>
            <p>We would love your support if anything we currently except BTC,ETH,CKB, or get a membership or check out our NFT collection</p>
            <div>
                {/* Cryto Donation */}
                <div>
                    <h4>Crypto Donations</h4>
                    <ul>
                        <li>BTC: bc1qm475v0duxa6snsxv3eulp4m92wpu4xn53apmw5 </li>
                        <li>ETH: 0xd17a72e5413676cf74dc7d0e80200e8e4a6d11d5</li>
                        <li>CKB-l2: 0xB12856680497d04339aCdBfecE7ed7E879D98b22</li>
                    </ul>
                </div>
                {/* Monthy subscribtion */}
                <div>
                    <h4>Monthly Subscription</h4>
                    <p>
                        You can register for a subscribtion and or join the DAO using our did.id
                    </p>
                    <Button>Upgrade 🔐 </Button>
                </div>
                {/* Mint NFT */}
                <div>
                    <h3>Mint NFT</h3>

                    <Button>
                        Mint Nft
                    </Button>
                </div>

            </div>
        </div>
     )
}

