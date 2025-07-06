import React from 'react';
import { Trophy, Clock, Target, RotateCcw } from 'lucide-react';
import { QuizResult } from '../types/quiz';

interface ResultsScreenProps {
  result: QuizResult;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ result, onRestart }) => {
  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 70) return 'text-blue-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGradeLetter = (percentage: number) => {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
        <p className="text-gray-600">Here's how you performed</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">
            {result.score}/{result.totalQuestions}
          </div>
          <div className="text-sm text-gray-600">Correct Answers</div>
        </div>

        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className={`text-3xl font-bold ${getGradeColor(result.percentage)}`}>
            {getGradeLetter(result.percentage)}
          </div>
          <div className="text-sm text-gray-600">Grade</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Clock className="w-8 h-8 mx-auto mb-2 text-green-600" />
          <div className="text-2xl font-bold text-green-600">
            {formatTime(result.timeSpent)}
          </div>
          <div className="text-sm text-gray-600">Time Taken</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Accuracy:</span>
            <span className={`font-semibold ${getGradeColor(result.percentage)}`}>
              {result.percentage.toFixed(1)}%
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Questions Attempted:</span>
            <span className="font-semibold">{result.totalQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Average Time per Question:</span>
            <span className="font-semibold">
              {(result.timeSpent / result.totalQuestions).toFixed(1)}s
            </span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 space-x-2"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Take Quiz Again</span>
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;