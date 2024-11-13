import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './Forum.css';
import PostCard from './PostCard';

const Forum = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8087/api/v1/home/all');
                setPosts(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <main className="forum">
            <h1>Our Forum</h1>
            <div className="posts-header">
                <p>All posts</p>
                <i className="fas fa-search search-icon"></i>
            </div>
            <div className="post-grid">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        adminName={post.nameAdmin}
                        createdAt={post.createdAt}
                    />
                ))}
            </div>
        </main>
    );
};

export default Forum;
