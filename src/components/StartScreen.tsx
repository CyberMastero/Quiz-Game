import React from 'react';
import { Play, Clock, Target, Trophy } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
  timePerQuestion: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, totalQuestions, timePerQuestion }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Knowledge Quiz</h1>
        <p className="text-gray-600">Test your knowledge across various topics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
          <div className="text-sm text-gray-600">Questions</div>
        </div>

        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Clock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
          <div className="text-2xl font-bold text-purple-600">{timePerQuestion}s</div>
          <div className="text-sm text-gray-600">Per Question</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
          <div className="text-2xl font-bold text-green-600">A-F</div>
          <div className="text-sm text-gray-600">Grading</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quiz Rules</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Answer each question within the time limit
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Questions vary in difficulty (Easy, Medium, Hard)
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Your final score will be calculated based on correct answers
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            You can review your answers at the end
          </li>
        </ul>
      </div>

      <div className="text-center">
        <button
          onClick={onStart}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 space-x-2 shadow-lg hover:shadow-xl"
        >
          <Play className="w-5 h-5" />
          <span>Start Quiz</span>
        </button>
      </div>
    </div>
  );
};

export default StartScreen;