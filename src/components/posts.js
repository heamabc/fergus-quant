import React, {Component} from "react";
import Page from './CommonComponents/PageTemplate/PageTemplate'
import Title from './CommonComponents/Title/Title'

import Posts from "./Post";
import postlist from "../posts.json";
import {Link} from "react-router-dom";
import Markdown from "react-markdown";
import {EntryWithLink} from "./CommonComponents/Entry/Entry";

class PostsPage extends Component {

    render() {
        let data = GetAllPosts()
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={'All Posts'}/>
                <EntryWithLinkLayout>
                    <GetAllPosts/>
                </EntryWithLinkLayout>
            </Page>
        )}}

const GetAllPosts = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    console.log("GetAllPosts")
    return (
        <div>
            {postlist.length &&
            postlist.map((post, i) => {
                return (

                    <div  key={i} >
                        <EntryWithLink
                            href={`/post/${post.id}`}
                            location={post.title}
                            date={post.date}
                            {/*
                                // post description
                                // adding description in .md file
                            */}
                            // description={des}
                        />
                    </div>

                )
            })
            }
        </div>
    )
}

export default PostsPage
