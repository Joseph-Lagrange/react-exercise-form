import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

    state = {
        name: '',
        gender: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                    value={this.state.name}/>
            </label>
            <label>
                Gender:
                <input
                    type='text'
                    name='gender'
                    onChange={this.handleChange}
                    value={this.state.gender}
                    list='sexlist'/>
                <datalist id="sexlist">
                    <option>Male</option>
                    <option>Female</option>
                </datalist>
            </label>
            <label>
                Description:
                <input
                    type='text'
                    name='description'
                    onChange={this.handleChange}
                    value={this.state.description}/>
            </label>
            <input
                className='submit'
                type='submit'
                value='Submit'
                disabled={!this.state.name || !this.state.gender || !this.state.description}/>
        </form>
    }
}

export default Form;