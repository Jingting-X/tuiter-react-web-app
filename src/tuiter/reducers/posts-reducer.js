import { createSlice } from "@reduxjs/toolkit";
import posts from '../tuits/tuits.json';

const postsSlice = createSlice({
    name: 'posts',
    initialState: posts
});

export default postsSlice.reducer;