import {Hero} from '../components/Hero'
import {ProjectFilter} from '../components/ProjectFilter'
import {Page} from './Page'
import {Loading} from '../components/Loading'
import {useState,useEffect,useReducer} from 'react'
import {ProjectsItems} from '../components/ProjectsItems'




function urlReducer(state, action) {
  switch (action.type) {
    case 'Filter':
      return { ...action.data };
    case 'Next':
      return { ...state,page:(parseInt(state.page)+1).toString() };
      case 'Previous':
      return { ...state,page:(parseInt(state.page)-1).toString() };
    default:
      return state; 
  }
}


function Projects(){
    const [state, dispatch] = useReducer(urlReducer, { page: '1',tags:'',search:''  });
    const url = '/api/projects/?';
    const [loading, setLoading] = useState(true)
    const [projects,setProjects] = useState({})
    useEffect(()=>{
        let queries = [];
        state.page !== '' && queries.push('page=' + state.page);
        state.search !== '' && queries.push('search=' + state.search);
        state.tags !== '' && queries.push('tags=' + state.tags);
        fetch(url + queries.join('&') ).then(
            response =>{
                return response.json()
            }
        ).then(
            data=>{
                setProjects(data)
                setLoading(false)
            }
        )
    },[state])

return (
    <main className ="flex-column  w-100">
    <Hero name="Active Projects" description="" />
    
    <div className="flex-column row-gap-30 m-20 w-90">
        <ProjectFilter dispatch={dispatch} />
        {loading ? <Loading />:<ProjectsItems items={projects.results}/>}
        <div className='flex-row jc-center column-gap-10'>

            {projects.previous ?<button className='btn-filter' onClick={()=>{dispatch({type: 'Previous'})}}>Previous</button>:<></>}
            {projects.next ?<button className='btn-filter' onClick={()=>{dispatch({type: 'Next'})}}>Next</button>:<></>}
        </div>
    </div>
    </main>
)
}


export const ProjectsPage = Page(Projects)