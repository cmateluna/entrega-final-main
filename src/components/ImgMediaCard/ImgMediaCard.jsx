import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "../ImgMediaCard/ImgMediaCard.css";
import {useNavigate} from "react-router-dom";
import {Divider} from "@mui/material";

export default function ImgMediaCard(props) {
    
    const {id, title, description, image, price} = props;

    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt={title}
                height="300"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                 <Typography className="imgMediaCard__price" variant="h6" color="text.primary">
                    ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                
            </CardContent>
            <Divider />
            <CardActions>
                <Button href="#text-buttons" size="small" startIcon={<ShoppingCartCheckoutIcon />}>Agregar al Carro</Button>
                <Button onClick={()=>navigate(`/item/${id}`)} size="small" startIcon={<AddIcon />}>Ver Más</Button> 
            </CardActions>
        </Card>
    );
}