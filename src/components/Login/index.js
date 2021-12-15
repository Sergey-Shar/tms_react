import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './index.css';
import Popup from "../Popup";
import { useHistory } from "react-router-dom";


const Login = () => {

    const [mail, setMail] = useState('')
    const [password, setPasword] = useState('')
    const [err, setErr] = useState('')
    const [regestration, setRegestration] = useState(false)

    const history = useHistory()

    const onInLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                history.push('/posts')
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

    // const onChangeEmail = (event) => {
    //     setMail(event.target.value)
    //     console.log(event.target.value)
    //   }

      const onChangePassword = (event) => {
          setPasword(event.target.value)
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
                     onChange = {(event) => setMail(event.target.value)}
                     value={mail}
                     placeholder="Электронный адрес или номер телефона"/>
                    <input type='password'
                     onChange = {(event)=> setPasword(event.target.value)} 
                     value={password}
                     placeholder="Пароль"/>
                    <button className="btn-log_in" onClick={() => onInLogin(mail, password)}>Вход</button>
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