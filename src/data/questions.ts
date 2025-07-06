import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "Java programs are?",
    options: ["Faster than others", "Platform independent", "portable", "Not reusable", "None of the above"],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Which of the following is not a Java Features?",
    options: ["dynamic", "architecture-neutral", "use of pointers", "Object-oriented"],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "Which of the modifer cant be used for constructor?",
    options: ["public", "private", "staticc", "array"],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 4,
    question: "what will be the return type of method that not returns any value?",
    options: ["void", "int", "double", "None of the above"],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 6,
    question: "Which programming language was created by James Gosling?",
    options: ["Python", "Java", "C++", "JavaScript"],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 7,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 8,
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 9,
    question: "What is encapsulation?",
    options: ["Data hiding", "Inheritance", "Polymorphism", "Abstraction"],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 10,
    question: "In oop,what is a class?",
    options: ["object instance", "data type", "Blueprint for creating objects", "Instance of a class"],
    correctAnswer: 3,
    difficulty: 'easy'
  }
];