import React from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
    return(
        <nav class="dasjn">
            <ul class="ulNav">
                <li class="liNav" id="liNavActivo"><Link to="/">Inicio</Link></li>
                <li class="liNav"><Link to="UnJugador">Solo</Link></li>
                <li class="liNav"><Link to="Multijugador">Multijugador</Link></li>
                <li class="liNav"><Link to="AccionAventura">Accion/Aventura</Link></li>
                <li class="liNav"><Link to="Disparos">Disparos</Link></li>
                <li class="liNav"><Link to="Deportes">Deportes</Link></li>
                <li class="liNav"><Link to="Estrategia">Estrategia</Link></li>
                <li class="liNav"><Link to="Simulacion">Simulacion</Link></li>
                <li class="liNav"><Link to="Otros">Otros</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;