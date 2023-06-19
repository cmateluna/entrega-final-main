import React from 'react';
import Siteroutes from "./routes/Siteroutes";
import CartProvider from "./context/CartProvider";
import ProductProvider from "./context/ProductProvider";
import LoaderProvider from "./context/LoaderProvider";

function App() {
    return (
        <React.Fragment>
            <LoaderProvider>
                <ProductProvider>
                    <CartProvider>
                         <Siteroutes/> 
                    </CartProvider>
                </ProductProvider>
            </LoaderProvider>
        </React.Fragment>
    )
}

export default App;
