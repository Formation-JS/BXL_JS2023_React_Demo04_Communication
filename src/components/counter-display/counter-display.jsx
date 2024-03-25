import PropTypes from 'prop-types';

const CounterDisplay = ({count}) => {

    return (
        <>
            <p>Valeur : {count}</p>
        </>
    );
};

CounterDisplay.propTypes = {
    count: PropTypes.number.isRequired
};

export default CounterDisplay;