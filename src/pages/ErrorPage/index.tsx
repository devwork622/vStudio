import styles from "../../styles/error.module.scss"

export default function ErrorPage() {
    return (
        <div className="flex justify-center items-center">            
            <h1 className={styles.text}>Error message</h1>
        </div>
    )
}