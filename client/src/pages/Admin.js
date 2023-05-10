import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const Admin = () => {
    return (
        <Container style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
            <Button style={{padding:10, margin:10, width:200}} variant={"outline-dark"}>Добавить тип</Button>
            <Button style={{padding:10, margin:10, width:200}} variant={"outline-dark"}>Добавить бренд</Button>
            <Button style={{padding:10, margin:10, width:200}} variant={"outline-dark"}>Добавить устройство</Button>
        </Container>
    )
}

export default Admin;