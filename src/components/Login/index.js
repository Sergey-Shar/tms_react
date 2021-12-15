import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './index.css';
import Popup from "../Popup";
import { useHistory } from "react-router-dom";


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [err, setErr] = useState('')
    const [regestration, setRegestration] = useState(false)

    const history = useHistory()

    const onInLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                history.push('/post')
            })
            .catch((error) => {
                const errorCode = error.code
                setErr('Пользователь не найден. Вам необходимо зарегестрироваться.')
            })
    }

    const openForm = () => {
        setRegestration(true)
    }

    const closeForm = () => {
        setRegestration(false)
    }

    const onChange = (event) => {
        const { dataset, value } = event.target
        if (dataset.input === email) {
            setEmail(value)
        }
        if (dataset.input === password) {
            setPasword(value)
        }
    }

    return (
        <>
            <div className="page">
                <div className="greeting">
                    <h1 className="geeting__title">facebook</h1>
                    <p className="greeting__subtitle">Facebook помогает вам всегда оставаться на связи
                        и общаться со своими знакомыми.</p>
                </div>
                <div className="form">
                    <input type='text'
                        onChange={onChange}
                        placeholder="Электронный адрес или номер телефона"
                        data-input="email"
                        value={email} />
                    <input type='password'
                        onChange={onChange}
                        placeholder="Пароль"
                        data-input="password"
                        value={password} />
                    <button className="btn-log_in" onClick={() => onInLogin(email, password)}>Вход</button>
                    <p className="password">забыли пароль?</p>
                    <button className="btn-regestration" onClick={openForm}>Создать новый аккаунт</button>
                    <p className="error">{err}</p>
                </div>
            </div>
            <Popup className={regestration} onClose={closeForm} />
        </>
    )
}

export default Login