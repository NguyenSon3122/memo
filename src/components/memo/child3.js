import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Child3 = props => {
    console.log('child3 rendering')

    return (
        <div>
            child
        </div>
    );
};

Child3.propTypes = {

};

export default memo(Child3);