// import { useState } from "react";
import React ,{useState, useEffect, useContext, useRef, useMemo} from "react";
import Layout from "../Layout";
import Cookies from "js-cookie";
import { UserContext } from "../Context/UserContext";

const Counter=()=>{
const [count,setCount] = useState(0)
const [numbers, setNumbers] = useState([1, 2, 3, 4, 4]);
const [show, setShow] = useState(true);
const [currencies, setCurrencies] = useState([]);
const [user, setUser] = useState({
  name: "vishal",
  city: "pune",
});

const data = useContext(UserContext);

async function fetchAPI() {
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/currencies",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("Token")}`,
        },
      }
    );
    const result = await res.json();
    setCurrencies(result);
  }


useEffect(()=>{

    console.log('mounting....')
    fetchAPI()

    // let time = 1;
    // const timer =  setInterval(()=>{
    //     time=time+1
    //     console.log('time',time)
    // },1000)

    // data.setUser('Ravi')

    return ()=>{
        // clearInterval(timer)

        console.log('unmounting...')
    }
},[])

useEffect(()=>{

    console.log('updating...')
},[count])

return (
    <Layout>
        <p>Counter:- {count} </p>
        <p>Counter:- {data.user} </p> 
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        {/* {currencies.map((x)=>x.name)} */}

        {currencies.map((currency) => (
        <p key={currency.name}>{currency.name}</p>
        // <p key={currency.name}>{currency.symbol}</p>
      ))}
      
    </Layout>
)
}

export default Counter;