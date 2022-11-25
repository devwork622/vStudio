import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Card from "../../components/Card";

const FirstPage: NextPage = () => {
    const data = [{
        tname: "join",
        bname: "community",
        description: "Become a part of the DAO’s on your terams",
        path: "/JoinCommunity",
        url: "/images/User.png",
        property: "community-card-pink flex flex-row justify-center rounded-3xl pl-5 pr-20 shadow-xl duration-500 motion-safe:hover:scale-105 ribbon-1 card"
    }, {
        tname: "create",
        bname: "community",
        description: "Start writing your Web3 story",
        path: "/CreateCommunity",
        url: "/images/Thumb up.png",
        property: "community-card-blue flex flex-row justify-center rounded-3xl pl-5 pr-20 shadow-xl duration-500 motion-safe:hover:scale-105 ribbon-2 card"
    }];

    return (
        <>
            <div className="flex-row flex p-12">
                <Image src='/images/Vector.png' className="vector-img" alt="vector"/>
                <div className="vector-text">
                    Try now
                    <div className="triangle"></div>
                </div>

                <div>
                    <p className="text-[80px] font-extrabold leading-normal text-gray-700 font-bold text-white font-cy tracking-[.04em]">
                        vStudio
                    </p>
                    <h4 className="text-[#B1B1B1] text-[20px] font-[800] tracking-[.04em] font-cy">
                        When privacy <Link href="/" className="community-text-link">comes first</Link>
                    </h4>
                    <p className="text-[#B1B1B1] community-text-detail text-[20px]">
                        Revolution the way web3 onboarding create private communities where
                        the governance method is a choice
                    </p>
                </div>
            </div>
            <div className="flex-important mt-3 grid gap-10 pt-3 text-center md:grid-cols-1 lg:grid-cols-2 lg:w-2/3  justify-between">
                {data.map((e, i) => {
                    return (<Card
                        tname={e.tname}
                        bname={e.bname}
                        description={e.description}
                        path={e.path}
                        url={e.url}
                        property={e.property}
                        key={i}
                    />)
                })}
            </div>
        </>
    )
}
export default FirstPage;