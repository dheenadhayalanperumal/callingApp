import React from "react";
import { Link } from "react-router-dom";

function Signin() {
    return (
        <div>
            <div>
                <Link to="/signup">Signup</Link>
            </div>
            <div className="text-3xl">Signin page</div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Signin</button>
            </form>
        </div>
    );
}

export default Signin;