import React from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {

    const navigate = useNavigate()

    return(
        <Col md={3} style={{marginTop:20}} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card style={{width: 150, cursor:"pointer"}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                    <div style={{textAlign:"center", color: "#696969"}}> Samsung </div>
                    <div style={{textAlign:"center"}}> {device.name} </div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem;