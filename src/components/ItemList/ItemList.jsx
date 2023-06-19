import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";

const ItemList = (props) => {

    const {items} = props;

    return (
        <React.Fragment>
            {items.map(({id, title, description, image, price}) => (
                <Grid key={id}>
                    <ImgMediaCard id={id} title={title} price={price} description={description} image={image}  />
                </Grid>
            ))}
        </React.Fragment>
    )
}
export default ItemList
