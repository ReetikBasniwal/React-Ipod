import React from "react";
import { FaPlay, FaPause} from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { HiBackward, HiForward } from "react-icons/hi2"
import Screen from "./Screen";
import ZingTouch from 'zingtouch';
import sound from "../assets/songs/Iniko_Jericho.mp3";

class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            activeItem: "Player",
            activePage: "Home",
            enter: 0,
            play: false,
            // totalTime: 0,
            // currentTime: 0,
        };
    }

    rotateWheel = () => {
        let containerElement = document.getElementById("circularContainer");
        let activeRegion = new ZingTouch.Region(containerElement);
        let change = 0;
        let self = this;
        self.state.enter = self.state.enter + 1;

        if (self.state.enter < 2) {
            activeRegion.bind(containerElement, "rotate", function (event) {
                let angle = event.detail.distanceFromLast;
                if(angle < 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("state chagne");
                        change = 0;
                        if (self.state.activePage === "Home") {
                            if (self.state.activeItem === "Player") {
                                self.setState({
                                activeItem: "settings",
                                });
                            } else if (self.state.activeItem === "music") {
                                self.setState({
                                    activeItem: "Player",
                                });
                            } else if (self.state.activeItem === "games") {
                                self.setState({
                                    activeItem: "music",
                                });
                            } else if (self.state.activeItem === "settings") {
                                self.setState({
                                    activeItem: "games",
                                });
                            }
                        }else if(self.state.activePage === "Music") {
                            if (self.state.activeItem === "listening") {
                                self.setState({
                                activeItem: "artists",
                                });
                            } else {
                                self.setState({
                                    activeItem: "listening",
                                });
                            } 
                        }
                    }

                }else {
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("state change");
                        change = 0;
                        if (self.state.activePage === "Home") {
                            if (self.state.activeItem === "Player") {
                                self.setState({
                                activeItem: "music",
                                });
                            } else if (self.state.activeItem === "music") {
                                self.setState({
                                    activeItem: "games",
                                });
                            } else if (self.state.activeItem === "games") {
                                self.setState({
                                    activeItem: "settings",
                                });
                            } else if (self.state.activeItem === "settings") {
                                self.setState({
                                    activeItem: "Player",
                                });
                            }
                        }else if(self.state.activePage === "Music") {
                            if (self.state.activeItem === "listening") {
                                self.setState({
                                activeItem: "artists",
                                });
                            } else {
                                self.setState({
                                    activeItem: "listening",
                                });
                            } 
                        }
                    }
                }

            });
        }
    };

    homeScreen = () => {
        if(this.state.activePage === "Music"){
            this.setState(() => ({
                activeItem: "music",
                activePage: "Home",
            }))
        }else if(this.state.activePage === "Player"){
            this.setState(() => ({
                activeItem: "Player",
                activePage: "Home",
            }))
        }else if(this.state.activePage === "Artists"){
            this.setState(() => ({
                activeItem: "music",
                activePage: "Home",
            }))
        }else if(this.state.activePage === "Settings"){
            this.setState(() => ({
                activeItem: "settings",
                activePage: "Home",
            }))
        }else {
            this.setState(() => ({
                activeItem: "games",
                activePage: "Home",
            }))
        }
    }

    changePage = () => {
        if(this.state.activeItem === "Player" || this.state.activeItem === "listening"){
            this.setState(({
                activeItem : "Player",
                activePage : "Player",
                
            }));
        }else if(this.state.activeItem === "music"){
            this.setState(() => ({
                activeItem : "listening",
                activePage : "Music",
                
            }));
        }else if(this.state.activeItem === "artists"){
            this.setState(() => ({
                activePage : "Artists",
                
            }));
        }else if(this.state.activeItem === "games"){
            this.setState(() => ({
                activePage : "Games",
                
            }));
        }else {
            this.setState(() => ({
                    activePage : "Settings",
            }));
        }

            this.setState({ play: false });
    }
    
    toggleMusic = () => {
        if (this.state.activePage === "Player") {
            const audio = document.getElementsByClassName("audio-element")[0];
            if (!this.state.play) {
              audio.play();
            } else {
              audio.pause();
            }
            this.setState((prevState) => ({
              play: !prevState.play,
            }));
        } else {
            const audio = document.getElementsByClassName("audio-element")[0];
            if (!this.state.play) {
                audio.play();
            } else {
                audio.pause();
            }
            this.setState((prevState) => ({ play: !prevState.play }));
        }
    }

    componentDidMount() {
        const audio = document.getElementsByClassName("audio-element")[0];
        this.setState({
            audio: audio,
        });
    } 

    handleMenuBtnTouchEnd = () => {
        // Add a small delay to prevent double-triggering of touch and click events
        setTimeout(() => {
          this.changePage();
        }, 200);
    }
    render() {

        return (
            <div className="iPodBody" style={styles.iPodBody}>
                <audio className="audio-element" id="externalAudio">
                    <source src={sound} controls></source>
                </audio>
                <Screen
                    activeItem={this.state.activeItem}
                    activePage={this.state.activePage}
                    sound={sound}
                    play={this.play}
                />
                {/* <div className="controller" style={styles.controller} > */}
                    <div id="circularContainer" style={styles.circularContainer} onMouseOver={this.rotateWheel}>
                        {/* Options */}
                        <div id="top" style={styles.topDiv} onClick={this.homeScreen} onTouchEnd={this.homeScreen}>
                            <i id="" style={styles.optIcon} ><  TiThMenuOutline /></i> 
                        </div>
                        {/* Backward and Forward and menu select */}
                        <div id="middle" style={styles.midDiv}>
                            <div id="backward" style={styles.bckwdDiv}>
                                <i id="" style={styles.bcdIcon}><  HiBackward /></i> 
                            </div>
                            <div id="menuBtn" style={styles.MenuBtn} onClick={this.changePage} onTouchEnd={this.handleMenuBtnTouchEnd}></div>
                            <div id="forward" style={styles.frwdDiv}>
                                <i id="" style={styles.frdIcon}><  HiForward /></i> 
                            </div>
                        </div>
                        {/* Play and Pause */}
                        <div id="bottom" style={styles.bottomDiv}>
                            <i id="play" style={styles.playIcon} onClick={this.toggleMusic} onTouchEnd={this.toggleMusic}><  FaPlay /></i> 
                            <i id="pause" style={styles.pauseIcon} onClick={this.toggleMusic} onTouchEnd={this.toggleMusic}>< FaPause /></i>
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}

const styles = {
    iPodBody: {
        width: "20rem",
        height: "32rem",
        backgroundColor: "rgb(229, 239, 229)",
        boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(180, 200, 186), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        justifyContent: "center",
        marginTop: "8%",
        borderRadius: 20
    },
    // controller: {
    //     position: "relative",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     width: "18rem",
    //     height: "14rem",
    //     flexWrap: "wrap",
    //     marginTop: "10px",
    //     marginBottom: "20px",
    //     // backgroundColor: "rgb(189, 195, 190)",
    //     borderRadius: "3%"
    // },
    circularContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "13.4rem",
        height: "13.4rem",
        backgroundColor: "rgb(232, 222, 222)",
        borderRadius: "50%",
        boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 1px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
        marginBottom: "25px",
        // margin: "auto",
    },
    topDiv: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "33.9%",
    },
    midDiv: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "33.9%",
    },
    bottomDiv: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "rgb(185, 246, 191)",
        width: "100%",
        height: "33.9%",
    },
    bckwdDiv: {
        width: "4.4rem",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    MenuBtn: {
        position: "relative",
        width: "4.4rem",
        height: "4.4rem",
        backgroundColor: "rgb(191, 178, 178)",
        boxShadow: "inset 0 0em 0em rgba(0, 0, 0, 0.1), 0 0 0 0.4px rgb(255, 255, 255), 0.1em 0.1em 1em rgba(63, 62, 62, 0.3)",
        borderRadius: "50%",
    },
    frwdDiv:{
        width: "4.4rem",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    playIcon: {
        color: "rgb(117, 128, 118)",
        marginRight: "5px",
        fontSize: "1.3rem",
    },
    pauseIcon: {
        color: "rgb(117, 128, 118)",
        fontSize: "1.3rem",
    },
    optIcon: {
        color: "rgb(117, 128, 118)",
        fontSize: "1.8rem"
    },
    frdIcon: {
        fontSize: "1.8rem",
        color: "rgb(117, 128, 118)",
    },
    bcdIcon: {
        fontSize: "1.8rem",
        color: "rgb(117, 128, 118)",
    }

}

export default Body;


