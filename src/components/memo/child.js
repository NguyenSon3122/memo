import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Child = props => {
    console.log('child rendering')
    const {count, updateCount} = props;
    return (
        <div>
            child {count}
            <button onClick={updateCount}>click</button>
        </div>
    );
};

Child.propTypes = {

};

export default memo(Child);