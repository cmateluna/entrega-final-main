import {useContext, useState} from 'react'
//import {collection, getDoc, getDocs, addDoc, doc, where, query} from "firebase/firestore";
import {collection, getDoc, getDocs, addDoc, doc, where, query} from "firebase/firestore";
//import {db} from "../services/firebase.config";
import { db } from '../service/firebase.config';
import {LoaderContext} from "../context/LoaderProvider";

const UseFirebase = () => {

    const {startLoader, stopLoader} = useContext(LoaderContext);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);

    const getProducts = async () => {
        startLoader();
        try {
            const col = collection(db,"products")
            const data = await getDocs(col);
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});
            setProducts(result);
        } catch (error) {
            console.log(error);
        } finally {
            stopLoader();
        }
    }

    const getProductById = async (id) => {
        startLoader();
        try {
            const document = doc(db,"products", id)
            const response = await getDoc(document)
            const result = response.data()
            setProduct({id:response.id,...result})
        } catch (error) {
            console.log(error);
        } finally {
            stopLoader();
        }
    }

    const getProductsByCategoryId = async (categoryId) => {
        startLoader();
        try {
            const documents = query(collection(db, 'products'), where('categoryId', '==', categoryId));
            const data = await getDocs(documents)
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});
            setProducts(result);
        } catch (error) {
            console.log(error);
        } finally {
            stopLoader();
        }
    }

    const handleSubmit = async (form) => {
        startLoader();
        try {
            const col = collection(db,"orders");
            return await addDoc(col, form);
        } catch (error) {
            console.log(error);
        } finally {
            stopLoader();
        }
    }

    return {
        getProducts,
        getProductsByCategoryId,
        products,
        getProductById,
        product,
        handleSubmit
    }
}
export default UseFirebase;
