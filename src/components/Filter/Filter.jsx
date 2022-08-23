import PropTypes from 'prop-types';
import s from './Filter.module.css';


export default function Filter({ value, onChange }) {
    return (
        <label className={s.label}>
            Find part by value
            <input
                className={s.input}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}