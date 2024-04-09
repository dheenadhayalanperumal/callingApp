import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
    const playerRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                if (playerRef.current) {
                    playerRef.current.srcObject = stream;
                    playerRef.current.play();
                }
            });
    }, []);

    return (
        <div>
            <div>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
            </div>
            <div className="text-3xl">Dashboard page</div>
            <video autoPlay controls ref={playerRef} />
        </div>
    );
}

export default DashBoard;