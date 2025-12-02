import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { grade5Questions } from '../data/grade5';
import { grade8Questions } from '../data/grade8';

interface Question {
  q: string;
  o: string[];
  a: number;
}

interface AnsweredItem {
  q: string;
  correct: string;
  selected: string;
}

const TestPage: React.FC = () => {
  const { grade } = useParams<{ grade: string }>();
  const questions: Question[] = grade === 'grade5' ? grade5Questions : grade8Questions;
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<number>(-1);
  const [answered, setAnswered] = useState<AnsweredItem[]>([]);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const loadQuestion = (): void => {
    setSelected(-1);
    setSubmitted(false);
  };

  const selectOption = (i: number): void => {
    setSelected(i);
  };

  const submitAnswer = (): void => {
    if (selected === -1 || submitted) return;
    const correct = questions[index].a;
    const newAnswered: AnsweredItem[] = [...answered, {
      q: questions[index].q,
      correct: questions[index].o[correct],
      selected: questions[index].o[selected]
    }];
    setAnswered(newAnswered);
    if (selected === correct) {
      setScore(score + 1);
    }
    setSubmitted(true);
  };

  const nextQuestion = (): void => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      loadQuestion();
    } else {
      setShowReview(true);
    }
  };

  useEffect(() => {
    loadQuestion();
  }, [index]);

  if (showReview) {
    return (
      <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="max-w-4xl p-8 mx-auto bg-white border border-gray-200 shadow-2xl dark:bg-gray-800 rounded-xl dark:border-gray-700">
          <h2 className="mb-6 text-4xl font-bold text-center text-gray-800 dark:text-white">Test Review - Grade {grade === 'grade5' ? '5' : '8'}</h2>
          <div className="p-6 mb-8 text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
            <p className="text-2xl font-semibold">Final Score: {score} / {questions.length}</p>
            <p className="mt-2 text-lg">Percentage: {Math.round((score / questions.length) * 100)}%</p>
          </div>
          <div className="space-y-6">
            {answered.map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">{i + 1}. {item.q}</h3>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <p className="font-medium text-green-600 dark:text-green-400">
                    <span className="font-semibold">Correct:</span> {item.correct}
                  </p>
                  <p className={`font-medium ${item.correct === item.selected ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    <span className="font-semibold">Your answer:</span> {item.selected}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div className="max-w-2xl p-8 mx-auto bg-white border border-gray-200 shadow-2xl dark:bg-gray-800 rounded-xl dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">MCQ Test - Grade {grade === 'grade5' ? '5' : '8'}</h2>
          <div className="px-4 py-2 font-semibold text-blue-800 bg-blue-100 rounded-lg dark:bg-blue-900 dark:text-blue-200">
            Score: {score}
          </div>
        </div>
        <div className="mb-8">
          <div className="p-4 mb-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{index + 1}. {questions[index].q}</h3>
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-600">
              <div
                className="h-2 transition-all duration-300 bg-blue-600 rounded-full"
                style={{ width: `${((index + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Question {index + 1} of {questions.length}</p>
          </div>
          <div className="space-y-3">
            {questions[index].o.map((option, i) => {
              let className = 'w-full p-4 font-medium text-left transition-all duration-200 border-2 rounded-lg ';
              if (submitted) {
                if (i === questions[index].a) {
                  className += 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200';
                } else if (i === selected) {
                  className += 'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200';
                } else {
                  className += 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300';
                }
              } else {
                className += selected === i
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700';
              }
              return (
                <button
                  key={i}
                  onClick={() => !submitted && selectOption(i)}
                  disabled={submitted}
                  className={className}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <button
            onClick={submitAnswer}
            disabled={selected === -1 || submitted}
            className="px-6 py-3 font-semibold text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 hover:shadow-lg disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Answer
          </button>
          <button
            onClick={nextQuestion}
            disabled={!submitted}
            className="px-6 py-3 font-semibold text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 hover:shadow-lg disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {index < questions.length - 1 ? 'Next Question' : 'Finish Test'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;