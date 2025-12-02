import { MythsItems } from "../components/MythsItems"
import {Page} from './Page'
import {Hero} from '../components/Hero'
import {useState,useEffect} from 'react'
import './Myths.css'
function Myths(){
    const [myths,setMyths] = useState([{}])
    useEffect(()=>{
        fetch('/api/myths/').then(
            response =>{
                return response.json()
            }
        ).then(
            data=>setMyths(data)
        )
    },[])
    return(
    <main class ="flex-column row-gap-50  w-100">
        <Hero name="test " description="test2" url="test3" />
        <MythsItems myths={myths}/>
    </main>
    )
}

export const MythsPage = Page(Myths)