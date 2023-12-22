import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserProfile = () => {
    const { userProfile, setUserProfile } = useContext(UserContext);
    return (
        <div>
            <h2>User Profile</h2>
        </div>
    );
};

export default UserProfile;