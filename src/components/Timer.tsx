import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
  onTimeUp: () => void;
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime, onTimeUp, isActive }) => {
  useEffect(() => {
    if (timeLeft === 0 && isActive) {
      onTimeUp();
    }
  }, [timeLeft, isActive, onTimeUp]);

  const percentage = (timeLeft / totalTime) * 100;
  const isLowTime = timeLeft <= 10;

  return (
    <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-md">
      <Clock className={`w-5 h-5 ${isLowTime ? 'text-red-500' : 'text-blue-500'}`} />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">Time Left</span>
          <span className={`text-sm font-bold ${isLowTime ? 'text-red-500' : 'text-gray-900'}`}>
            {timeLeft}s
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ${
              isLowTime ? 'bg-red-500' : 'bg-blue-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;