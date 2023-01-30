import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { Paper, Typography, Grid, Badge, } from "@mui/material";
import sapato from "../../assets/img/sapato.png";

function CardProduto (props) {
    return (
        <div style={{marginTop: 100, marginBottom: 100, width: 300}}>
            <Paper elevation={3}>
                <br/>

                {
                    props.desconto === true && 
                    <div>
                        <span style={{backgroundColor: 'yellow', borderRadius: '8px', fontSize: '0.6rem', padding: 6}}> 
                            30% OFF 
                        </span>
                    </div>
                }

                <img src={sapato}/>
                <br/>
                <br/>
            </Paper>

            <Typography color="gray">Tennis</Typography>
            <Typography>K-Swiss V8 - Masculino</Typography>
            <Typography>
                <span><s>$200</s></span>
                <span>$100</span>
            </Typography>
        </div>
    )
}

export default function Products() {
    return (
        <div>
            <Header/>
            <Menu active="products"/>
            <Banner/>

            Pagina de Produtos

            <Grid container spacing={3}>
                <Grid item xs={4}> <CardProduto desconto={true}/> </Grid>
                <Grid item xs={4}> <CardProduto/> </Grid>
                <Grid item xs={4}> <CardProduto/> </Grid>
                <Grid item xs={4}> <CardProduto/> </Grid>
            </Grid>

        </div>
    );
}
