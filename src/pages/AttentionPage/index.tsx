import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "../../styles/attentionPage.module.scss"

const VselfDaoOther: NextPage = () => {

    const router = useRouter()

    return (
        <div className={styles.daoPanel}>
            <div className="flex gap-x-24 my-8">
                <img src="/images/Group 525.png" className={styles.daoAvatar}></img>
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
                </div>
            </div>
            <div className="bg-blue-600 border rounded-lg px-24 py-12 my-8">
                <div className={styles.attentionSection}>
                    <p className={styles.textAttention}>Attention!</p>
                    <p className={styles.textAttention}>The membership badge is a non-transferable NFT and will be seen on NEAR blockchain</p>
                </div>
            </div>
            <div className="flex gap-x-24 items-center my-8">
                <img src="/images/Group 527.png" className={styles.daoBottomAvatar}></img>
                <div>
                    <div className="flex gap-x-10">
                        <h1 className={styles.textHeader}>vSelf Member</h1>
                        <div className={styles.pinkButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p>see community page</p>
                        </div>
                    </div>
                    <div className={styles.description}>web3 identity wallet with rewards for data sharing</div>
                </div>
                <button type="button" onClick={() => router.push('/SuccessPage')} className="text-white w-60 h-12 bg-green-400 hover:bg-green-400 text-[16px] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:hover:bg-green-700 dark:focus:ring-green-800">Confirm</button>

            </div>

        </div>
    );
};

export default VselfDaoOther;

