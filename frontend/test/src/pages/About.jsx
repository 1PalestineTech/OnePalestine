import {Hero} from '../components/Hero'
import {Page} from './Page'
import { OurImpact } from '../components/OurImpact'
import './About.css'
import { Statement } from '../components/Statement'
function About(){
    return(

        <main className ="flex-column row-gap-50  w-100">
            <Hero name="About Us" description="1Palestine is a global movement dedicated to Palestinian liberation through the power of digital advocacy combating zionist propaganda and promoting awareness of the Palestinian truth." />
            <div className='About-message'>
                <p>
                1Palestine is a global hub for activism, education, and empowerment. We unite Palestinians and allies through authentic narratives rooted in history and culture. Our talented team creates engaging content across diverse platforms that preserves heritage, remembers forgotten villages, honors martyrs, and dispels myths. We tell the full story of Palestinian identity, history, and resilience; illuminating the path toward freedom.
                </p>
            
            </div>
            <OurImpact />
            <Statement />
        </main>
    )
}

export const AboutPage = Page(About)