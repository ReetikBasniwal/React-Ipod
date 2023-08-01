import React from 'react'

export default function Music(props) {
  return (
    <>
      <div className="menu" style={styles.menuDiv}>
          <h2 style={{margin:"10px auto 2px auto", }}>iPod</h2>
          <ul style={{listStyle:"none", marginLeft:"0px", paddingLeft:"0px", fontSize:"1.4em", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <li id="Plyr" style={{ marginBottom: "10px", width:"70%", borderRadius: "7px", paddingLeft: "25px", backgroundColor: props.activeItem==='listening'?'white':''}}>Listening</li>
              <li id="Hm" style={{ marginBottom: "10px", width:"70%", borderRadius: "7px", paddingLeft: "25px",  backgroundColor: props.activeItem==='artists'?'white':''}}>Artists</li>
          </ul>
      </div>
    </>
  )

}
const styles = {
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