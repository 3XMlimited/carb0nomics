import axios from "axios";
import { host } from "./host";
import { v4 as uuidv4 } from 'uuid';

export const loginAPI = ({ setLoading, setError, details, setDetails, navigate, setLoginStatus }) => {
    setLoading(true);
    setError({ email: '', password: '' })

    const url = `${host}/api/v1/auth`;

    axios.post(url, {
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },
        email: details.email.trim(),
        password: details.password.trim(),
    })
    .then((response) => {
        const obj = response.data;
        if (obj.success) {
            setDetails({ email: '', password: '' })
            setError({ email: '', password: '' })
            window.localStorage.setItem('token', obj.token)
            window.localStorage.setItem('user', JSON.stringify(obj))
            setLoginStatus(p => {return{...p, login: true, email: obj.email, level: obj.level, expiry: obj.expiry, id: obj._id}})
            navigate('/dashboard')
        } else {
            setError({ email: 'Login Failed! Make sure your email is correct.', password: 'Login Failed! Make sure your password is correct.' })
        }
    })
    .catch((err) => {
        console.log(err);
        window.alert('Error! Please try again!')
    })
    .finally(() => {
        setLoading(false)
    })
};

export const signupAPI = ({ setLoading, setError, details, setDetails, navigate, setLoginStatus }) => {
    setLoading(true);
    setError({ email: '', password: '', confirmPassword: '' })

    const url = `${host}/api/v1/auth/signup`;

    axios.post(url, {
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },
        email: details.email.trim(),
        password: details.password.trim(),
    })
    .then((response) => {
        const obj = response.data;
        if (obj.success) {
            setDetails({ email: '', password: '', confirmPassword: '' })
            setError({ email: '', password: '', confirmPassword: '' })
            window.localStorage.setItem('token', obj.token)
            window.localStorage.setItem('user', JSON.stringify(obj))
            setLoginStatus(p => {return{...p, login: true, email: obj.email, id: obj._id}})
            navigate('/dashboard')
        } else {
            setError({ email: 'Signup Failed! Make sure provide a correct email.', password: 'Signup Failed! Make sure your password is 6 to 20 characters long without any space in-between.', confirmPassword: '' })
        }
    })
    .catch((err) => {
        console.log(err);
        window.alert('Error! Please try again!')
    })
    .finally(() => {
        setLoading(false)
    })
};

export const sendCodeAPI = ({ setLoading, setError, details, setDisplayChange, setCountdown }) => {
    setLoading(true);
    setError({ email: '', code: '', password: '', confirmPassword: '' })

    const url = `${host}/api/v1/auth/sendSMS`;

    axios.post(url, {
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },
        email: details.email.trim(),
    })
    .then((response) => {
        const obj = response.data;
        if (obj.success) {
            setError({ email: '', code: '', password: '', confirmPassword: '' })
            setDisplayChange(true)
            let timeLeft = 60
            setCountdown(60)
            let intervalID = setInterval(() => {
                setCountdown(timeLeft)
                if(timeLeft <= 0){
                    clearInterval(intervalID);
                }
                timeLeft -= 1;
            }, 1000);
        } else {
            setError({ email: 'Failed! Please check your input email.', code: '', password: '', confirmPassword: '' })
        }
    })
    .catch((err) => {
        console.log(err);
        window.alert('Error! Please try again!')
    })
    .finally(() => {
        setLoading(false)
    })
};

export const changePasswordAPI = ({ setLoading, setError, details, setDetails, setDisplayChange, navigate }) => {
    setLoading(true);
    setError({ email: '', code: '', password: '', confirmPassword: '' })

    const url = `${host}/api/v1/auth/changePassword`;

    axios.post(url, {
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },
        email: details.email.trim(),
        code: details.code.trim(),
        password: details.password.trim(),
    })
    .then((response) => {
        const obj = response.data;
        if (obj.success) {
            setDetails({ email: '', code: '', password: '', confirmPassword: '' })
            setError({ email: '', code: '', password: '', confirmPassword: '' })
            setDisplayChange(true)
            navigate('/login')
        } else {
            setError({ email: '', code: 'Failed! Please recheck the verification code you entered or try resending a new code.', password: '', confirmPassword: '' })
        }
    })
    .catch((err) => {
        console.log(err);
        window.alert('Error! Please try again!')
    })
    .finally(() => {
        setLoading(false)
    })
};

export const addDataAPI = ({ formDetails, setFormLoading, setError }) => {
    setFormLoading(true)
    const url = `${host}/api/v1/data`;
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')
    console.log({ ...formDetails, amount: Number(formDetails.amount), id: uuidv4() });
    console.log(JSON.parse(user)._id);

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        data: { ...formDetails, amount: Number(formDetails.amount), id: uuidv4() },
        user_id: JSON.parse(user)._id
    })
    .then((response) => {
        const obj = response.data;
        console.log(response);
        // if (obj.success) {
        // } else {
        // }
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setFormLoading(false)
    })
};