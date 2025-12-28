import { Link } from 'react-router-dom';

function HistoryItem({date,title,description,link}){
    return(
        <div className="blank flex-column row-gap-10">
            <div className="font-16">{date}</div>
            <div className="font-18 weight-700">{title}</div>
            <p>{description}</p>
            <div><Link to={link} className="weight-700 readMore" >Read More</Link></div>
        </div>
    )

}

export function HistoryItems({items,reversed=true}){
    return(
        
        items.map((item)=>(
            <>
            {reversed && <div className="blank"></div>}
            <HistoryItem date={item.date} title={item.title} description={item.description} link={item.link}/>
            {!reversed && <div className="blank"></div>}
            </>
        ))
        
    )

}