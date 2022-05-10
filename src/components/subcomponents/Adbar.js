import React from "react";

const AdBar = () => {
    return(
        <>
            <hr/>
            <div style={style.container}>
                <div style={style.content}>
                    <h2>Bem vindos !!</h2>
                    <img src="https://c.tenor.com/ydxbX5ZZORMAAAAC/pikachu-pok%C3%A9mon.gif" height="380px" width="450px"/>
                    <img src="https://c.tenor.com/nJclFuwdP5wAAAAC/squirtle-pikachu.gif" height="380px" width="450px"/>
                    <img src="https://c.tenor.com/bDnLivil00YAAAAC/pokemon-poke-ball.gif" height="380px" width="450px"/>
                </div>
            </div>
        </>
    )
}

const style = {
    container: {
        backgroundColor:"#29335C"
    },
    content: {
        padding: "10px",
        color: "white",
        textAlign: "center"
    }
}

export default AdBar;