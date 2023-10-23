import { useState } from "react";

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { toggleModal } = props

    function handleLogin(e) {
        e.preventDefault()
        toggleModal()
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="modal-header mb-4 border-bottom">
                    <h2>Login</h2>
                    {/* <button type="button" class="btn-close" onClick={toggleModal}></button> */}
                </div>
                <form onSubmit={handleLogin}>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div class="modal-footer">
                        <button className="btn btn-success btn-lg mx-4" type="submit">Login</button>
                        <button className="btn btn-secondary btn-lg" type="button" onClick={toggleModal}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}