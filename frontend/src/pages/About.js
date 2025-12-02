import {Hero} from '../components/Hero'
import {Page} from './Page'
import { OurImpact } from '../components/OurImpact'

import { Statement } from '../components/Statement'
function About(){
    return(

        <main class ="flex-column row-gap-50  w-100">
            <Hero name="About Us" description="1Palestine is a global movement dedicated to Palestinian liberation through the power of digital advocacy combating zionist propaganda and promoting awareness of the Palestinian truth." />
            <OurImpact />
            <Statement />
        </main>
    )
}

export const AboutPage = Page(About)