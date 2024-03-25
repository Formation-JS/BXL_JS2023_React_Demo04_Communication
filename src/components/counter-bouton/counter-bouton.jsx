import PropTypes from 'prop-types';

const CounterButton = ({ step, onAction }) => {

    const handleIncr = () => {
        onAction('incr', step);
    };

    const handleDecr = () => {
        onAction('decr', step);
    };

    return (
        <div>
            <button onClick={handleIncr}>+{step}</button>
            <button onClick={handleDecr}>-{step}</button>
        </div>
    );
};

CounterButton.defaultProps = {
    step: 1,
    onAction: () => {} // NOOP
}

CounterButton.propTypes = {
    step: PropTypes.number,
    onAction: PropTypes.func
}

export default CounterButton;