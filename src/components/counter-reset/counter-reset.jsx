import PropTypes from 'prop-types';

const CounterReset = ({ onReset, isActive }) => {

    return (
        <button onClick={(e) => onReset()} disabled={!isActive} >
            Reset
        </button>
    );
};

CounterReset.defaultProps = {
    onReset: () => {} // NOOP
}

CounterReset.propTypes = {
    onReset: PropTypes.func
}

export default CounterReset;