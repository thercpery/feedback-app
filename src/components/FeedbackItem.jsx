import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {
  const { id, rating, text } = item;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func
};

export default FeedbackItem;
