import { useState } from "react";
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [oem, setOem] = useState('');
    const [notes, setNotes] = useState('');
    
    function handleChange(e) {
        const { name, value } = e.target;
        
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            case 'oem':
                setOem(value);
                break;
            case 'notes':
                setNotes(value);
                break;
            
            default:
                return
        }
    };
    
    function handleSubmit (e){
        e.preventDefault();

        onSubmit({ name, number, oem, notes});
        reset();
    };
    
    function reset () {
        setName('');
        setNumber('');
        setOem('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className={s.label}>Title
                <input               
                    className={s.input}
                    placeholder={name}
                    // type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>
                <label className={s.label}>Manufactor number
                    <input
                    className={s.input}
                    // type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label>
            <label className={s.label}>OEM number
                    <input
                    className={s.input}
                    // type="tel"
                    name="oem"
                    value={oem}
                    onChange={handleChange}
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    // required
                    />
            </label>
                        <label className={s.label}>Notes
                    <input
                    className={s.input}
                    // type="tel"
                    name="notes"
                    value={notes}
                    onChange={handleChange}
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    // required
                    />
                </label>
                <button
                    className={s.button}
                    type="submit">Add part</button>
            </form>
        )
    }

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}