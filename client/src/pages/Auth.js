import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container style={
            {   height: window.innerHeight - 54,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <Card style={{width: 600, padding: 50}}>
                <h2 style={{textAlign: 'center'}}>{isLogin ? 'АВТОРИЗАЦИЯ' : 'РЕГИСТРАЦИЯ'}</h2>
                <Form style={{
                    display: "flex",
                    flexDirection: "column"
                }}>

                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль..."
                    />

                        <Button 
                            className="mt-3" 
                            variant={"outline-success"}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>

                        {isLogin ? 
                            <div style={{marginTop: 10, textAlign:"center"}}>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{textDecoration: "none"}}>Зарегистрируйся!</NavLink>
                            </div>
                        : 
                            <div style={{marginTop: 10, textAlign:"center"}}>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{textDecoration: "none"}}>Войди!</NavLink>
                            </div>
                        }

                </Form>
            </Card>

        </Container>
    )
}

export default Auth;