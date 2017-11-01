import React, { Component } from 'react';

var firebase = require('firebase');
var uuid = require('uuid');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBH1X3OEx7_O5aV04JhmPezULuBOVgiD8k",
    authDomain: "usurvey-452.firebaseapp.com",
    databaseURL: "https://usurvey-452.firebaseio.com",
    projectId: "usurvey-452",
    storageBucket: "usurvey-452.appspot.com",
    messagingSenderId: "964790265836"
  };
  firebase.initializeApp(config);

class Usurvey extends Component {

	NameForm (event) {
		var studentName = this.refs.name.value;
		this.setState({studentName});
	}

	constructor(props) {
		super(props);

		this.state = {
			uid: uuid.v1(),
		
			studentName : '',
		
			answers : {
				answer1: '',
				answer2: '',
				answer3: ''
			},

			isSubmitted: false
		};

		this.NameForm = this.NameForm.bind(this);

	}


	render() {
		var studentName;
		var questions;

		if (this.state.studentName === '' && this.state.isSubmitted === false) {
				studentName = <div> 
				<h1> Please LET us know your name</h1>
					<form onSubmit = {this.NameForm}> 
						<input className="nameInput" type="text" placeholder="Enter your Name" ref="name" />
					</form>
				</div>;
				questions= ''
		} else if(this.state.studentName !== '' && this.state.isSubmitted === false) {

			studentName = <div> 
					<h2> Welcome {this.state.studentName}</h2>
			</div>

			questions = <div> Which Courses do you like?</div>

		}
		return (
			<div>

				{studentName}

				----------------------------------------------------

				{questions}
			</div>
			);
	}
}


export default Usurvey;