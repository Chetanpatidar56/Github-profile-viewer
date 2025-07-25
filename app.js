import react,{useState, useEffect} from 'react';
import Reactdom from 'react-dom/client';
import Header from './component/header';
import Body from './component/body';

function Githubprofile(){

    
    
    return(
        <div>
        <Header></Header>
        <Body></Body>
       </div>
    )
}
Reactdom.createRoot(document.getElementById('root')).render(<Githubprofile></Githubprofile>);
