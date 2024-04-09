import React from "react";


function Signup() {
    return (
        <div>
            <div>
                <a href="/signin">Signin</a>
            </div>
            <div className="text-3xl">Signup page</div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;