import { countries } from "../../data/countries"
import styles from './Form.module.css'
import { useState } from "react"
import { SearchType } from "../../types"
import Alert from "../../Alert/Alert"

type FormProps = {
    fetchWeather: (search : SearchType) => Promise<void>;
}


const Form = ({fetchWeather} : FormProps) => {

   const [search, setSearch] = useState<SearchType>({
    city: '',
    country: ''
   })

   const [alert, setAlert] = useState('')

   const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
   }

   const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        console.log("Submit")
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('All fields are mandatory!')
        }
        console.log("From Submit: ", search)
        fetchWeather(search)
       
   }
    
  return (
    <form 
        className={styles.form}
        onSubmit={handleSubmit}
    >
        {alert && <Alert>{alert}</Alert>}
        <div className={styles.field}>
            <label htmlFor="city">City</label>
            <input 
                id="city"
                type="text"
                name="city"
                placeholder="City" 
                value={search.city}
                onChange={handleChange}
            />
        </div>
        <div className={styles.field}>
            <label htmlFor="country">Country</label>
            <select
                id="country"
                value={search.country}
                name="country"
                onChange={handleChange}
            >
                <option value="">-- Select a country --</option>
                {countries.map(country =>(
                    <option
                        key={country.code}
                        value={country.code}
                    >{country.name}</option>
                ))}
            </select>
        </div>
        <input className={styles.submit} type="submit" value='Request Weather' />

    </form>
  )
}

export default Form