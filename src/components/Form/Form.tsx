import { countries } from "../../data/countries"
import styles from './Form.module.css'
import { useState } from "react"
import { SearchType } from "../../types"

const Form = () => {

   const [search, setSearch] = useState<SearchType>({
    city: '',
    country: ''
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
   }
    
  return (
    <form action="" className={styles.form}>
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