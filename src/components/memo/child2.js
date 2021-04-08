import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Child2 = props => {
    console.log('child2 rendering')
    const {count, uơdateCounter} = props;
    return (
        <div>
            child {count}
            <button onClick={uơdateCounter}>click</button>
        </div>
    );
};

Child2.propTypes = {

};

export default Child2;