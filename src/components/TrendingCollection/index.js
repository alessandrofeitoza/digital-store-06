import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./styles.scss";

export default function TrendingCollection() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/trending-collections')
            .then(res => res.json())
            .then(res => setCategorias(res));
    }, []);    

    return (
        <div className="component-trending-collection">
            <p align="center">Coleções em Destaque</p>

            <Grid container>
                <Grid item xs={1}/>

                {categorias.map(c => {
                    return (
                        <Grid align="center" item xs={2}>
                            <div className="circle">
                                <i className={"fa-regular fa-"+c.icon}></i>
                            </div>

                            <span>{c.label}</span>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}
