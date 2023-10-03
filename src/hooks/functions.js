import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import { host } from "./host";
import { top30 } from "../local";

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

export const addDataAPI = ({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, setDisplayForm}) => {
    setFormLoading(true)
    const url = `${host}/api/v1/data`;
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        data: { ...formDetails, date: moment(formDetails.date).format('YYYY-MM-01'), amount: Number(formDetails.amount), id: uuidv4() },
        user_id: JSON.parse(user)._id
    })
    .then((response) => {
        const obj = response.data;
        if (obj?.result?.emissions) {
            setFormDetails({ date: moment().format('YYYY-MM'), sector: '', active_id: '', category: '', amount: 0, unit: '', type: ''  })
            setDisplayForm(false)
            setRefresh(p => !p)
        } else {
            setError('Error! Please try again')
        }
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setFormLoading(false)
    })
};

export const deleteDataAPI = ({ setFormLoading, setRefresh, id }) => {
    setFormLoading(true)
    const url = `${host}/api/v1/data`;
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')

    axios.delete(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        data: {
            user_id: JSON.parse(user)._id,
            id: id
        }
    })
    .then((response) => {
        setRefresh(p => !p)
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setFormLoading(false)
    })
};

export const updateDataAPI = ({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, userID, setDisplayFormEdit }) => {
    setFormLoading(true)
    const url = `${host}/api/v1/data`;
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')

    axios.delete(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        data: {
            user_id: JSON.parse(user)._id,
            id: userID
        }
    })
    .then((response) => {
        addDataAPIForEdit({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, setDisplayFormEdit })
    })
    .catch((err) => {
        console.log(err);
    })
};

export const actionPlanAPI = ({ category, percent, value }) => {
    const url = `${host}/api/v1/data/target`;
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        data: {
            category: category,
            percent: percent,
            value: value
        },
        user_id: JSON.parse(user)._id,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
};

const addDataAPIForEdit = ({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, setDisplayFormEdit }) => {
    const url = `${host}/api/v1/data`;
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        data: { ...formDetails, date: moment(formDetails.date).format('YYYY-MM-01'), amount: Number(formDetails.amount), id: uuidv4() },
        user_id: JSON.parse(user)._id
    })
    .then((response) => {
        const obj = response.data;
        if (obj?.result?.emissions) {
            setFormDetails({ date: moment().format('YYYY-MM'), sector: '', active_id: '', category: '', amount: 0, unit: '', type: ''  })
            setDisplayFormEdit(false)
            setRefresh(p => !p)
        } else {
            setError('Error! Please try again')
        }
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setFormLoading(false)
    })
};

export const esgDataAPI = ({ setLoading, setData, symbol, setError }) => {
    setLoading(true)
    const url = `${host}/api/v1/data/esgChart`;
    const token = window.localStorage.getItem('token')

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        symbol: symbol
    })
    .then((response) => {
        const obj = response.data
        if (obj.data) {
            if (obj.data.length > 0) {
                setData(obj.data)
            } else {
                setData([])
                setError("This company symbol either doesn't exist or has no scores recorded.")
            }
        } else {
            setData([])
            setError("This company symbol either doesn't exist or has no scores recorded.")
        }
    })
    .catch((err) => {
        console.log(err);
        setData([])
        setError("This company symbol either doesn't exist or has no scores recorded.")
    })
    .finally(() => {
        setLoading(false)
    })
};

export const esgCompanyNameAPI = ({ setCompany, symbol }) => {
    const url = `${host}/api/v1/data/info`;
    const token = window.localStorage.getItem('token')

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+token,
        },
        symbol: symbol
    })
    .then((response) => {
        const obj = response.data
        if (obj.data) {
            setCompany(obj.data)
        } else {
            setCompany('')
        }
    })
    .catch((err) => {
        console.log(err);
        setCompany('')
    })
};

export const esgListDataAPI = ({ setLoading, setListData }) => {
    setLoading(true)
    let top = top30.map(e => { return { company: e.company, symbol: e.symbol } })
    let result = []
    const url = `${host}/api/v1/data/esgChart`;
    const token = window.localStorage.getItem('token')

    top.forEach(e => {
        axios.post(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Authorization": "Bearer "+token,
            },
            symbol: e.symbol
        })
        .then((response) => {
            const obj = response.data
            if (obj.data) {
                result.push({
                    company: e.company,
                    symbol: e.symbol,
                    esg: obj.data[obj.data.length-1].esg,
                    environment: obj.data[obj.data.length-1].environment,
                    social: obj.data[obj.data.length-1].social,
                    governance: obj.data[obj.data.length-1].governance,
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })
    });

    setListData(result)
    setLoading(false)
};

