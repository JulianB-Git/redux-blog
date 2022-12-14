import React from "react";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import PostPage from "./features/posts/PostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PostsList/>} />
                <Route path="post">
                    <Route index element={<AddPostForm />} />
                    <Route path=":postId" element={<PostPage />} />
                    <Route path="edit/:postId" element={<EditPostForm />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App