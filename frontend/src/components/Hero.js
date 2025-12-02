

export function Hero({name,description,url}){
    
    const style={backgroundImage: 'linear-gradient(rgba(180,180,180,0.4), rgba(180,180,180,0.4)), url(" + url + ")'}
    return (
    <div className = "hero_section flex-column p-50 ai-center jc-spaceb w-100 text-center" style={style}>
        <div className ="flex-column p-50 ai-center jc-spaceb">
            <span className="font-50 mb-40 weight-700">{name}</span>
            <p className="font-24 w-70">{description}</p>
        </div>
        <div></div>
    </div>
    )
}