import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import axios from 'axios';
import FuelType from './Search/FuelType';
import GearType from './Search/GearType';

const App = () => {
  const [price, setPrice] = useState(0)
  const [fuelTypes, setFuelTypes] = useState([])
  const [gearTypes, setGearTypes] = useState([])
  const [categories, setCategory] = useState([])

  async function getData ()  {
    try{
      const response = await axios.get('https://api2.myauto.ge/appdata/other_ka.json')
      if(response.data.FuelTypes) {
        setFuelTypes(response.data.FuelTypes.items)
      }      
      if(response.data.GearTypes) {
        setGearTypes(response.data.GearTypes.items)
      }
      if(response.data.Categories) {
        setCategory(response.data.Categories)
      }
      // console.log(response.data.Categories)
    }
    catch(e) {
      console.log(e)
    }
  }
  
  const filterData = () => {

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Control type="number" placeholder="შეიყვანეთ ციფრი" value={price} onChange = {(e) => setPrice(e.target.value)}/>
        </Form.Group>
        <FuelType fuelTypeArr={fuelTypes}/>
        <GearType gearTypeArr={gearTypes}/>
        {/* <Category categoryArr={categories}/> */}
        <button type="submit" onClick={filterData()}>ძებნა</button>
      </Form>
    </div>
  );

}

export default App;