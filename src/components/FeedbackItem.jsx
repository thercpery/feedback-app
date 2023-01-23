import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import Card from './shared/Card';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  const { id, rating, text } = item;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default FeedbackItem;
