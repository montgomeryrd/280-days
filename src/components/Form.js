import { useState } from 'react';

const Form = ({ setData }) => {
    const [username, setUsername] = useState('');
    const [mom, setMom] = useState('');
    const [day, setDay] = useState('');

    const date = new Date();

    const handleSubmit = e => {
        e.preventDefault();
        setData({ username: username, mom: mom, day: day, date: date });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username-input"></label>           
            <input
                id="username-input"
                name="username-input"
                type="text"
                maxLength="30"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <label htmlFor="mom-input"></label>           
            <input
                id="mom-input"
                name="mom-input"
                type="text"
                maxLength="30"
                required
                value={mom}
                onChange={e => setMom(e.target.value)}
            />

            <label htmlFor="day-input"></label>           
            <input
                id="day-input"
                name="day-input"
                type="number"
                min="1"
                max="280"
                required
                value={day}
                onChange={e => setDay(e.target.value)}
            />

            <input type="submit" onSubmit={handleSubmit} />
        </form>
    )
}

export default Form;