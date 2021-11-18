import Form from 'react-bootstrap/Form'

const GearType = (props) => {
    return(
       <div>
            <Form.Select aria-label="Default select example" onChange={(event)=>{props.changeGearType(event)}}>
            <option aria-checked>ტრანსმისია</option>
            {props.gearTypeArr.map((x, i) => (
                <option key={i} value={i} >{x.title}</option>
            ))}
        </Form.Select>
       </div>
    )
}


export default GearType