import {useState,useEffect} from 'react'
import './Filter.css'

async function  getOptions(url){

return await fetch(url).then(
            response =>{
                return response.json()
            }
        ).then(
            data=>{
                return data
            }
        )
}

export function ProjectFilter({dispatch}){
    const [tags,setTags] = useState([]);
    const [search,setSearch] = useState('');
    const [tagsOptions, setTagsOptions] = useState([])

useEffect(() => {
    getOptions('/api/tags/').then(setTagsOptions)
}, [])
    return (
        <>
        <div className="filter flex-row jc-spaceb">
            <div className="parametres">
                <input className="p-5 pr-20 ml-10 font-14" value={search} onChange={(e)=>setSearch(e.target.value)}></input>    
                <select className="p-5 pr-20 ml-10 font-14" onChange={e=>setTags([...tags,e.target.value])}>
                    <option value="" disabled selected>All Tags</option>
                    {tagsOptions.map((item)=>
                        <option className="font-14" key={'tag_'+item.id} value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>
            
                <button class="btn-filter" onClick={()=>{
                    dispatch({ type: 'Filter',data:{search,tags:tags.join(','),page:1} })
                }
                }>Search</button>
            
        </div>
        <div className='flex-row column-gap-10 row-gap-10'>
            {tags.map(tag=>
                <span className="tag-element" key={'filter_tag_' +tag.id} onClick={() =>
                    setTags(prev => prev.filter(item => item !== tag))
                }>{tag}</span>)
            }
        </div>
        </>
    )
}