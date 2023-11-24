import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import ContentList from './components/ContentList';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

function App() {
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
  );
}

export default App;

