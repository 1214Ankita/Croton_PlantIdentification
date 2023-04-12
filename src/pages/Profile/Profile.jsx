import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
        };
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Required field";
        }
        //Date of birth
        if (!fields["DOB"]) {
            formIsValid = false;
            errors["DOB"] = "Required field";
        }

        //number
        if (!fields["number"]) {
            formIsValid = false;
            errors["number"] = "Required field";
        }
        else if (fields["number"].length !== 10) {
            formIsValid = false;
            errors["number"] = "Please enter 10-digit valid phone number.";
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fields.email)) {
            errors["email"] = "Invalid Email";
        }

        //Password
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        } else if (!/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,32}$/.test(fields.password)) {
            errors["password"] = "Invalid Password";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    formSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Done")
        }
        else {
            alert("Form has errors.");
        }
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    render() {
        return (

            <>
                <div className='main-reg'>
                    <div class="main">
                        <div class="container">
                        </div>
                        <div className='prof-usericon'><img className='prof-usericon' src='https://thumbs.dreamstime.com/b/cute-happy-smiling-plant-vector-flat-cartoon-illustration-icon-design-isolated-white-background-plant-pot-houseplant-concept-157216265.jpg' alt="profile avatar" /></div>

                        <div class="container2">
                            <div class="form">
                                <h3 class="prof-title">User Profile</h3>
                                <div className='conta'>
                                    <label for="name" class="conta-label">Name: Ankita</label><br />
                                    <label for="name" class="conta-label">Birth Date: 14/12/2002</label><br />
                                    <label for="name" class="conta-label">Mobile: 1234567890</label><br />
                                    <label for="name" class="conta-label">Email: ankita.bd@somaiya.edu </label><br />
                                </div>
                                <img src='https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743__480.jpg'/>
                                <form name="form" class="form" >
                                    <label for="name" class="label">Name:</label><br />
                                    <input type="text" id="name" name="name" class="input" onChange={this.handleChange.bind(this, "name")}
                                        value={this.state.fields["name"]} /><br />
                                    <span className='form-span' style={{ color: "red" }}>{this.state.errors["name"]}</span><br />

                                    <label for="DOB" class="label">Date of Birth:</label><br />
                                    <input type="date" id="DOB" name="DOB" class="input" max="2004-01-01" onChange={this.handleChange.bind(this, "DOB")}
                                        value={this.state.fields["DOB"]} /><br />
                                    <span className='form-span' style={{ color: "red" }}>{this.state.errors["DOB"]}</span><br />

                                    <label for="number" class="label">Mobile:</label><br />
                                    <input type="number" id="number" name="number" class="input" onChange={this.handleChange.bind(this, "number")}
                                        value={this.state.fields["number"]} /><br />
                                    <span className='form-span' style={{ color: "red" }}>{this.state.errors["number"]}</span><br />

                                    <label for="email" class="label">Email ID:</label><br />
                                    <input type="email" id="email" name="email" class="input" onChange={this.handleChange.bind(this, "email")}
                                        value={this.state.fields["email"]} /><br />
                                    <span className='form-span' style={{ color: "red" }}>{this.state.errors["email"]}</span><br />

                                    <button class="prof-btn" onClick={this.formSubmit.bind(this)}>Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }

}
const mapDispatchToProps = dispatch => ({ dispatch })
export default connect(null, mapDispatchToProps)(Profile);