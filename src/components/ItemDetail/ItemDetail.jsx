import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {Divider, Paper} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "../ItemDetail/ItemDetail.css";

import {useNavigate} from "react-router-dom";

const ItemDetail = (props) => {

    const navigate = useNavigate();
    const {item} = props;

    return (
        <React.Fragment>
            <Grid className="itemDetailContainer__header" container spacing={2}>
                <Grid xs={8}>
                    <Typography className="itemDetailContainer__title" variant="h3" color="text.secondary">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography className="itemDetailContainer__price" variant="h3" color="text.secondary">
                        ${item.price}
                    </Typography>
                </Grid>
            </Grid>
            <Paper elevation={3}>
                <CardMedia
                    component="img"
                    alt={item.title}
                    height="500"
                    image={item.image}
                />
                <Typography className="itemDetailContainer__description" variant="body1" gutterBottom color="text.secondary" paragraph={true}>
                    {item.description}
                </Typography>
                <Divider />
                <Grid className="itemDetailContainer__footer" container spacing={2}>
                    <Grid xs={8}>
                        <Button className="itemDetailContainer__goback" onClick={()=>navigate(-1)} size="small" startIcon={<ArrowBackIosIcon />}>Volver atrás</Button>
                    </Grid>
                    <Grid className="itemDetailContainer__gridCartButton" xs={4}>
                        <Button href="#text-buttons" size="small" startIcon={<ShoppingCartCheckoutIcon />}>Agregar al Carro</Button>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}
export default ItemDetail
