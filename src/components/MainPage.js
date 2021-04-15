import React from 'react'
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';
import Services from './services'
import NavBar from './Navbar'
import HomePage from './HomePage'
const MainPage=()=>{

return(

<div>
<NavBar/>
<HomePage/>
<Services></Services>

</div>


)



}

export default MainPage