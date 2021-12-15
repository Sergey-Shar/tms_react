import React, { useState } from "react";
import './index.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Popup = ({ className, onClose }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    const onSubmit = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                onClose()
                history.push('/posts')
            })
            .catch((error) => {
                const errorCode = error.code
                setError(errorCode)
            })
    }

    const onClickValidation = () => {
        if (firstName.length === 0 || lastName.length === 0) {
            setError('заполните все поля')
        } else if (email.length < 3) {
            setError("эл. адрес введен не корректно")
        } else if (password.length < 3) {
            setError('пароль должен быть больше 3 сиволов')
        } else {
            onSubmit(email, password)

        }
    }

    const onChange = (event) => {
        const { dataset, value } = event.target
        if (dataset.input === "first-name") {
            setFirstName(value)
        }
        if (dataset.input === "last-name") {
            setLastName(value)
        }
        if (dataset.input === "email") {
            setEmail(value)
        }
        if (dataset.input === "password") {
            setPassword(value)
        }
    }

    return (

        <div className={className ? 'popup open' : 'popup '}>
            <div className="overlay">
                <div className="popup-body">
                    <div className="header">
                        <h3 className="title">Регистрация</h3>
                        <p className="error">{error}</p>
                        <span onClick={onClose} className="btn-close">&times;</span>
                    </div>
                    <form>
                        <div className="header-form">
                            <input type='text' data-input='first-name' required
                                onChange={onChange}
                                placeholder="Имя" />
                            <input type='text' data-input="last-name" required
                                onChange={onChange}
                                placeholder="Фамилия" />
                        </div>
                        <input type='text' data-input="email" required
                            onChange={onChange}
                            placeholder="номер телефона или адрес эл.почты" />
                        <input type='text' data-input="password" required
                            onChange={onChange}
                            placeholder="новый пароль" />
                        <p className="information">Нажимая кнопку Регистрация,
                            вы принимаете Условия, Политику использования данных
                            и Политику в отношении файлов cookie.
                            Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.</p>
                        <button onClick={onClickValidation} type='button'
                            className="register-btn">Регестрация</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Popup