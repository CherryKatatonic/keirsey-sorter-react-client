// Utility functions for generating boilerplate JSON for building out assessments
import { questionText } from '../res/keirsey-classic-questions';

// Array
// Generate tedious boilerplate JSON for Classic Keirsey assessment
export const generateKeirseyClassicJSON = () => {
    const questions = [];
    const typeSequence = ["E", "I", "S", "N", "S", "N", "T", "F", "T", "F", "J", "P", "J", "P"];
    let type = 0;
    
    for (let i = 0; i < 70; i++) {
        const q = {};

        // Question id begins at 1 to avoid confusion between index and question number
        q.id = i + 1;
        q.text = questionText[i].text;
        q.answers = [];

        q.answers[0] = {};
        q.answers[0].id = "a";
        q.answers[0].type = typeSequence[type];
        type === 13 ? type = 0 : type += 1;

        q.answers[1] = {};
        q.answers[1].id = "b";
        q.answers[1].type = typeSequence[type];
        type === 13 ? type = 0 : type += 1;

        questions.push(q);
    }

    return questions;
}

// Array
// Generate tedious boilerplate JSON for Classic Keirsey assessment questions
export const generateKeirseyClassicQuestionsJSON = () => {
    const questions = [];

    for (let i = 0; i < 70; i++) {
        const q = {};

        // Question id begins at 1 to avoid confusion between index and question number
        q.id = i + 1;
        q.text = "CHANGE_ME"

        questions.push(q);
    }

    return questions;
}