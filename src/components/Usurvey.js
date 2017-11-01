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

	answerSelected(event) {
		var answers = this.state.answers;
		if (event.target.name === 'answer1') {
			answers.answer1 = event.target.value;
		} else 	if (event.target.name === 'answer2') {
			answers.answer2 = event.target.value;
		} else 	if (event.target.name === 'answer3') {
			answers.answer3 = event.target.value;
		}

		this.setState({answers}, ()=>{
			console.log(this.state);
		});

	}
	questionSubmit() {

		firebase.database().ref('Usurvey/' + this.state.uid).set({
			studentName: this.state.studentName,
			answers : this.state.answers

		});
		this.setState({isSubmitted: true});


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
		this.answerSelected = this.answerSelected.bind(this);
		this.questionSubmit =this.questionSubmit.bind(this);

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

			questions = <div> 

			<h3> Which Courses do you like?</h3>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label>What kind of courses you like the most: </label> <br />
              <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology
              <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
              <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing
            </div>
            <div className="card">
              <label>you are a: </label> <br />
              <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student
              <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} />in-job
              <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} />looking-job
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes
              <input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no
              <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe
            </div>
            <input className="feedback-button" type="submit" value="submit" />
          </form>
			</div>

		} else if (this.state.isSubmitted === true) {

			studentName = <div> <h1> Thanks, {this.state.studentName} </h1> </div>
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