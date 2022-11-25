import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "../../styles/unsignedPage.module.scss"

const UnsignedPage: NextPage = () => {

    const data = [{
        name: "vSelf DAO",
        description: "Web3 identity wallet with for data",
        color: "#fff",
        path: "/v2",
        url: "",
        property: "community-card-blue flex flex-row justify-center rounded-3xl pl-5 ml-3 mr-3 shadow-xl duration-500 motion-safe:hover:scale-105 ribbon-3 card"
    }];

    return (
        <div className={styles.daoPanel}>
            <div className="flex gap-x-24 justify-center">
                <img src="/images/Group 526.png" className={styles.daoAvatar}></img>
                <div>
                    <div className="flex gap-x-10">
                        <h1 className={styles.textHeader}>vSelf DAO</h1>
                        <div className={styles.pinkButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p>see community page</p>
                        </div>
                    </div>
                    <div className={styles.description}>web3 identity wallet with rewards for data sharing</div>
                    <div className={styles.detail}>
                        <div><b>adminstrator:</b> vself.near</div>
                        <div><b>number of memebers:</b> 134</div>
                    </div>
                </div>
            </div>
           <div className={styles.largeText}>
                <div className={styles.text}>You are not authorized. Please, <div>sign in</div> </div>
           </div>

        </div>
    );
};

export default UnsignedPage;

