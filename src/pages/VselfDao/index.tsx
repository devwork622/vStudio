import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "../../styles/vSelfDao.module.scss"

const VselfDao: NextPage = () => {

    const router = useRouter()

    return (
        <div className={styles.daoPanel}>
            <div className="flex gap-x-24">
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
                    <div className={styles.detail}>
                        <div><b>adminstrator:</b> vself.near</div>
                        <div><b>number of memebers:</b> 134</div>
                    </div>
                </div>
            </div>
            <div className={styles.joinForm}>
                <div className="flex justify-between">
                    <div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 items-center">
                            <p className={styles.label}>signed as:</p>
                            <input type="text" id="first_name" className="bg-gray-50 w-80 text-gray-900 text-md rounded-full  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white text-[16px]" placeholder="petya.near" />
                            <button type="button"  onClick={() => router.push('/VselfDaoOther')} className="w-60 text-white bg-green-400 hover:bg-green-400 text-[16px] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:hover:bg-green-700 dark:focus:ring-green-800">Join vSelf DAO</button>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 items-center pt-5">
                            <p className={styles.label}>your membership key:</p>
                            <input type="text" id="first_name" className="bg-gray-50 w-80 text-gray-900 text-md rounded-full  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white text-[16px]" placeholder="default_random_value" />
                            <button type="button" className="w-60 text-white bg-green-400 hover:bg-green-400 text-[16px] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:hover:bg-green-700 dark:focus:ring-green-800">Copy</button>
                        </div>
                    </div>                    
                    <div className="self-end" style={{color: "#3D3D3D"}}>what's memebrship key?</div>
                </div>
            </div>
        </div>
    );
};

export default VselfDao;

