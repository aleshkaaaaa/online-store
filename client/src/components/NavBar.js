import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Электро-Мир</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto">
                <Button 
                variant={'outline-light'} 
                onClick={() => navigate(ADMIN_ROUTE)}
                >
                  Админ панель
                </Button>
                <Button 
                variant={'outline-light'} 
                onClick={() => navigate(LOGIN_ROUTE)} 
                style={{marginLeft: '10px'}}
                >
                  Выйти
                </Button>
            </Nav>
            :
            <Nav className="ml-auto">
                <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    )
})

export default NavBar;