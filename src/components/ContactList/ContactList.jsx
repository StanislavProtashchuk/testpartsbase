import PropTypes from 'prop-types';
import s from './ContactList.module.css'

export default function ContactList ({ filteredContacts, deleteContact }) {
    return (
        <ul >
        {filteredContacts.map(({ name, number, oem, notes, id }) => {
            return (
                <li className={s.list} key={id}>
                    <div className={s.item}>
                        <h2 className={s.title}>Title:</h2>
                        <p className={s.value}>{name}</p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title}>MPN:</h2>
                        <p className={s.value}>{number}</p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title}>OEM:</h2>
                        <p className={s.value}>{oem}</p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title}>Notes:</h2>
                        <p className={s.value}>{notes}</p>
                    </div>    
                    <button className={s.button} type='button' id={id} onClick={() => deleteContact(id)}>Delete</button>
                </li>
        )})}
        </ul>
    )
};

ContactList.propTypes = {
    filteredContacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}