import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

import { host } from "./host";
import { top30 } from "../local";

// AUTHENTICATION ***
// Login
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
            window.localStorage.setItem('user', JSON.stringify(obj))
            checkLoginAPI({ setLoading, setError, setDetails, navigate, setLoginStatus })
        } else {
            setError({ email: 'Login Failed! Make sure your email is correct.', password: 'Login Failed! Make sure your password is correct.' })
        }
    })
    .catch((err) => {
        console.log(err);
        window.alert('Error! Please try again!')
    })
};

const checkLoginAPI = ({ setLoading, setError, setDetails, navigate, setLoginStatus }) => {
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null
    const url = `${host}/api/v1/auth/checkLogin`;

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
        },
    })
    .then((response) => {
        const obj = response.data;
        if (obj.success) {
            setDetails({ email: '', password: '' })
            setError({ email: '', password: '' })
            window.localStorage.setItem('user', JSON.stringify({ ...user, plan: obj.plan, endDate: obj.endDate, subscriptionID: obj.subscriptionID }))
            setLoginStatus({ loading: false, login: true, plan: obj.plan })
            if (obj.plan === 'none') {
                navigate('/pricing')
            } else {
                navigate('/dashboard')
            }
        }
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setLoading(false)
    })
};

// Register - check if user already in database
export const signupAPI = ({ setLoading, setError, details, setDetails, navigate, setLoginStatus }) => {
    setLoading(true);
    setError({ email: '', username: '', password: '', confirmPassword: '' })

    const url = `${host}/api/v1/auth/check_user_email`;

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
            registerAPI({ setLoading, setError, details, setDetails, navigate, setLoginStatus })
        } else {
            setError({ email: 'Email already taken.', username: '', password: '', confirmPassword: '' })
            setLoading(false)
        }
    })
    .catch((err) => {
        console.log(err);
        setLoading(false)
    })
};

// Register - after checking register the user
const registerAPI = ({ setLoading, setError, details, setDetails, navigate, setLoginStatus }) => {
    const url = `${host}/api/v1/auth/signup`;

    axios.post(url, {
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },
        email: details.email.trim(),
        username: details.username.trim(),
        password: details.password.trim(),
    })
    .then((response) => {
        const obj = response.data;
        if (obj.success) {
            setDetails({ email: '', username: '', password: '', confirmPassword: '' })
            setError({ email: '', username: '', password: '', confirmPassword: '' })
            window.localStorage.setItem('user', JSON.stringify({...obj, billingID: obj.customerID}))
            setLoginStatus(p => {return{...p, login: true, plan: 'none' }})
            navigate('/pricing')
        } else {
            setError({ email: 'Make sure provide a correct email.', username: 'Make sure your username contains no spaces in-between.', password: 'Make sure your password is 6 to 20 characters long without any space in-between.', confirmPassword: '' })
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

// Forgot Password - send code
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

// Forgot Password - change password
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





// DASHBOARD ***
// Add emission data
export const addDataAPI = ({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, setDisplayForm}) => {
    setFormLoading(true)
    const url = `${host}/api/v1/data`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
        },
        data: { ...formDetails, date: moment(formDetails.date).format('YYYY-MM-01'), amount: Number(formDetails.amount), id: uuidv4() },
        user_id: user?._id
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

// Delete emission data
export const deleteDataAPI = ({ setFormLoading, setRefresh, id }) => {
    setFormLoading(true)
    const url = `${host}/api/v1/data`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    axios.delete(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
        },
        data: {
            user_id: user?._id,
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

// Update emission data - first Delete
export const updateDataAPI = ({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, userID, setDisplayFormEdit }) => {
    setFormLoading(true)
    const url = `${host}/api/v1/data`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    axios.delete(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
        },
        data: {
            user_id: user?._id,
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

// Update emission data - then add again
const addDataAPIForEdit = ({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, setDisplayFormEdit }) => {
    const url = `${host}/api/v1/data`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
        },
        data: { ...formDetails, date: moment(formDetails.date).format('YYYY-MM-01'), amount: Number(formDetails.amount), id: uuidv4() },
        user_id: user?._id
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





// ACTION PLAN ***
// Save to database
export const actionPlanAPI = ({ category, percent, value, setRefresh, setReductionLoading }) => {
    setReductionLoading(true)
    const url = `${host}/api/v1/data/target`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
        },
        data: {
            category: category,
            percent: percent,
            value: value
        },
        user_id: user?._id,
    })
    .then((response) => {
        setRefresh(p => !p)
    })
    .catch((err) => console.log(err))
    .finally(() => setReductionLoading(false))
};





// SEARCH ***
// Get ESG Data
export const esgDataAPI = ({ setLoading, setData, symbol, setError }) => {
    setLoading(true)
    const url = `${host}/api/v1/data/esgChart`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
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

// Get ESG company name
export const esgCompanyNameAPI = ({ setCompany, symbol }) => {
    const url = `${host}/api/v1/data/info`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    axios.post(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
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

// Get ESG Data - Top 21
export const esgListDataAPI = async ({ setLoading, setListData }) => {
    setLoading(true)
    let top = top30.map(e => { return { company: e.company, symbol: e.symbol } })
    const url = `${host}/api/v1/data/esgChart`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    await Promise.allSettled(top.map(async e => {
        let result = []
        const response = await axios.post(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Authorization": "Bearer "+user?.token,
            },
            symbol: e.symbol
        })
        if (response.data) {
            const obj = response.data
            if (obj.data) {
                result = {
                    company: e.company,
                    symbol: e.symbol,
                    esg: obj.data[obj.data.length-1].esg,
                    environment: obj.data[obj.data.length-1].environment,
                    social: obj.data[obj.data.length-1].social,
                    governance: obj.data[obj.data.length-1].governance,
                }
            }
        }
        return result
    }))
    .then(response => {
        setListData(response.filter(f => f.status === 'fulfilled').map(e => e.value).sort((a, b) => b.esg - a.esg))
    })
    .catch(error => {
        setListData([])
        console.log(error)
    })

    setLoading(false)
};





// PRICING
// Stripe payment API
export const basicPaymentAPI = async ({ setLoading }) => {
    setLoading(true)
    const url = `${host}/api/v1/payment/monthly?` ;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    try {
        const res = await fetch(url + new URLSearchParams({
            customerID: user?.billingID
        }))
    
        const obj = await res.json()

        if (obj.session) {
            if (obj.session.url) {
                window.localStorage.setItem('sessionID', 'carb0nomics2023')
                window.open(obj.session.url, '_self')
            } else {
                window.alert("Please try again. Can't get the payment link.")
            }
        } else {
            window.alert("Please try again. Can't get the payment link.")
        }
        
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
};

// Stripe unsubscribe API
export const unsubscribeAPI = async ({ setLoading, setLoginStatus }) => {
    setLoading(true)
    const url = `${host}/api/v1/payment/unsubscribe`;
    const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null

    if (!user) {
        window.location.reload()
    }

    axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Authorization": "Bearer "+user?.token,
        },
        params: { subscriptionID : user?.subscriptionID }
    })
    .then((response) => {
        const obj = response.data
        if (obj.success) {
            window.alert("Successfully unsubscribed. You can enjoy our services until your end date.")
        } else {
            window.alert("You are already unsubscribed.")
        }
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setLoading(false)
    })
};