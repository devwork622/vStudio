import styles from "../../styles/success.module.scss"
import Image from "next/image";
export default function SuccessPage() {
    return (
        <div className="flex">
            <Image src="/images/success.png" alt="success"/>
            <div className="flex items-center">
                <h1 className={styles.text}>Successfully claimed!</h1>
            </div>
        </div>
    )
}