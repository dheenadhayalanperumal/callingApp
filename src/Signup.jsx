import React from "react";

function Signup() {
    return (
        <div>
        <h1>Signup</h1>
        <form>
            <label>
                First Name:
                <input type="text" name="firstName" />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" />
            </label>
            <br />
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
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" />
            </label>
            <br />
            <button type="submit">Signup</button>
        </form>
        </div>
    );
    }

export default Signup;