import React from "react";

function ChildComponet({props}){
    const hobbiesArr = props.info.hobbies;

    return(
    <div>
        <h2>Name:{props.name}</h2>
        <h2>Age:{props.info.age}</h2>
        <h2>City:{props.info.city}</h2>
        <h2>Job:{props.info.job}</h2>
        <h2>Hobbies:{hobbiesArr.map((hobby)=> hobby +" ")}</h2>
    </div>)
}

export default ChildComponet;