import { countries } from "../../data/countries"

const Form = () => {
  return (
    <form action="">
        <div>
            <label htmlFor="city">City</label>
            <input 
                id="city"
                type="text"
                name="city"
                placeholder="City" 
            />
        </div>
        <div>
            <label htmlFor="city">Country</label>
            <select name="" id="">
                <option value="">-- Select a country --</option>
                {countries.map(country =>(
                    <option
                        key={country.code}
                        value={country.code}
                    >{country.name}</option>
                ))}
            </select>
        </div>
        <input type="submit" value='Request Weather' />

    </form>
  )
}

export default Form