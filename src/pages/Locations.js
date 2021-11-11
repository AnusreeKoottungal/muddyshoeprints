import React from 'react';
import Content from '../content/CardContent';
import BlogCard from './BlogCard';

export default function Locations() {
    let contents = Content;
    return (
        <React.Fragment>
            {
                contents.map((content) => {
                    return <BlogCard content={content}></BlogCard>
                })
            }
        </React.Fragment>
    )
}
