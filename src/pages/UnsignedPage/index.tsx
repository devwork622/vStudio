import { type NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/unsignedPage.module.scss"

const UnsignedPage: NextPage = () =>
    <div className={styles.daoPanel}>
        <div className="flex gap-x-24 justify-center">
            <Image src="/images/Group 526.png" className={styles.daoAvatar} alt="group"></Image>
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

export default UnsignedPage;

