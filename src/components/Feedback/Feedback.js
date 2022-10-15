import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    // handlerIncrement = e => {
    //     if(e.target.good){
    //         this.setState(prevState => ({
    //             good: prevState.good + 1
    //         }))
    //     }
    //     else if(this.state.neutral){
    //         this.setState(prevState => ({
    //             neutral: prevState.neutral + 1
    //         }))
    //     }

    // }

 

    handlerIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1

        }))
        this.countPositiveFeedbackPercentage();
        this.totalQuantity();

    }

    handlerIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
        this.totalQuantity();
        this.countPositiveFeedbackPercentage();
    }

    handlerIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
        this.totalQuantity();
        this.countPositiveFeedbackPercentage();
    }


    totalQuantity = () => {
        this.setState(prevState => ({
            quantity: prevState.good + prevState.neutral + prevState.bad
        }));
    }

    countPositiveFeedbackPercentage = () => {

        if(this.state.quantity > 0){
            this.setState(prevState => ({
                percenatage: ((this.state.good / prevState.quantity)*100).toFixed(0) + '%'
            }))
        }
        else if(this.state.good >= 0){
            this.setState({
                percenatage: '100%'
            })
        }
    //     if(this.state.quantity === this.state.good){
    //         this.setState(prevState =>({
    //             percenatage: ((this.state.quantity/ prevState.quantity)* 100).toFixed(2) + '%'
    //         }))
    //     }
       
    //    else 
    //    if (this.state.good >= this.state.neutral || this.state.good >= this.state.bad) {
    //         this.setState(prevState => ({
    //             percenatage: ((prevState.good / (prevState.neutral + prevState.bad) * 100) / 2).toFixed(2) + '%'
    //         }))
    //     }

    //     else if (this.state.bad || this.state.neutral >= 0) {
    //         this.setState(prevState => ({
    //             percenatage: (prevState.good / (prevState.neutral + prevState.bad) * 100).toFixed(2) + '%'
    //         }))
    //     }

    //     else if (this.state.bad || this.state.bad >= 0) {
    //         this.setState(prevState => ({
    //             percenatage: ((prevState.good / prevState.bad) * 100).toFixed(2) + '%'
    //         }))
    //     }

    //     else if (this.state.neutral || this.state.neutral >= 0) {
    //         this.setState(prevState => ({
    //             percenatage: ((prevState.good / prevState.neutral) * 100).toFixed(2) + '%'
    //         }))
    //     }
        
    }

    render() {
       
        return (
           
            <>
            {/* <div>
                <button type="button" onClick={this.handlerIncrementGood}>Good</button>
                <button type="button" onClick={this.handlerIncrementNeutral}>Neutral</button>
                <button type="button" onClick={this.handlerIncrementBad}>Bad</button>
            </div> */}

            {/* <div>
                <button type="button" onClick={(e) => {console.log();this.handlerIncrement(e)}}>Good</button>
                <button type="button" onClick={(e) => {console.log();this.handlerIncrement(e)}}>Neutral</button>
                <button type="button" onClick={this.handlerIncrement}>Bad</button>
            </div> */}

         
            <FeedbackOptions options={this.handlerIncrementGood} options2={this.handlerIncrementNeutral} options3={this.handlerIncrementBad}/>
            {/* <h2>Statistics</h2> */}
            
            
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.quantity} positivePercentage={this.state.percenatage}/>
            
                {/* <div>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.state.quantity}</p>
                    <p>Positive feedback: {this.state.percenatage}</p>
                </div> */}
            </>

        )
    }
}


export default Feedback;