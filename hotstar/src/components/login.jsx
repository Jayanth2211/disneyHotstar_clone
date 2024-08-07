import '../style/login.css'
import hotstar from '../image/hotstarlogo.svg'

import { Link } from 'react-router-dom';

import { useRef } from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


let Login = () => {

    let [user, setUser] = useState([])
    let navigate = useNavigate()

    let Phno = useRef("")
    let pswd = useRef("")


    let Submit = (n) => {
        n.preventDefault()
        let data = {
            phno: Phno.current.value,
            password: pswd.current.value
        }

        axios.post('https://disneyhotstar-clone.onrender.com/login', data).then((res) => {
            alert(res.data.message)
            if (res.data.status == 200) {
                navigate('/home')
            }
        })


    }

    return (
        <div className="loginpage">
            <div className="box">
                <marquee behavior="" direction="">Please wait!! fetching data will take some time</marquee>

                <div className="logo">
                    <div class="round">
                      <img src={hotstar} alt=""  height={70} width={70} />
                    </div>
                </div>

                

                <div className="login">
                    <form action="" onSubmit={Submit}>
                        <input type="tel" ref={Phno} pattern='[0-9]{10}' placeholder='phone number' />
                        <input type="text" ref={pswd} placeholder='password' />

                        <button>Get Started</button><br />
                        <Link to="/signUp">SignUp</Link>

                    </form>
                </div>
            </div>

        </div>





    )
}
export default Login;