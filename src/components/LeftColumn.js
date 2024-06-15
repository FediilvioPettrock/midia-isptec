import React from 'react';
import { LeftColumn as StyledLeftColumn } from '../styles/LeftColumn';
import LeftNavbar from './LeftNavbar';
import { SlActionRedo } from "react-icons/sl";
import { BsCollectionPlay } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { LuShare2 } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiUserAddLine } from "react-icons/ri";
import { RiPlayList2Line } from "react-icons/ri";

const LeftColumn = () => {
    const leftNavItems1 = [
        {
            text: 'Create new album',
            icon: <BsCollectionPlay />,
        },
        {
            text: 'Create new group',
            icon: <GrGroup />,
        },
        {
            text: 'Add user',
            icon: <RiUserAddLine />,
        }
    ];
    const leftNavItems2 = [
        {
            text: 'Playlists',
            icon: <RiPlayList2Line />,
        },
        {
            text: 'Share',
            icon: <LuShare2 />,
        },
    ];
    const leftNavItems3 = [
        {
            text: 'My profile',
            icon: <CgProfile />,
        },
        {
            text: 'Settings',
            icon: <IoSettingsOutline />,
        },
        {
            text: 'Log out',
            icon: <RiLogoutCircleLine />,
        }
    ];

    return (
        <StyledLeftColumn>
            <LeftNavbar items={leftNavItems1} />
            <LeftNavbar items={leftNavItems2} />
            <LeftNavbar items={leftNavItems3} />
        </StyledLeftColumn>
    );
};

export default LeftColumn;
