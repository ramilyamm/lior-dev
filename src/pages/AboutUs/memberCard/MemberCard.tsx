import React from 'react';
import s from './MemberCard.module.scss'
import { TeamMember } from '../../../../../../lior_dev/lior-dev/src/Store/types';
import facebook from '../../../Assets/image/AboutUs/Facebook.png'
import twitter from '../../../Assets/image/AboutUs/Twitter.png';
import instagram from '../../../Assets/image/AboutUs/Instagram.png';



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
                {member.team_leordev_url_1 && <img src={instagram} alt="Facebook icon" />}
                {member.team_leordev_url_2 && <img src={facebook} alt="Twitter icon" />}
                {member.team_leordev_url_3 && <img src={twitter} alt="Instagram icon" />}
            </div>
        </div>
    );
};

export default TeamMemberCard;
