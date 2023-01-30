import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { Grid } from "@mui/material";

import CardProduct from "../../components/CardProduct";

export default function Products() {
    return (
        <div>
            <Header/>
            <Menu active="products"/>
            <Banner/>

            Pagina de Produtos

            <Grid container spacing={3}>
                <Grid item xs={4}> <CardProduct discount={true}/> </Grid>
                <Grid item xs={4}> <CardProduct/> </Grid>
                <Grid item xs={4}> <CardProduct discount={true}/> </Grid>
                <Grid item xs={4}> <CardProduct/> </Grid>
            </Grid>

        </div>
    );
}
