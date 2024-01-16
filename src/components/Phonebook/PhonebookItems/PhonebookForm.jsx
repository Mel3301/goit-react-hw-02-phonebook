import styled from "styled-components";
import { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
    name: "",
    number: "",
}

class PhonebookForm extends Component {
    state = {
        ...INITIAL_STATE
    }
    
    nameId = nanoid();
    numberId = nanoid();


    handleChange = (evt) => {
        const { name, value } = evt.target;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        this.props.onSubmit({...this.state})
        this.setState({
            ...INITIAL_STATE,
        })
    };







    
    render() {
        const { nameId, numberId, handleSubmit, handleChange } = this;
        const { name, number } = this.state;

        return (
            <FormStyle onSubmit={handleSubmit}>
                <h1>Phonebook</h1>
                <div>
                    <label htmlFor={nameId}>Name</label>
                    <input value={name} onChange={handleChange} id={nameId} placeholder="Name" type="text" name="name" required/>
                </div>
                <div>
                    <label htmlFor={numberId}>Number</label>
                    <input value={number} onChange={handleChange} id={numberId} placeholder="Phone number" type="tel" name="number" required/>
                </div>
                <button type="submit">Add contact</button>
            </FormStyle>
            )
        }
};


/* Styles */

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    border: 1px solid;
    border-radius: 25px;
    gap: 20px;
    padding: 20px 0;
    margin: 40px auto;


    div{
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
    }

    label{
    }

    input{
    }

    button {
        width: 100px;
        height: 24px;
    }
`

export default PhonebookForm;