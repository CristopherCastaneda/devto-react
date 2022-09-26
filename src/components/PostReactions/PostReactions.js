import React from 'react';
import HeartReaction from './HeartReaction/HeartReaction';
import SaveReaction from './SaveReaction/SaveReaction';
import ShowMoreReaction from './ShowMoreReaction/ShowMoreReaction';
import UnicornReaction from './UnicornReaction/UnicornReaction';
import styles from './PostReactions.module.scss';

const PostReactions = () => {
  return (
      <div className={`${styles.reactionsLeftContainer} p-3`}>
          <div className="reactions d-flex gap-3 flex-md-column">
            <HeartReaction />
            <UnicornReaction />
            <SaveReaction />
            <ShowMoreReaction />
          </div>
      </div>
  )
}

export default PostReactions