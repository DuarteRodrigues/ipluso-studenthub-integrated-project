/**
 * @file ProfileNewsList.tsx
 * @description Component that displays a list of news articles interacted with by the user.
 * 
 * @component
 * @returns {JSX.Element} A list of news articles with links to their respective pages.
 */

// Import Packages
import React from "react";

// Import Components
import ProfileInteractedListItem from '../ProfileInteractedListItem/ProfileInteractedListItem.tsx';

// Import Styles
import './ProfileInteractedList.css';

type ProfileInteractedListProps = {
    items: Array <{
        _id: string;
        title: string;
        date: string; 
    }>;
    emptyMessage?: string; // Optional message to display when there are no items
};

const ProfileInteractedList: React.FC<ProfileInteractedListProps> = ({ items, emptyMessage = "Não existem itens marcados com interesse." }) => {
    return (
        <ul className="ProfileInteractedList">
            {items.length === 0 ? (
                <li style={{ color: "#888", fontStyle: "italic" }}>{emptyMessage}</li>
            ) : (
                items.map(item => (
                    <ProfileInteractedListItem key={item._id} article={item} />
                ))
            )}
        </ul>
    );
}

export default ProfileInteractedList