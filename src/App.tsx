import styles from "./App.module.css"
import Form from "./components/Form/Form"
import useWeather from "./hooks/useWeather"

function App() {
  const { fetchWeather } = useWeather()
  return (
    <>
      <h1 className={styles.title}>Weather Finder</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        <p className="">2</p>
      </div>
    </>
  )
}

export default App
