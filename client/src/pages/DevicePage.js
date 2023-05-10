import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";

const DevicePage = () => {

    const device = {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'}
    const description =  [
        {id: 1, title: 'dfhjsgfhs', description: 'asdasdas'},
        {id: 2, title: 'dfhjsgfhs', description: 'asdasdas'},
        {id: 3, title: 'dfhjsgfhs', description: 'asdasdas'},
        {id: 4, title: 'dfhjsgfhs', description: 'asdasdas'},
        {id: 5, title: 'dfhjsgfhs', description: 'asdasdas'},
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={5}>
                <h2 style={{textAlign:"center", justifyContent:"center",marginRight:100}}>{device.name}</h2>
                </Col>
                <Col md={3}>
                    <Card
                        style={
                            {
                                display:"flex",
                                flexDirection:"column",
                                alignItems:"center",
                                justifyContent:"space-around",
                                height:300,
                                fontSize:32
                            }
                        }
                    >
                        <h3>{device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row
                style={
                    {
                        display:"flex",
                        flexDirection:"column",
                        margin:10
                    }
                }
            >
                <h1 style={{textAlign:"center"}}>Характеристики</h1>
                {description.map(info => 
                    <Row style={{margin:5, background: info.id % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}} key={info.id} >
                        {info.title}:{info.description}    
                    </Row>    
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;