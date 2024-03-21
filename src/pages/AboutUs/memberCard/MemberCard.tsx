import React from 'react';
import s from './MemberCard.module.scss'
import facebook from '../../../Assets/image/AboutUs/Facebook.png'
import twitter from '../../../Assets/image/AboutUs/Twitter.png';
import instagram from '../../../Assets/image/AboutUs/Instagram.png';
import { TeamMember } from '../../../Store/types';



interface Props {
    member: TeamMember;
}

const TeamMemberCard: React.FC<Props> = ({ member }) => {
    return (
        <div className={s.card}>
            <img src={member.team_leordev_image} alt={member.team_leordev_name} />

            <h6>{member.team_leordev_name}</h6>
            <p>{member.team_leordev_description}</p>
            <div className={s.card_socials}>
                {member.team_leordev_url_1 && (
                    <a href={member.team_leordev_url_1} target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram icon" />
                    </a>
                )}
                {member.team_leordev_url_2 && (
                    <a href={member.team_leordev_url_2} target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook icon" />
                    </a>
                )}
                {member.team_leordev_url_3 && (
                    <a href={member.team_leordev_url_3} target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter icon" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamMemberCard;
