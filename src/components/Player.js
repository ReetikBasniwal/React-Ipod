import React, {useState, useEffect} from 'react'

export default function Player() {

  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);


  useEffect(() => {
    
      const handleTimeUpdate = () => {
        const audioElement = document.getElementById('externalAudio');
        const { currentTime, duration } = audioElement;
        setCurrentTime(currentTime);
        setTotalTime(duration);
      };

      const interval = setInterval(handleTimeUpdate, 1000);

      return () => {
        clearInterval(interval);
      };

  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // const calculateProgressBarWidth = () => {
  //   if (totalTime !== 0) {
  //     const progressBar = (currentTime / totalTime) * 100;
  //     return progressBar + '%';
  //   }
  //   return '0%';
  // };
  const handleSliderChange = (event) => {
    const time = parseFloat(event.target.value);
    setCurrentTime(time);
    const audioElement = document.getElementById('externalAudio');
    audioElement.currentTime = time;
  };
  return (
    <div className="Container" style={styles.ScreenDiv}>
          <img src="https://i.scdn.co/image/ab67616d0000b273cb9eb26c1431d576ca8f205c" alt="Jericho" style={styles.Image}/>

          <div className="slidecontainer" style={styles.sts}>
            <p style={{width:"50px", overflow:"hidden",}}>{formatTime(currentTime)}</p>
            <input 
              type="range" 
              style={styles.bar} 
              min="1" max="100" 
              value={currentTime} 
              class="slider" id="myRange"
              onChange={handleSliderChange}
            />
            <p style={{width:"50px", overflow:"hidden", marginLeft:"5px"}}>{formatTime(totalTime)}</p>
          </div>
    </div>
  )
}

const styles = {
    ScreenDiv: {
        width: "90%",
        height: "45%",
        background: 'linear-gradient(to top right, #b9bfbd, #adf4d9)',
        borderRadius: 8,
        border: "2px solid rgb(78, 75, 75)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-15px"
    },
    Image: {
        width: "50%",
        height: "50%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
    },
    sts: {
      width: "80%",
      height: "10%",
      marginTop: "20px",
      display: "flex",
      alignItems:"center",
      position: "relative",
      justifyContent: "space-between",
      // backgroundColor:"yellow",
    },
    bar: {
      marginLeft: "8px",
      marginRight: "8px",
      color: "red",
    }

}
