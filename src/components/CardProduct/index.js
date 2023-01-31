import sapato from "../../assets/img/sapato.png";
import { Paper, Typography } from "@mui/material";

import "./styles.scss";

export default function CardProduto (props) {
    return (
        <div className="card-product">
            <Paper elevation={3}>
                <div style={{height: 10}}>
                    {
                        props.info.discount !== false && <span className="discount">{props.info.discount}% OFF</span>                        
                    }
                </div>

                <img width={'80%'} src={props.info.image}/>
            </Paper>

            <Typography color="gray">{props.info.category}</Typography>
            <Typography>{props.info.make} {props.info.model}</Typography>
            <Typography>
                <span><s>${props.info.listPrice}</s></span>
                <span>${props.info.salesPrice}</span>
            </Typography>
        </div>
    )
}
