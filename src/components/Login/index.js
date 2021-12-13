import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

const Login = () => {

    const [phone, setPhone] = useState('')
    const [password, setPasword] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState({})

    const fullName = user._id ? `${user.name.first}
    ${user.name.last}` : '';

    const onSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/auth/sing-in', {
                phone,
                password,
            })
            setUser(response.data)

        } catch (err) {
            setError(err.response.data)
        }
    }

    useEffect(() => {
        if (password.length === 3) {
            onSubmit()
        }
    }, [password])

    useEffect(() => {
        if (
            phone.length === 13 &&
            !/(^\+)(375)(29|25|17|33|44)([0-9]{7})/.test(phone)
            &&
            !error
        ) {
            setError('Номер телефона введен некорректно')
        }
    }, [phone, error])

    const onChangePassword = (event) => {
        setPasword(event.target.value)
    }

    const onReset = () => {
        setPasword('')
        setPhone('')
    }

    return (
        <div className="page">
            <div className="form">
            <input type='text'
                onChange={(event) => setPhone(event.target.value)}
                placeholder="phone"
                value={phone} />

            <input type='text'
                onChange={onChangePassword}
                placeholder="password"
                value={password} />
            </div>
          
            <div className="hello">
                Hello,{fullName}
            </div>
            <div className="error">
                {error}
            </div>
            <button className="btn-reset" onClick={onReset}>Reset</button>
        </div>
    )
}

export default Login