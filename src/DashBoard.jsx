import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function DashBoard() {
    let playerRef = useRef(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            setError("Browser does not support getUserMedia API");
            return;
        }

        if (window.location.protocol !== "https:") {
            setError("Application is not served over HTTPS");
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
           if(playerRef.current) {
               playerRef.current.srcObject = stream;
               playerRef.current.play(); // Play the video after assigning the stream
           }
        })
        .catch((error) => {
            console.log("Error accessing media devices.", error);
            if (error.name === "NotAllowedError") {
                setError("Permission to access media devices was denied.");
            } else {
                setError(error.message); // Store the error message instead of the error object
            }
        });
    }, []);

    if(error) 
        return <div>
               <div>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
            </div>
            <br />
            Error: {error}</div>; // Render the error message

    return (
        <div>
            <div>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
            </div>
            <video ref={playerRef} autoPlay></video>
            <div className="text-3xl">caller page</div>
        </div>
    );
}

export default DashBoard;