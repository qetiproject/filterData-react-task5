import axios from 'axios'
import { useState} from 'react'

const ShowFuelType = (props) => {

    const [title, setTitle]= useState('')

    const [fuelTypes, setFuelTypes] = useState([])

    async function getData ()  {
        try{
          const response = await axios.get('https://api2.myauto.ge/appdata/other_ka.json')
          if(response.data.FuelTypes) {
            setFuelTypes(response.data.FuelTypes.items)
          }      
        //   if(response.data.GearTypes) {
        //     setGearTypes(response.data.GearTypes.items)
        //   }
        //   if(response.data.Categories){
        //     setCategories(response.data.Categories)
        //   }
        //   if(response.data.Currencies) {
        //     setCurrencies(response.data.Currencies)
        //   }
        //   if(response.data.mileageTypes) {
        //     setMileageTypes(Object.values(response.data.mileageTypes))
        //   }
        //   if(response.data.WheelTypes){
        //     setWheelTypes(response.data.wheelTypes)
        //   }
        }
        catch(e) {
          console.log(e)
        }
      }

    getData()

    const Title = (id) => {
        fuelTypes.find(x => {
            if(x.fuel_type_id === id) {
                setTitle(x.title)
            }
            return title
        })
    }

    Title(3)
        
    return(
        <>
            {title}
        </>
    )
}

export default ShowFuelType