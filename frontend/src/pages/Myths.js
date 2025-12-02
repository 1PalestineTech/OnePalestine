import { MythsItems } from "../components/MythsItems"
import {Page} from './Page'
import {Hero} from '../components/Hero'

import './Myths.css'
function Myths(){
    const myths=[
        {
            title:"aaaaa",
            content:"aaaaaaaaaaaaaaaaaaaaaa<br> <span>fafafa</span>"
        },
        {
            title:"aaaaa",
            content:"aaaaaaaaaaaaaaaaaaaaaa<br> <span>fafafa</span>"
        },
        {
            title:"aaaaa",
            content:"aaaaaaaaaaaaaaaaaaaaaa<br> <span>fafafa</span>"
        },
        {
            title:"aaaaa",
            content:"aaaaaaaaaaaaaaaaaaaaaa<br> <span>fafafa</span>"
        },
        {
            title:"aaaaa",
            content:"aaaaaaaaaaaaaaaaaaaaaa<br> <span>fafafa</span>"
        },
        {
            title:"aaaaa",
            content:"aaaaaaaaaaaaaaaaaaaaaa<br> <span>fafafa</span>"
        },
        {
            title:"aaaaa",
            content:"aaaaaaaaaaaaaaaaaaaaaa<br> <span>fafafa</span>"
        },
    ]
    return(
    <main class ="flex-column row-gap-50  w-100">
        <Hero name="test " description="test2" url="test3" />
        <MythsItems myths={myths}/>
    </main>
    )
}

export const MythsPage = Page(Myths)