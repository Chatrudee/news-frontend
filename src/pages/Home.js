import React from 'react'
import BookmarkButton from '../components/Button/BookmarkButton'
import NewsCard from '../components/NewCard/NewsCard'
import {useHistory , BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default function Home() {
    return (
        
        <div>
            <Router path="/allbookmark">
                <div className="header">
                    <div className="stories-header">Top stories</div>
                    <BookmarkButton />
                    <NewsCard/>
                </div>
            </Router>
        </div>  
    )
}
