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

	}


	render() {


		}
		return (
			<div>
			You are inside Usurvey
			</div>
			);
	}
}


export default Usurvey;