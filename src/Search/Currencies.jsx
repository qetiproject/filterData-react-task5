import { useState } from "react"
import { Form } from "react-bootstrap"

const Currencies = (props) => {
    const [changeCurrecnciesValue, setChangeCurrenciesValue] = useState(3)

    const changeCurrency = (e) => {
        setChangeCurrenciesValue(e.target.value)
    }

    return(
        <div>
          <Form.Select aria-label="Default select example" onChange={(event)=>{changeCurrency(event)}}>
            <option aria-checked>Currencies</option>
            {props.currenciesArr.map((x, i) => (
                <option key={i} value={i} >{x.title}</option>
            ))}
            </Form.Select>
        </div>
    )

}

export default Currencies