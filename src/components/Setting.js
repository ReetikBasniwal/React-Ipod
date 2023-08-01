import React from 'react'
import { FiSettings } from "react-icons/fi";

export default function Setting() {
  return (
       <div className="Container" style={styles.ScreenDiv}>
        <i style={{fontSize:"70px"}}><FiSettings /></i>
        </div>
  )
}

const styles = {
    ScreenDiv: {
        width: "90%",
        height: "45%",
        color: "rgb(229, 239, 229)",
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8KYjqc4zexLI4UD_zr5lxP_uUWI3F3Wb5q95_ozI2g&usqp=CAU&ec=48665701")',
        borderRadius: 8,
        border: "2px solid rgb(78, 75, 75)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-15px"
    }
}
