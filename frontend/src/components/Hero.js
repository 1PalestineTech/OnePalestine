
import './Hero.css'
export function Hero({name,description,url="media/images/default_cover.jpg"}){
    
    const style={backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(' + url + ')'}
    return (
    <div className = "hero_section flex-column p-50 ai-center jc-spaceb w-100 text-center" style={style}>
        <div className ="flex-column p-50 ai-center jc-spaceb">
            <h3 className="font-50 mb-40 weight-700">{name}</h3>
            <p>{description}</p>
        </div>
        <div></div>
    </div>
    )
}