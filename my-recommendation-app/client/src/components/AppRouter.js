import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import UserProfile from './UserProfile';
import ContentList from './ContentList';
import FeedbackForm from './FeedbackForm';
import Footer from './Footer';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/feedback" element={<FeedbackForm />} />
                <Route path="/" element={<ContentList />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRouter;