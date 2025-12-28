import {Hero} from '../components/Hero'
import {Filter} from '../components/Filter'
//import './Articles.css'
import {Page} from './Page'
import {Loading} from '../components/Loading'
import {useState,useEffect,useReducer} from 'react'





function urlReducer(state, action) {
  switch (action.type) {
    case 'Filter':
      return { ...action.data };
    case 'Page':
      return { ...state,page:action.page };
    default:
      return state; 
  }
}


function Articles(){
    const [state, dispatch] = useReducer(urlReducer, { page: '',category: '',tags:'',search:''  });
    const url = '/api/articles/?';
    const [loading, setLoading] = useState(true)
    const [articles,setArticles] = useState({})
    useEffect(()=>{
        let queries = [];
        state.page !== '' && queries.push('page=' + state.page);
        state.search !== '' && queries.push('search=' + state.search);
        state.tags !== '' && queries.push('tags=' + state.tags);
        state.category !== '' && queries.push('category=' + state.category);
        fetch(url + queries.join('&') ).then(
            response =>{
                return response.json()
            }
        ).then(
            data=>{
                setArticles(data)
                setLoading(false)
            }
        )
    },[state])

return (
    <main className ="flex-column  w-100">
    <Hero name="Our Articles" description="" />
    
    <div className="m-20 w-90">
        <Filter dispatch={dispatch} />
        {loading ? <Loading />:<article></article>}
    </div>
    </main>
)
}


export const ArticlesPage = Page(Articles)