import React from "react";
import Music from "./Music";
import Player from "./Player";
import Artists from "./Artists";
import Games from "./Games";
import Setting from "./Setting";


export default function Screen(props) {
        
    return(
        <>
            {
                props.activePage === 'Home' &&
                <div className="Container" style={styles.ScreenDiv}>
                    <div className="menu" style={styles.menuDiv}>
                        <h2 style={{margin:"10px auto 2px auto", }}>iPod</h2>
                        <ul style={{listStyle:"none", marginLeft:"0px", paddingLeft:"0px", fontSize:"1.4em", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <li id="Plyr" style={{ marginBottom: "10px", width:"70%", borderRadius: "7px", paddingLeft: "25px", backgroundColor: props.activeItem==='Player'?'white':''}}>Player</li>
                            <li id="Hm" style={{ marginBottom: "10px", width:"70%", borderRadius: "7px", paddingLeft: "25px",  backgroundColor: props.activeItem==='music'?'white':''}}>Music</li>
                            <li id="Gm" style={{ marginBottom: "10px", width:"70%", borderRadius: "7px", paddingLeft: "25px", backgroundColor: props.activeItem==='games'?'white':'' }} >Games</li>
                            <li id="St" style={{ marginBottom: "10px", width:"70%", borderRadius: "7px", paddingLeft: "25px", backgroundColor: props.activeItem==='settings'?'white':''}}>Settings</li>
                        </ul>
                    </div>
                    <img style={styles.wallpapaer} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8KYjqc4zexLI4UD_zr5lxP_uUWI3F3Wb5q95_ozI2g&usqp=CAU&ec=48665701" alt="wallpaper"/>
                </div>
            }
            {
                (props.activePage === 'Player') && <Player sound={props.sound} play={props.play} audio={props.audio}/>
            }
            {
                props.activePage === 'Music' &&
                <div className="Container" style={styles.ScreenDiv}>
                    <Music
                        activeItem={props.activeItem}
                        activePage={props.activePage}
                    />
                    <img style={styles.wallpapaer} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8KYjqc4zexLI4UD_zr5lxP_uUWI3F3Wb5q95_ozI2g&usqp=CAU&ec=48665701" alt="wallpaper"/>
                </div>
            }
            {
                (props.activePage === 'Artists') &&
                    <Artists  activeItem={props.activeItem} activePage={props.activePage}/>
            }
            {
                (props.activePage === 'Games') &&
                    <Games  activeItem={props.activeItem} activePage={props.activePage}/>
            }
            {
                (props.activePage === 'Settings') && 
                    <Setting activeItem={props.activeItem} activePage={props.activePage}/>
            }
                
                
        </>
    );
    
}
const styles = {
    ScreenDiv: {
        width: "90%",
        height: "45%",
        backgroundColor: "white",
        borderRadius: 8,
        border: "2px solid rgb(78, 75, 75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-15px"
    },
    wallpapaer: {
        width: "50%",
        height: "100%",
        borderRadius: "0 6px 6px 0",
        background: '#ccc'
    },
    menuDiv: {
        width: "50%",
        height: "100%",
        border: "1px 1px solid black",
        borderRadius: "6px 0 0 6px",
        display: "flex",
        backgroundColor:"#b7ffff",
        color: "#898888",
        flexDirection: "column"
        // zIndex: 1,
    },
}