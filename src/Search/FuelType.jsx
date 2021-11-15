import Form from 'react-bootstrap/Form'
import { useState } from "react"

const FuelType = (props) => {

  const [changeFuelTypesValue, setChangeFuelTypesValue] = useState('')

  const changeFuelType = (e) => {
    setChangeFuelTypesValue(e.target.value)
  }

    return(
      <Form.Select aria-label="Default select example" onChange={(event)=>{changeFuelType(event)}}>
        {props.fuelTypeArr.map((x, i) => (
          <option key={i} value={x.title} >{x.title}</option>
        ))}
      </Form.Select>
    )
}

export default FuelType