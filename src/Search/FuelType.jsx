import Form from 'react-bootstrap/Form'

const FuelType = (props) => {
    return(
        <div>
          <Form.Select aria-label="Default select example" onChange={(event)=>{props.changeFuelType(event)}}>
            <option aria-checked>საწვავის ტიპი</option>
            {props.fuelTypeArr.map((x, i) => (
              <option key={i} value={i} >{x.title}</option>
            ))}
          </Form.Select>
        </div>
    )

}

export default FuelType