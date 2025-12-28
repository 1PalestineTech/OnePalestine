import './OurImpact.css'

function ImpactElement({number,url,description}){
    
    return(
        <div className="flex-column text-center row-gap-10">
          <img className="as-center" src={url} alt="Icon"/>
          <span className="font-18 weight-700">{number}</span>
          <p  className="font-16 weight-500 ellipsis">{description}</p>
      </div>
    )
}
export function OurImpact(){
    const impact_data=[{
        number:"300k+ Subreddit Followers",
        description:"A forum for Discussing the Palestinian Cause, news, and experience.",
        url:"/static/Pages/images/reddit.png",
    },{
        number:"19k+ X Community",
        description:"Where activists amplify the Palestinian voice.",
        url:"/static/Pages/images/x.png",
    },{
        number:"1.5K+ Answers on Quora",
        description:"Dismantling zionists myths.",
        url:"/static/Pages/images/quora.png",
    },{
        number:"10.2K Members on Discord",
        description:"Working together on advocacy efforts.",
        url:"/static/Pages/images/discord.png",
    },{
        number:"35+",
        description:"Volunteers For Palestine vetted projects - improving Palestinian lives.",
        url:"/static/Pages/images/volunteer.png",
    },{
        number:"8+",
        description:"Active 1Palestine Efforts - Opportunities to be involved.",
        url:"/static/Pages/images/project.png",
    },]
    return(
    <div className="p-50 flex-column jc-center ai-center row-gap-30">
    <div className="mt-50"><span className="font-30 weight-700" >Our Impact So Far</span></div>
    <div className="impact-container">
        {impact_data.map(impact=><ImpactElement number={impact.number} description={impact.description} url={impact.url}/>)}
    </div>
  </div>
  )
}
