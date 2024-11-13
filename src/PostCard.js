import React from 'react';
import './PostCard.css';

const PostCard = ({ title, image, content, adminName, createdAt }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString();

    return (
        <div className="post-card">
            <img src={image || "https://via.placeholder.com/150"} alt="Post" className="post-image" />
            <div className="post-content">
                <p className="post-author">{adminName}</p>
                <p className="post-date">{formattedDate} - 1 min read</p>
                <h3 className="post-title">{title.slice(0, 30)}...</h3>
                <p className="post-description">{content.slice(0, 150)}...</p>
            </div>
            <div className="post-footer">
                <span>0 <i className="far fa-comments"></i></span>
                <span>0 <i className="far fa-heart"></i></span>
            </div>
        </div>
    );
};

export default PostCard;
