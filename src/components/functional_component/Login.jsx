import React from "react";
import '../../css/login.css'
const Login = () => {
    return (
        <div className="container-login">
        <div className="Login">
            <form action="#">
            <h3> Login</h3>
                <table>
                    <tr>
                        <td><label>Username:</label><br></br>
                            <input type="text" placeholder="Enter the Mail Id or username" id="username"></input></td></tr><br></br>
                    <tr>
                        <td><label>Password:</label><br></br>
                            <input type="text" placeholder="Enter the password..."></input></td></tr><br></br>
                    <tr>
                            <td><a href="https://youtube.com" id="forgot">Forgot password?</a></td>
                        </tr>
                        <tr>
                        <td>
                            <button id="submit">Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        </div>
    )
}
export default Login;