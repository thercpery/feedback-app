import React from 'react';
import { PropTypes } from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}  
    </div>
  );
}

FeedbackList.defaultProps = {
  feedback: [],
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
