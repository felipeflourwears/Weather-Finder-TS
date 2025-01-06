import styles from "./App.module.css"
import Form from "./components/Form/Form"
import Spinner2 from "./components/Spinner2/Spinner2"
/* import Spinner from "./components/Spinner/Spinner" */
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"
import Alert from "./Alert/Alert"

function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()
  return (
    <>
      <h1 className={styles.title}>Weather Finder</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && 
          <Spinner2/>
        }
        {hasWeatherData && 
          <WeatherDetail weather={weather} 
        />}
        {notFound && <Alert>City not found</Alert>}
          
      </div>
    </>
  )
}

export default App
