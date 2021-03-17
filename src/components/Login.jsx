import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
    const [formData, setFormData] = useState({email: "", password: ""});

    return (
        <div>
            <form>
                <div>
                    <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value=""
                        placeholder="Password"
                        required
                    />
                </div>
                <div>
                    <button onClick={submitHandler}>Log in</button>
                </div>
                <div>
                    <p>What? You don't have an acount? Create one here!</p>
                </div>
            </form>
        </div>
    )
}

export default Login
