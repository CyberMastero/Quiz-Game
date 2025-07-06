import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
      <div className="text-center mt-2 text-sm text-gray-600">
        Question {current} of {total}
      </div>
    </div>
  );
};

export default ProgressBar;