import styles from "../../styles/success.module.scss"

export default function SuccessPage() {
    return (
        <div className="flex">
            <img src="/images/success.png" />
            <div className="flex items-center">
                <h1 className={styles.text}>Successfully claimed!</h1>
            </div>
        </div>
    )
}