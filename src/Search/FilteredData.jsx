import {Col, Container, Row} from 'react-bootstrap'
import {Car} from '../Search/search'
import { useState, useEffect } from 'react';

const FilteredData = (props) => {
    const { 
      prod_year, engine_volume, fuel_type_id, gear_type_id, car_run_km, right_wheel, price_value, currency_id, car_desc 
    } = props.data;

    return (
      <Container>
        {/* {
          props.fuelTypeArr.map(x => {
            console.log(props.data.fuel_type_id)
          //   if(x.fuel_type_id === fuel_type_id) {
          //     console.log("ggg")
          //   }
          // })
          })
        
        } */}
        <Row className="d-flex">
          <Col md={3}>
            <div className="d-flex">
              <Car>
                Car Name
              </Car>
              <p>{prod_year} წ.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column">
                <span>ძრავი</span>
                <p>{engine_volume/1000} {fuel_type_id}</p>
              </div>
              <div className="d-flex flex-column">
                <span>ტრანსმისია</span>
                <p>{gear_type_id}</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column">
              <span>გარბენი</span>
              <p>{car_run_km} კმ</p>
            </div>
            <div className="d-flex flex-column">
              <span>საჭე</span>
              <p>{right_wheel} </p>
            </div>
          </Col>
          <Col md={3}>
            <span>
              <b>{price_value} price{currency_id}</b>
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