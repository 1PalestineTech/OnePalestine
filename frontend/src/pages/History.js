import {Hero} from '../components/Hero'
import { HistoryItems } from '../components/HistoryItems'
import './History.css'
import {Page} from './Page'
import {Loading} from '../components/Loading'
import {useState,useEffect} from 'react'

function History(){
    const [history,setHistory] = useState([{}])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('/api/history/').then(
            response =>{
                return response.json()
            }
        ).then(
            data=>{
                setHistory(data)
                setLoading(false)
            }
        )
    },[])
    const left = history.filter((item,index)=>index % 2 !== 0)
    const right = history.filter((item,index)=>index % 2 === 0)
return (
    <main className ="flex-column  w-100">
    <Hero name="History" description="" />
    {loading ? <Loading />:
    <div className="grid m-20 w-90">
        <div className="left">
            <HistoryItems items={left} />
        </div>

        <div className="line"></div>
        <div className="right">
            <HistoryItems items={right} reversed={false}  />
        </div>
    </div>
}
</main>
)
}


export const HistoryPage = Page(History)