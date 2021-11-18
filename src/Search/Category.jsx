import { Form } from "react-bootstrap"

const Category = (props)  =>{
      return(
       <div>
          <Form.Select aria-label="Default select example" onChange={(event)=>{props.changeCategory(event)}}>
          <option aria-checked>კატეგორია</option>
            {props.categoryArr.map((x, i) => (
              <option key={i} value={i} >{x.title}</option>
            ))}
          </Form.Select>
       </div>
      )
}

export default Category