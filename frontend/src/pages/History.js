import {Hero} from '../components/Hero'
import { HistoryItems } from '../components/HistoryItems'
import './History.css'
import {Page} from './Page'

import {useState,useEffect} from 'react'

function History(){
    const [history,setHistory] =useState([{}])
    useEffect(()=>{
        fetch('/api/history/').then(
            response =>{
                return response.json()
            }
        ).then(
            data=>setHistory(data)
        )
    },[])
    const left = history.filter((item,index)=>index % 2 != 0)
    const right = history.filter((item,index)=>index % 2 == 0)
return (
    <main className ="flex-column  w-100">
    <Hero name="test " description="test2" url="test3" />
    <div className="grid m-20 w-90">
        <div className="left">
            <HistoryItems items={left} />
        </div>

        <div className="line"></div>
        <div className="right">
            <HistoryItems items={right} reversed={false}  />
        </div>
</div>
</main>
)
}


export const HistoryPage = Page(History)