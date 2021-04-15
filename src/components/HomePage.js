import React from 'react';
import { Media } from 'reactstrap';

import p1 from '../assets/images/p1.jpg'


import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

const Services = (props) => {
  return (



    <Media>
    <Media right href="#">
      
    </Media>
    <Media body>
      <Media heading>
        Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
    <Media object  style={{width:'30rem', height:'30rem', borderRadius:'50%'}}    src={p1} alt="Generic placeholder image" />
  </Media>


  );
};

export default Services
