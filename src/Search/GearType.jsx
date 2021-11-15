import { useState } from "react"
import Form from 'react-bootstrap/Form'

const GearType = (props) => {

    const [changeGearTypeValue, setChangeGearTypeValue] = useState('')

    const changeGearType = (e) => {
        setChangeGearTypeValue(e.target.value)
      }

    return(
        <Form.Select aria-label="Default select example" onChange={(event)=>{changeGearType(event)}}>
            {props.gearTypeArr.map((x, i) => (
                <option key={i} value={x.title} >{x.title}</option>
            ))}
        </Form.Select>
    )
}


export default GearType