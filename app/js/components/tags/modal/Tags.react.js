import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Tag from './Tag.react';

function getViewTags(tags, selectedTags, options, onTagClick) {
  let viewTags = [];
  let index = 0;
  let selectedStatus;
  let keys = Object.keys(tags);
  for (let i = 0; i < keys.length; i++) {
    selectedStatus = (selectedTags.indexOf(tags[keys[i]].name) === -1) ?
      '' : 'selected';
    index = (index >= options.length - 1) ? 0 : index + 1;
    viewTags.push(
      <Tag
        key={i}
        tag={tags[keys[i]] }
        index={index + 1}
        options={options}
        selectedStatus={selectedStatus}
        onTagClick={onTagClick}
      />
    );
  }
  return viewTags;
}

const Tags = ({tags, selectedTags, options, onTagClick}) => {
  return (
     <div className="main content">
       <div className="ui grid container">
        {tags && getViewTags(tags, selectedTags, options, onTagClick)}
       </div>
     </div>
   );
};

Tags.propTypes = {
  tags: PropTypes.object,
  selectedTags: PropTypes.array,
  options: PropTypes.array,
  onTagClick: PropTypes.func
};

export default Tags;
