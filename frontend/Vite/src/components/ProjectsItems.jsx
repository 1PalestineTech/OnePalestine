import { Link } from 'react-router-dom';
import './ItemsContainer.css'


export function ProjectsItems({items}){
    return(
        <div className='items-container'>
        {items.map((item)=>(
           <div className="flex-column row-gap-20">
            <img src={item.image} />
            <div className="flex-column jc-spaceb  p-10">
             <div className="flex-column row-gap-10">
              <h4><Link to={item.link} className="container-link" >{item.title}</Link></h4>
              <p>{item.description}</p>
              </div>
               <div className='tags-container'>{item.tags.map(tag=><span className="tag-element" key={'project_tag_' +tag.id}>{tag}</span>)}</div>
            </div>
           </div>
        ))}
        </div>
        
    )

}