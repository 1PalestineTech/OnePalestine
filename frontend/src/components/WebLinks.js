
import { Link } from 'react-router-dom';


export function WebLinks(){
        const links = [   
        {
        url:'/history',
        label:'History'
        },
        {
        url:'/articles',
        label:'Articles'
        },
        {
        url:'/myths',
        label:'Zionist Myths'
        },
        {
        url:'/projects',
        label:'Projects'
        },
        {
        url:'/projects',
        label:'Resources'
        },
        {
        url:'/About',
        label:'About Us'
        }
    ]
    return(
        links.map(link =>(
                <span className='text-left'><Link to={link.url}>{ link.label }</Link></span>
            ))
            
    )
}