import React, {useEffect, useState} from 'react'
import data from "../../items.json";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        const filter = data.find((item) => item.id === id);
        setItem(filter);
    }, []);

    return (
        <ItemDetail item={item} />
    )
}
export default ItemDetailContainer
