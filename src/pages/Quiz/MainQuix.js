import React from "react";
import { quizData } from "../../components/Quiz/quizData";
import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { IonButton } from "@ionic/react";
import './Quiz.css';

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
                <div>

                <div className="result">
                    <p className="result_head">Congratulations</p>
                    <h3 className="result_subhead">Your Score: {this.state.score} </h3>
                    <IonButton className="score_bn">View your reward</IonButton>
                </div>
                <img className="score_plant" src="https://picsum.photos/200" alt="Your Score" />
                {/* <p className="score_well">You scored well!!!</p> */}
            </div>
            );
        } else {
            return (
                <div>
                    <img className="quiz_plant1" src="https://picsum.photos/300" alt="Quiz_plant1" />
                    <img className="quiz_plant2" src="https://picsum.photos/300" alt="Quiz_plant1" />
                    <div className="quiz-main">
                        <IonIcon className="quiz_back_arrow" icon={arrowBack}></IonIcon>
                        <p className="quiz_head">Quiz</p>
                        <p className="quiz_ques">{this.state.questions} </p>
                        {/* <span>{`Questions ${currentQuestion}  out of ${quizData.length -
            1} remaining `}</span> */}
                        <div className="quiz_options">
                            {options.map(option => (
                                <p
                                    key={option.id}
                                    className={`ui floating message options
      ${myAnswer === option ? "quiz-selected" : null}
      `}
                                    onClick={() => this.checkAnswer(option)}
                                >
                                    {option}
                                </p>
                            ))}
                        </div>
                        {currentQuestion < quizData.length - 1 && (
                            <button
                                className="ui inverted quiz-btn"
                                disabled={this.state.disabled}
                                onClick={this.nextQuestionHandler}
                            >
                                Next
                            </button>
                        )}
                        {/* //adding a finish button */}
                        {currentQuestion === quizData.length - 1 && (
                            <button className="ui inverted quiz-btn" onClick={this.finishHandler}>
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