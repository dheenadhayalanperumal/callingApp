import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function DashBoard() {
    const playerRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setError("Your browser does not support media devices.");
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
            if (playerRef.current) {
                playerRef.current.srcObject = stream;
                playerRef.current.play();
            }
        })
        .catch((error) => {
            if (error.name === "NotAllowedError") {
                setError("Please grant permission to access media devices.");
            } else {
                setError("An error occurred while accessing media devices.");
            }
        });
    }, []);

    if (error) {
        return (
            <div>
                <div>
                    <Link to="/signup">Signup</Link>
                    <Link to="/signin">Signin</Link>
                </div>
                <p>Error: {error}</p>
            </div>
        );
    }

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