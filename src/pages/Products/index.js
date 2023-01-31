import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { Grid } from "@mui/material";

import CardProduct from "../../components/CardProduct";
import { useEffect, useState } from "react";

export default function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(response => response.json())
            .then(response => setData(response));
    }, []);

    return (
        <div>
            <Header/>
            <Menu active="products"/>
            <Banner/>

            Pagina de Produtos

            <Grid container spacing={3}>
                {data.map(product => {
                    return (
                        <Grid item md={4} xs={6}> 
                            <CardProduct info={product}/> 
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}
