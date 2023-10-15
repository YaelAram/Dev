import shuffle from "just-shuffle";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { type Question } from "../interfaces";

interface State {
  questions: Question[];
  currentQuestion: number;
  getQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  prevQuestion: () => void;
  nextQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,

        getQuestions: async (limit: number) => {
          const resp = await fetch("http://localhost:5173/data.json");
          const data: Question[] = await resp.json();

          const questions = shuffle(data).slice(0, limit);
          set({ questions });
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
          // Obtenemos el estado actual
          const { questions } = get();
          // Clonamos el estado
          const newQuestions = structuredClone(questions);

          // Encontramos el indice de la pregunta
          const questionIndex = newQuestions.findIndex(
            (question) => questionId === question.id
          );
          // Obtenemos la pregunta seleccionada
          const selectedQuestion = newQuestions[questionIndex];

          // Verificamos si la respuesta seleccionada es correcta
          const isCorrect = selectedQuestion.answer === answerIndex;

          // Actualizamos la informacion de la pregunta
          newQuestions[questionIndex] = {
            ...selectedQuestion,
            isCorrect,
            optionSelected: answerIndex,
          };

          // Actualizamos el estado
          set({ questions: newQuestions });
        },

        prevQuestion: () => {
          const { currentQuestion } = get();
          if (currentQuestion === 0) return;

          set({ currentQuestion: currentQuestion - 1 });
        },

        nextQuestion: () => {
          const { currentQuestion, questions } = get();
          if (currentQuestion === questions.length - 1) return;

          set({ currentQuestion: currentQuestion + 1 });
        },

        reset: () => {
          set({ currentQuestion: 0, questions: [] });
        },
      };
    },
    {
      name: "questions",
    }
  )
);
