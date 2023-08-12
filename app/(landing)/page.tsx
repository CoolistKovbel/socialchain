import { Button } from "@/components/ui/button";
import Image from "next/image"

// Landing Page
const LandingPage = () => {


    const s_features = [
        {
            feature_title: 'Crypto Rewards',
            feature_image: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-bQnRkUFLP7xX58NxeBDaVk0Z/user-D7uMTzgEYUaGfNgTLTH0dbMB/img-8VsKvYLKMOvxnhpOmQOafac5.png?st=2023-08-11T21%3A46%3A26Z&se=2023-08-11T23%3A46%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-11T17%3A22%3A28Z&ske=2023-08-12T17%3A22%3A28Z&sks=b&skv=2021-08-06&sig=cYBDZawi0UEnvT6JW8cETl5B4yzT02U73j4hZ4F855U%3D",
            feature_description: 'You may want to HODL this for a moment'
        },
        {
            feature_title: 'Crypto Rewards',
            feature_image: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-bQnRkUFLP7xX58NxeBDaVk0Z/user-D7uMTzgEYUaGfNgTLTH0dbMB/img-BiuKyBxHeRZS7fSHn6FTtSJf.png?st=2023-08-11T21%3A46%3A26Z&se=2023-08-11T23%3A46%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-11T17%3A22%3A28Z&ske=2023-08-12T17%3A22%3A28Z&sks=b&skv=2021-08-06&sig=VfIcQmUFjjWWoPjFXiXlYQsbpEteXpw1ynJ9hrCIjp4%3D",
            feature_description: 'You may want to HODL this for a moment'
        },
        {
            feature_title: 'Crypto Rewards',
            feature_image: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-bQnRkUFLP7xX58NxeBDaVk0Z/user-D7uMTzgEYUaGfNgTLTH0dbMB/img-CxJoI6WjlYvSpgIMro74FbaN.png?st=2023-08-11T22%3A00%3A14Z&se=2023-08-12T00%3A00%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-11T17%3A20%3A10Z&ske=2023-08-12T17%3A20%3A10Z&sks=b&skv=2021-08-06&sig=eNbjheWstn5uLbXju0Q9frjw7D2lLPxY3lDNh/EBoxU%3D",
            feature_description: 'You may want to HODL this for a moment'
        },
    ]


    return (
        <main>
            
            {/* Hero */}
            <div>
                <h2>SocialChain</h2>
                <p>The place where things are soon to be...</p>
                
                {/* reward component */}
                <div>
                    <p>Claim Reward: <span>100</span> +</p>
                    <Button>claim</Button>
                </div>
            </div>

            {/* Features */}
            <div>
                <h2>Features</h2>
                <p>We try to implement more features than this but for the moment we are going to follow</p>
                <div>
                {
                    s_features.map((ft) => {
                        return (
                            <div>
                                <h3>{ft.feature_title}</h3>
                                <img src={ft.feature_image} alt="cool" />
                                <p>
                                    {ft.feature_description}
                                </p>
                            </div>
                        )
                    })
                }
                </div>
            </div>

            {/* Support */}
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


                </div>
            </div>


        </main>
    )
}

export default LandingPage;