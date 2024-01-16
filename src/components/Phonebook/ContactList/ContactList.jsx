

const ContactList = ({ items, deleteContact }) => {
    const elements = items.map(({ id, name, number }) =>
        <li key={id}>
            {name}: {number} <button onClick={()=>deleteContact(id)} type="button">Delete</button>
        </li>);
    return (
        <ul>
            {elements}
        </ul>
    );
};




export default ContactList;
