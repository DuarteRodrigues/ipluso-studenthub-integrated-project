/**
 * @file ProfileNewsListItem.tsx
 * @description Component to display a news item in the user's profile.
 * 
 * @component
 * @returns {JSX.Element} A list item displaying the news title and a link to the article
 */

// Import Packages
import React from "react";
import { Link } from "react-router-dom";

//Import Styles
import './ProfileInteractedListItem.css';


type ProfileInteractedListItemProps = {
    article: {
        _id: string;
        title: string;
        date: string;
    };
};

const ProfileInteractedListItem: React.FC<ProfileInteractedListItemProps> = ({ article }) => (
    <li>
        <strong >
            <Link to={`/news/article/${article._id}`} className="NewsLink">
                {article.title}
            </Link>
        </strong>
        <br />
        <span style={{ fontSize: "0.9em", color: "#888" }}>{article.date}</span>
    </li>
)

export default ProfileInteractedListItem;