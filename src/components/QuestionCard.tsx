import React from 'react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showResult?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showResult = false,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOptionClassName = (index: number) => {
    const baseClass = 'w-full p-4 text-left rounded-lg transition-all duration-200 border-2 ';
    
    if (showResult) {
      if (index === question.correctAnswer) {
        return baseClass + 'bg-green-100 border-green-500 text-green-800';
      } else if (index === selectedAnswer && index !== question.correctAnswer) {
        return baseClass + 'bg-red-100 border-red-500 text-red-800';
      } else {
        return baseClass + 'bg-gray-50 border-gray-200 text-gray-600';
      }
    }
    
    if (selectedAnswer === index) {
      return baseClass + 'bg-blue-100 border-blue-500 text-blue-800 shadow-md';
    }
    
    return baseClass + 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </span>
        <span className="text-sm text-gray-500">#{question.id}</span>
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {question.question}
      </h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && onAnswerSelect(index)}
            className={getOptionClassName(index)}
            disabled={showResult}
          >
            <span className="font-medium mr-2">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;