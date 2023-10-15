export interface Question {
  id: number;
  question: string;
  code: string;
  options: string[];
  answer: number;
  optionSelected?: number;
  isCorrect?: boolean;
}
