import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeamMemberList = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axios.get('/api/members/')
            .then(response => {
                setTeamMembers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the team members!', error);
            });
    }, []);

    return (
        <div>
            <h1>Team Members ({teamMembers.length})</h1>
            <ul>
                {teamMembers.map(member => (
                    <li key={member.id}>
                        <Link to={`/edit/${member.id}`}>
                            {member.first_name} {member.last_name} - {member.role === 'admin' ? 'Admin' : 'Regular'}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/add">Add Team Member</Link>
        </div>
    );
};

export default TeamMemberList;


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamMemberList = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axios.get('/api/members/')
            .then(response => {
                setTeamMembers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the team members!', error);
            });
    }, []);

    return (
        <div>
            <h1>Team Members ({teamMembers.length})</h1>
            <ul>
                {teamMembers.map(member => (
                    <li key={member.id}>
                        {member.first_name} {member.last_name} - {member.role === 'admin' ? 'Admin' : 'Regular'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamMemberList;
*/