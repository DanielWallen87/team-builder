import React, { useState } from "react";

const TeamForm = props => {
    const [member, setMember] = useState({ name: "", superpower: ""});
    
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setMember({name: "", superpower: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label className="form-breaks" htmlFor="name">What's Your Superhero Name?</label>
            <input  type="text"
                    name="name"
                    placeholder="Secret Alias"
                    value={member.name}
                    onChange={changeHandler}
                    className="form-breaks"
            />

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