import React from "react";
import { quizData } from "./quizData";
import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Game Over your Final score is {this.state.score} points </h3>
          <div>
            The correct answer's for the questions was
            <ul>
              {quizData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <img className="quiz_plant1" src="https://s3-alpha-sig.figma.com/img/e03f/20c1/2ded1b8e6b5d79dd576be89b63ad6643?Expires=1673222400&Signature=oZjveRncqGcE22A8~K2jNe61CZfKp2-o43nyCievTgEBPVqOcqLwl-DW4lgh52wpBdHL3aPkxFOcTaM2RbkcgnGifm0gG0juooJSRGR5eKQVb9UF2-H7vZIUIH2vvIegk94NkWjS~hF1AWNXF2iaJmAwhSv3FbMmTUv6ky3rj6ixej4GfW7Km5NkvaQk9o0AZpk2PehuTN9ufe05F4bEwcpsrzlOpfrf3TZ5siZfNEtuoaUrl7W0GwgytqaePoRWBIgYGObgqpm7TaX3ZwgYj1BiRQgGVvePAIV0h~v7BwAx3KVUujm1H~Lkl27sxzrXzPdO3hX9EJxFiEgXoG0Yeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Quiz_plant1" />
          <img className="quiz_plant2" src="https://s3-alpha-sig.figma.com/img/de30/587f/0aa406763969bacc0545efbb5979294b?Expires=1673222400&Signature=NOUg5cg97ZtXd1FBaPB2s8PNozizoyTJ8XaHZWFNW9QSGrwny1EAjThSWraiMEeHLUL0tBcR6I9zNL702eYAi6O9862FK5c5pNd5csX~Hxt886mpmHZ3-ghNJiz5YJB3dnhTzr8R9wjJh~I1~0kECjLjnEaoLIRhSMf2XpFhp5qWbpq8ESZ3HKHnPfGM9bpz263gZJII8FfUYztQuSFhmCowk44ZChITdIhlmXRwxfDUdB-qfUSWOFBbAA0AF6JoZvIl-SmqtF9uJL5V6l38KAqhTwUhQVmG200x5qMfmYuvk3h5A4ph2wt8Y4wEayJm4s-j-vQtKetps6tx3wiuYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Quiz_plant1" />
          <div className="App">
         <IonIcon class="quiz_back_arrow" icon={arrowBack}></IonIcon>
            <p className="quiz_head">Quiz</p>
            <p className="quiz_ques">{this.state.questions} </p>
            {/* <span>{`Questions ${currentQuestion}  out of ${quizData.length -
            1} remaining `}</span> */}
            <div class="quiz_options">
              {options.map(option => (

                <p
                  key={option.id}
                  className={`ui floating message options
      ${myAnswer === option ? "selected" : null}
      `}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </p>


              ))}
            </div>

            {currentQuestion < quizData.length - 1 && (
              <button
                className="ui inverted button"
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                Next
              </button>
            )}
            {/* //adding a finish button */}
            {currentQuestion === quizData.length - 1 && (
              <button className="ui inverted button" onClick={this.finishHandler}>
                Finish
              </button>
            )}
          </div>
        </div>
      );
    }
  }
}

export default MainQuiz;