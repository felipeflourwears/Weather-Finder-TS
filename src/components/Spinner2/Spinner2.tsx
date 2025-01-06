import styles from './Spinner2.module.css'

const Spinner2 = () => {
  return (
    <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
    </div>
  )
}

export default Spinner2