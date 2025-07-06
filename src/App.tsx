import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import Timer from './components/Timer';
import ProgressBar from './components/ProgressBar';
import ResultsScreen from './components/ResultsScreen';
import { ChevronRight } from 'lucide-react';

function App() {
  const {
    state,
    questions,
    timePerQuestion,
    startQuiz,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    handleTimeUp,
    getResults,
  } = useQuiz();

  const currentQuestion = questions[state.currentQuestion];
  const selectedAnswer = state.answers[state.currentQuestion];

  if (!state.isActive && !state.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <StartScreen
          onStart={startQuiz}
          totalQuestions={questions.length}
          timePerQuestion={timePerQuestion}
        />
      </div>
    );
  }

  if (state.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <ResultsScreen
          result={getResults()}
          onRestart={resetQuiz}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <ProgressBar
            current={state.currentQuestion + 1}
            total={questions.length}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={selectAnswer}
            />
          </div>

          <div className="space-y-4">
            <Timer
              timeLeft={state.timeLeft}
              totalTime={timePerQuestion}
              onTimeUp={handleTimeUp}
              isActive={state.isActive}
            />

            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quiz Progress</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Score:</span>
                  <span className="font-semibold text-blue-600">{state.score}/{state.currentQuestion + 1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="font-semibold text-gray-900">
                    {questions.length - state.currentQuestion - 1} questions
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                selectedAnswer !== null
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>
                {state.currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;