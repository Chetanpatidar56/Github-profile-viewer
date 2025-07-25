import { useEffect, useState } from "react";

function Body(){
    const [profile, setprofile]=useState([]);

    async function profilegenerator() {
        const response=await fetch("https://api.github.com/users?per_page=20");
        const data= await response.json();

        setprofile(data);
        console.log(data);
        
    }

    useEffect(()=>{
        profilegenerator();
    },[]);

    return(
        <div className="First">
            {
              profile.map((value)=>{
                return(
                    
                        <div key={value.id} className="second">
                            <img src={value.avatar_url}></img>
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="blank">Profile</a>
                        </div>
                )
              })
            }
        </div>
    )
}
export default Body;