
function handelSumarryClick(event){
    let el;
    if(event.target.tagName === "SUMMARY"){
    el =   event.target.querySelector(".plus")
    }
    else{
        el = event.target.parentElement.querySelector(".plus")
    }
    if(el.style.transform === 'rotateZ(45deg)'){
        el.style.transform = 'rotateZ(0deg)'
    }
    else{
         el.style.transform = 'rotateZ(45deg)'
        
    }
    
}

function MythItem({title,content}){
    return (
    <details>
        <summary className="flex-row text-left jc-spaceb w-100 ai-center" onClick={(e)=>handelSumarryClick(e)}><span>{title}</span><span className="plus"></span></summary>
        <div className="font-18 text-left pt-20" dangerouslySetInnerHTML={{ __html: content }}></div>
    </details>
    )
}

export function MythsItems({myths}){

    return(
        <div className="w-100 flex-column p-50 jc-center" >
            {
                myths.map(myth =><MythItem title={myth.title} content={myth.content} />)
            }
        </div>
    )

}