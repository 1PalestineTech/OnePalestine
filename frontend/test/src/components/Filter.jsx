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

export function Filter({dispatch}){
    const [tags,setTags] = useState([]);
    const [category,setCategory] = useState('');
    const [search,setSearch] = useState('');
    const [categories, setCategories] = useState([])
    const [tagsOptions, setTagsOptions] = useState([])

useEffect(() => {
    getOptions('/api/categories/').then(setCategories)
    getOptions('/api/tags/').then(setTagsOptions)
}, [])
    return (
        <>
        <div className="filter flex-row jc-spaceb">
            <div className="parametres">
                <input className="p-5 pr-20 ml-10 font-14" value={search} onChange={(e)=>setSearch(e.value)}></input>    
                <select className="p-5 pr-20 ml-10 font-14" value ={category} onChange={e=>setCategory(e.target.value)}>
                    <option value="">All categories</option>
                    {categories.map((item)=>
                        <option className="font-14" key={'category_'+item.id} value={item.id}>{item.name}</option>
                    )}
                </select>
                <select className="p-5 pr-20 ml-10 font-14" onChange={e=>setTags([...tags,e.target.value])}>
                    <option value="" disabled selected>All Tags</option>
                    {tagsOptions.map((item)=>
                        <option className="font-14" key={'tag_'+item.id} value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>
            
                <button class="btn-filter" onClick={()=>{
                    dispatch({ type: 'Filter',data:{search,category,tags:tags.join(','),page:1} })
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