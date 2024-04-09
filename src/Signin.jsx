import React from "react";
import { Link } from "react-router-dom";

function Signin() {
    return (
        <div>
            <h1>Signin</h1>
            <form>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Signin</button>
            </form>
            <Link to="/signup">Signup</Link>
        </div>
    );
}

export default Signin;
