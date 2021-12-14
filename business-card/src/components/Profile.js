import React from 'react'

export default function Profile() {
    return (
        <div className="Profile">
            <img src={require('../img/profile.jpg').default} alt='sam' />
        </div>
    );
};