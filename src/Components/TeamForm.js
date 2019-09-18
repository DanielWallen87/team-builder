import React, { useState } from "react";

const TeamForm = props => {
    const [member, setMember] = useState({ name: "", superpower: ""}); // {} and quotes because it's an object containing strings
    
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value}); // grabs information as it's being typed into the form
    };

    const submitForm = event => {
        event.preventDefault(); // prevents default reloading of page upon submission
        const newMember = { // This is a variable for the member created by the user
            ...member,
            id: Date.now() // sets "ID" to the current date
        };
        props.addNewMember(newMember); // "props" passed down from addNewMember in App.js
        setMember({name: "", superpower: ""}); // surrounds the input in quotes since it should be a string
    };

    return (
        <form onSubmit={submitForm}> 
            <label className="form-breaks" htmlFor="name">What's Your Superhero Name?</label>
            {/*Placeholder shows text before typing. Value matches the new member created by user. onChange makes submission possible*/}
            <input  type="text"
                    name="name"
                    placeholder="Secret Alias"
                    value={member.name}
                    onChange={changeHandler}
                    className="form-breaks"
            />
            {/* Name value should match the key (name.member) used in the object */}
            <label className="form-breaks" htmlFor="superpower">What's Your Most Impressive Superpower?</label>
            <select name="superpower" value={member.superpower} onChange={changeHandler} className="form-breaks">
                <option value="Fly like a bird">Flight</option>
                <option value="Buy cool weapons">Wealth</option>
                <option value="Stronger than a T-Rex">Super Strength</option>
                <option value="Faster than a speeding bullet">Super Speed</option>
                <option value="Can communicate with fish">Speak to Animals</option>
            </select>

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default TeamForm;