import post from './post.js';
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
            <ur class='list-group'>
            ${post.map(p => {
        return (PostItem(p))
    }).join('')}
    </ur>
    `)
}
export default PostList;