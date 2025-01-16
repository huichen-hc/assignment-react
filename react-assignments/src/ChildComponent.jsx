import React from "react";

function ChildComponent({person}){
    const hobbiesArr = person.info.hobbies;

    return(
    <div>
        <h2>Name:{person.name}</h2>
        <h2>Age:{person.info.age}</h2>
        <h2>City:{person.info.city}</h2>
        <h2>Job:{person.info.job}</h2>
        <h2>Hobbies:{hobbiesArr.map((hobby)=> hobby +" ")}</h2>
    </div>)
}

export default ChildComponent;