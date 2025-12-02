import {Hero} from '../components/Hero'
import { HistoryItems } from '../components/HistoryItems'
import './History.css'
import {Page} from './Page'



function History(){
    const left=[{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },]
    const right=[{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },{
        date:"aaaaa",
        title:"faf",
        description:"j j oj oij ojoj o jo jo jo jo",
        link:"afafafafa"
    },]
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