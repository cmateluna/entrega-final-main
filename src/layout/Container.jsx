import React, {Fragment} from 'react'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer/Footer'

const Container = (props) => {
  return (
    <Fragment>
        <Navbar
            items={["Vinilos", "BluRay", "Poleras", "Accesorios", "Contacto"]}
            navbarLogoCss={"text-danger navbar-brand"}
            navbarLogo={"BIG STORE"}
        />
        {/*Contenido dinámico*/}
        {props.children}
        <Footer/>
    </Fragment>
  );
};

export default Container
