import {Page} from './Page'
import { Link } from 'react-router-dom';
import './404.css'
export function NoFound(){
return (
    <div className="no-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to Home</Link>
    </div>
)
}


export const NoFoundPage = Page(NoFound)