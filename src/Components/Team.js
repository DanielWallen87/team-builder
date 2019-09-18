import React from "react";
// import Link from "react-router-dom";

const Team = props => { 
    return (
        <div className="team-members">
            {/* Maps through the team array, which includes both data.js and info submitted by user on the form, and publishes the info*/}
            {props.team.map(member => { 
                return (
                    <div className="team-member" key={member.id}>
                        <h2>{member.name}</h2>
                        <p>{member.superpower}</p>
                        {/* <Link to={`/edit/${member.id}`}>Edit</Link> */}
                    </div>
                );
            })}
        </div>
    );
};

export default Team;