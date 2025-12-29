import {Hero} from '../components/Hero'
import { useParams } from 'react-router-dom';
import {Page} from './Page'

import {useState,useEffect} from 'react'


function Article(){
     const params = useParams(); 
  const id = params.id; 
    const [data,setData] = useState({})
    useEffect(()=>{

        fetch('/api/articles/'+id+'/' ).then(
            response =>{
                return response.json()
            }
        ).then(
            data=>{
                setData(data)
            }
        )
    },[])

return (
    <main className ="flex-column  w-100">
    <Hero name={data.title}  />
    
    <div dangerouslySetInnerHTML={{ __html: data.content }}>

    </div>
    </main>
)
}


export const ArticlePage = Page(Article)