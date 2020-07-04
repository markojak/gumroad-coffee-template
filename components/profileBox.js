import React from 'react';

import '../styles/profile.scss';
import profileData from '../data.json'
import {getIcon} from '../config/function'


const ProfileBox = () => {
    return (
        <div className="profile">
            <div className="profile-head">
                <div className="profile-photo">
                    <img src="https://p193.p3.n0.cdn.getcloudapp.com/items/o0uvYmZx/marko.jpg?v=3786650f61a5057ad45a5ed754ccd2f8" alt="" />
                </div>
                <h2>{profileData.name}</h2>
                <small>{profileData.subtitle}</small>
                <p>
                    {profileData.about}
                </p>

                <ul>
                    {profileData.links.map((profile, key) => (
                        <li key={key}>
                            <a href={profile.link} target="_blank" rel="noopener norerferrer">
                                {getIcon(profile.type)}
                                <span>{profile.name}</span>
                            </a>
                        </li> 
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfileBox;
