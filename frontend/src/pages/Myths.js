import { MythsItems } from "../components/MythsItems"
import {Page} from './Page'
import {Hero} from '../components/Hero'
import {Loading} from '../components/Loading'
import {useState,useEffect} from 'react'
import './Myths.css'
function Myths(){
    const [myths, setMyths] = useState([{}])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('/api/myths/').then(
            response =>{
                return response.json()
            }
        ).then(
            data=>{
                setMyths(data)
                setLoading(false)
            }
        )
    },[])
    return(
    <main class ="flex-column row-gap-50  w-100">
        <Hero name="Zionist Myth" description=""  />
        {loading ? <Loading/>:<MythsItems myths={myths}/>}
    </main>
    )
}

export const MythsPage = Page(Myths)