import { useState, useEffect, useCallback } from 'react';
import { QuizState, QuizResult } from '../types/quiz';
import { questions } from '../data/questions';

const INITIAL_STATE: QuizState = {
  currentQuestion: 0,
  score: 0,
  timeLeft: 30,
  isActive: false,
  isComplete: false,
  answers: new Array(questions.length).fill(null),
  startTime: 0,
};

const TIME_PER_QUESTION = 30;

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>(INITIAL_STATE);

  const startQuiz = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isActive: true,
      startTime: Date.now(),
    }));
  }, []);

  const selectAnswer = useCallback((answerIndex: number) => {
    setState(prevState => {
      const newAnswers = [...prevState.answers];
      newAnswers[prevState.currentQuestion] = answerIndex;
      
      const isCorrect = answerIndex === questions[prevState.currentQuestion].correctAnswer;
      const newScore = isCorrect ? prevState.score + 1 : prevState.score;

      return {
        ...prevState,
        answers: newAnswers,
        score: newScore,
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prevState => {
      if (prevState.currentQuestion < questions.length - 1) {
        return {
          ...prevState,
          currentQuestion: prevState.currentQuestion + 1,
          timeLeft: TIME_PER_QUESTION,
        };
      } else {
        return {
          ...prevState,
          isActive: false,
          isComplete: true,
        };
      }
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setState({
      ...INITIAL_STATE,
      answers: new Array(questions.length).fill(null),
    });
  }, []);

  const handleTimeUp = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (state.isActive && state.timeLeft > 0) {
      interval = setInterval(() => {
        setState(prevState => ({
          ...prevState,
          timeLeft: prevState.timeLeft - 1,
        }));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [state.isActive, state.timeLeft]);

  const getResults = useCallback((): QuizResult => {
    const timeSpent = Math.floor((Date.now() - state.startTime) / 1000);
    const percentage = (state.score / questions.length) * 100;
    
    return {
      score: state.score,
      totalQuestions: questions.length,
      timeSpent,
      percentage,
      correctAnswers: questions.map((q, index) => ({
        questionIndex: index,
        userAnswer: state.answers[index],
        correctAnswer: q.correctAnswer,
        isCorrect: state.answers[index] === q.correctAnswer,
      })),
    };
  }, [state.score, state.startTime, state.answers]);

  return {
    state,
    questions,
    timePerQuestion: TIME_PER_QUESTION,
    startQuiz,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    handleTimeUp,
    getResults,
  };
};