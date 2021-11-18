import {Col, Container, Row} from 'react-bootstrap'
import {Car} from '../Search/search'
import { environment } from '../enviroments/environment';

const FilteredData = (props) => {
    const { 
      prod_year, engine_volume, fuel_type_id, gear_type_id, car_run_km, price_value, currency_id, car_desc, photo, car_id 
    } = props.data;

    const CarImgUrl = environment.CarImgUrl

    return (
      <Container>
        <Row className="d-flex">
          <Col md={5}>
            <div className="d-flex">
              <Car>
                <img src={`${CarImgUrl}/${photo}/thumbs/${car_id}_1.jpg`} alt=""/>
              </Car>
              <p>{prod_year} წ.</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="d-flex flex-column">
                <span>
                  <b>ძრავი</b>
                </span>
                <p>{engine_volume/1000} 
                  {props.fuelTypes.filter(fuelType => fuelType.fuel_type_id === fuel_type_id)[0]['title']}
                </p>
              </div>
              <div className="d-flex flex-column">
                <span>
                  <b>ტრანსმისია</b>
                </span>
                <p>{props.gearTypes.filter(gearType => gearType.gear_type_id === gear_type_id)[0]['title']}</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="d-flex flex-column">
              <span>
                <b>გარბენი</b>
              </span>
              <p>{car_run_km} კმ</p>
            </div>
          </Col>
          <Col md={2}>
            <span>
              <b>{price_value/1000} 
                {props.currencies.filter(currency => currency.currencyID === currency_id)[0]['currencySymbol']}
              </b>
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{car_desc}</p>
          </Col>
        </Row>
      </Container>
    );
  }

export default FilteredData