import React from "react";
import Option from "./Option";
import { useSelector } from "react-redux";
import { getQuestions } from "../features/scoreSlice";
import AnswerOptions from "./AnswerOptions";

const QuizCard = ({
  currentQuestion,
  selectedAnswer,
  handleNextQuestion,
  handleBackQuestion,
  handleAnswerOptionClick,
  showScore,
  handleSubmit,
  isShowAnswer,
  correctAnswer,
}) => {
  const questions = useSelector(getQuestions);

  return (
    <div className="quiz_card_root">
      <div className="quiz_card_questions">
        <div className="mt-24">
          <p className="body2_semi_bold_14">
            {isShowAnswer && currentQuestion + 1}.{" "}
            {questions[currentQuestion].question}
          </p>
        </div>
      </div>
      <div>
        {questions[currentQuestion].options.map((option, i) =>
          isShowAnswer ? (
            <AnswerOptions
              key={option}
              option={option}
              selectedAnswer={selectedAnswer}
              handleAnswerOptionClick={handleAnswerOptionClick}
              i={i}
              isShowAnswer={isShowAnswer}
              correctAnswer={correctAnswer}
            />
          ) : (
            <Option
              key={option}
              option={option}
              selectedAnswer={selectedAnswer}
              handleAnswerOptionClick={handleAnswerOptionClick}
              i={i}
              isShowAnswer={isShowAnswer}
              choosedAnswer={questions[currentQuestion].selectedAnser}
              correctAnswer={correctAnswer}
            />
          )
        )}
        {!isShowAnswer && (
          <div className="d-flex align-items-center justify-content-center mt-40">
            {currentQuestion !== 0 && (
              <button className="btn_primary mr-24" onClick={handleBackQuestion}>
                Previous
              </button>
            )}
            {currentQuestion === questions.length - 1 && showScore ? (
              <button className="btn_primary" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <button
                className="btn_primary"
                onClick={handleNextQuestion}
                disabled={selectedAnswer === ""}
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
