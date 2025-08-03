// components/about/AssessmentSection.tsx
'use client';
import React, { useState } from 'react';
import { aboutData } from '@/data/about/aboutdata';

export const AssessmentSection: React.FC = () => {
  const { assessment } = aboutData;
  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);

  const handleQuestionCheck = (questionId: string) => {
    setCheckedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const hasPositiveAnswers = checkedQuestions.length > 0;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
            {assessment.title}
          </h2>
          <p className="text-xl text-center mb-16 text-gray-600">
            {assessment.subtitle}
          </p>
          
          {/* Questions */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 mb-12">
            <div className="space-y-6">
              {assessment.questions.map((question) => (
                <div 
                  key={question.id} 
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    checkedQuestions.includes(question.id)
                      ? 'border-purple-300 bg-purple-50'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                  onClick={() => handleQuestionCheck(question.id)}
                >
                  <label className="flex items-start space-x-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedQuestions.includes(question.id)}
                      onChange={() => handleQuestionCheck(question.id)}
                      className="mt-1 h-5 w-5 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <div className="flex items-start space-x-3 flex-1">
                      <span className={`font-bold text-lg ${
                        checkedQuestions.includes(question.id) ? 'text-purple-600' : 'text-gray-400'
                      }`}>
                        ✓
                      </span>
                      <span className="text-lg text-gray-800 leading-relaxed">
                        {question.question}
                      </span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Results */}
          {hasPositiveAnswers && (
            <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">
                {assessment.conclusion}
              </h3>
              <p className="text-lg text-purple-100 mb-6">
                Has identificado <span className="font-bold">{checkedQuestions.length}</span> de {assessment.questions.length} áreas donde mi método puede transformar tu vida.
              </p>
              <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                Agenda tu Sesión de Descubrimiento
              </button>
            </div>
          )}
          
          {/* Encouragement for no selections */}
          {!hasPositiveAnswers && (
            <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-4">
                Marca las situaciones que resuenen contigo para descubrir si mi método es adecuado para ti.
              </p>
              <div className="text-4xl text-gray-300">💭</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};