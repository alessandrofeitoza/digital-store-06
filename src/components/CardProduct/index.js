import sapato from "../../assets/img/sapato.png";
import { Paper, Typography } from "@mui/material";

import "./styles.scss";

export default function CardProduto (props) {
    return (
        <div className="card-product">
            <Paper elevation={3}>
                <div style={{height: 10}}>
                    {
                        props.discount === true && <span className="discount">30% OFF</span>                        
                    }
                </div>

                <img src={sapato}/>
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
