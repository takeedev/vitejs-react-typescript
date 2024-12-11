import React, { useState } from 'react';

function LoginPage({ onLogin } : {onLogin: any}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onLogin({ username, password });
    };

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;