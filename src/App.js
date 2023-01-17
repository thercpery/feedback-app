import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedback])
  };

	return (
		<Router>
			<Header />
			<div className="container">
        <Routes>
          <Route 
            exact 
            path='/' 
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList 
                  feedback={feedback} 
                  handleDelete={deleteFeedback}
                />
              </>
            }>
          </Route>
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/post/*' element={<Post />} />
        </Routes>
			</div>
      <AboutIconLink/>
		</Router>
	)
}

export default App;
