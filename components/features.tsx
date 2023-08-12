import Image from "next/image"

interface Feature {
    feature_title: string;
    feature_image: string;
    feature_description: string;
}

interface FeaturesPageProps {
    s_features: Feature[];
}

export default function FeaturesPage({ s_features }: FeaturesPageProps) {
    return (
        <div id="FeaturePage" className="w-full">
            <h2>Features</h2>
            <p>We try to implement more features than this but for the moment we are going to follow</p>
            <div className="w-92 flex items-center justify-around p-4 ">
            {
                s_features.map((ft, index) => {
                    return (
                        <div 
                            key={index}
                            className="w-92 h-92 text-center p-4"
                        >
                            <h3>{ft.feature_title}</h3>
                            <Image 
                                src={ft.feature_image} 
                                alt="cool"
                                width={32}
                                height={32}
                                className="w-32 h-32 mx-auto"
                            />
                            <p>
                                {ft.feature_description}
                            </p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
