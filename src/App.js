import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import axios from 'axios';
import FuelType from './Search/FuelType';
import GearType from './Search/GearType';
import Category from './Search/Category';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Pagination from './Pagination/Pagination';
import FilteredData from './Search/FilteredData';

const App = () => {
  const [keyword, setKeyword] = useState('')
  const [fuelTypes, setFuelTypes] = useState([])
  const [gearTypes, setGearTypes] = useState([])
  const [categories, setCategories] = useState([])
  const [currencies, setCurrencies] = useState([])
  const [mileageTypes, setMileageTypes] = useState([])
  const [wheelTypes, setWheelTypes] = useState([])
  
  const [filteredData, setFilteredData] = useState([])
  const [changeFuelTypesValue, setChangeFuelTypesValue] = useState(0)
  const [changeGearTypeValue, setChangeGearTypeValue] = useState(0)
  const [changeCategoryValue, setChangeCategoryValue] = useState(0)
  const [meta, setMeta] = useState({})

  const [error, setError] = useState('')

  async function getData ()  {
    try{
      const response = await axios.get('https://api2.myauto.ge/appdata/other_ka.json')
      if(response.data.FuelTypes) {
        setFuelTypes(response.data.FuelTypes.items)
      }      
      if(response.data.GearTypes) {
        setGearTypes(response.data.GearTypes.items)
      }
      if(response.data.Categories){
        setCategories(response.data.Categories)
      }
      if(response.data.Currencies) {
        setCurrencies(response.data.Currencies)
      }
      if(response.data.mileageTypes) {
        setMileageTypes(Object.values(response.data.mileageTypes))
      }
      if(response.data.WheelTypes){
        setWheelTypes(response.data.wheelTypes)
      }
    }
    catch(e) {
      setError(e)
    }
  }

  async function getFilteredData ( page, keyword) {
    try {
      const response = await axios.get(`https://api2.myauto.ge/ka/products?TypeID=0&Mans=&CurrencyID=3&MileageType=1&page=${page}&Keyword=${keyword}`)
      setFilteredData(response.data.data.items)
      setMeta(response.data.data.meta)
    }
    catch(e) {
        setError(e)
    }
  }

  const changeCategory = (e) => {
    setChangeCategoryValue(e.target.value)
  }

  const changeFuelType = (e) => {
    setChangeFuelTypesValue(e.target.value)
  }

  const changeGearType = (e) => {
    setChangeGearTypeValue(e.target.value)
  }

  useEffect(() => {
    getData()
  }, [])

  const searchData = () => {
    getFilteredData(5, keyword)
  }

  return (
    <div>
      <Form className="mt-3">
        <Container>
          <Row>
            <Col md={4}>
              <FuelType fuelTypeArr={fuelTypes} changeFuelType={changeFuelType}/>
            </Col>
            <Col md={4}>
              <GearType gearTypeArr={gearTypes} changeGearType={changeGearType}/>
            </Col>
            <Col md={4}>
              <Category categoryArr={categories} changeCategory={changeCategory}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mt-3 mb-3" >
                <Form.Control type="text" placeholder="ჩაწერეთ VIN კოდი, ID, ტელეფონი ან ნებისმიერი საძიებო ფრაზა..." value={keyword} onChange = {(e) => setKeyword(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="warning" onClick={searchData}>ძებნა</Button>{' '}
        </Container>
      </Form>
    
      {filteredData.length > 0 ? (
        <>
          <Pagination
            data={filteredData}
            RenderComponent={FilteredData}
            pageLimit={7}
            dataLimit={meta.per_page}
            meta={meta}
          />
        </>
      ) : <span>{error}</span>}
      {/* {
        fuelTypes.length > 0 && (
          <>
            <FilteredData
              fuelTypeArr={fuelTypes}
              data={filteredData}
            />
          </>
        )
      } */}
    </div>
  );

}

export default App;