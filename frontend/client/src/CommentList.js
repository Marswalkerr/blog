import React from "react";

export default({ comments }) => {
    
    const renderedComments = comments.map(comment => {
        let content;

        if(comment.status === "Approved"){
            content = comment.content;
        }

        if(comment.status === "pending"){
            content = "This comment is awaiting moderation";
        }

        if(comment.status === "Rejected"){
            content = "This comment has been rejected";
        }

        return <li key={comment.id}>{content}</li>;
    });

    return <ul> {renderedComments} </ul>
};