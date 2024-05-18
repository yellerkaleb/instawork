import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTeamMember = () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('regular');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/members/${id}/`)
            .then(response => {
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setPhoneNumber(response.data.phone_number);
                setEmail(response.data.email);
                setRole(response.data.role);
            })
            .catch(error => {
                console.error('There was an error fetching the team member!', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/members/${id}/`, {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            role: role,
        })
        .then(response => {
            navigate('/');
        })
        .catch(error => {
            console.error('There was an error updating the team member!', error);
        });
    };

    const handleDelete = () => {
        axios.delete(`/api/members/${id}/`)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error deleting the team member!', error);
            });
    };

    return (
        <div>
            <h1>Edit Team Member</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="regular">Regular</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <br />
                <button type="submit">Save</button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    );
};

export default EditTeamMember;
