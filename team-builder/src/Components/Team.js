import React from "react";

const Team = props => {
    return (
        <div className="team-members">
            {props.team.map(member => {
                return (
                    <div className="team-member" key={member.id}>
                        <h2>{member.name}</h2>
                        <p>{member.superpower}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;