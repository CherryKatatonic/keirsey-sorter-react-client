import * as generators from './assessmentGenerator';

// Test Keirsey Classic generator
const keirseyClassicJSON = generators.generateKeirseyClassicJSON();
const keirseyClassicJSONQuestions = generators.generateKeirseyClassicQuestionsJSON();

// Log JSON string for debugging, and also to copy/paste into JSON file as boilerplate
console.log(JSON.stringify(keirseyClassicJSON));
console.log(JSON.stringify(keirseyClassicJSONQuestions));

test('generateKeirseyClassic() returns valid JSON', () => {
    expect(keirseyClassicJSON).not.toBeUndefined;
});

test('generateKeirseyClassic() returns correct amount of questions', () => {
    expect(keirseyClassicJSON.length).toEqual(70);
});

test('generateKeirseyClassic() assigns correct id to each question', () => {
    keirseyClassicJSON.forEach((question, i) => {
        expect(question.id).toEqual(i + 1);
    });
});

test('generateKeirseyClassic() assigns correct type to each answer', () => {
    expect(keirseyClassicJSON[0].answers[0].type).toEqual("E");
    expect(keirseyClassicJSON[7].answers[1].type).toEqual("I");
    expect(keirseyClassicJSON[16].answers[0].type).toEqual("S");
    expect(keirseyClassicJSON[29].answers[1].type).toEqual("N");
    expect(keirseyClassicJSON[38].answers[0].type).toEqual("T");
    expect(keirseyClassicJSON[45].answers[1].type).toEqual("F");
    expect(keirseyClassicJSON[54].answers[0].type).toEqual("J");
    expect(keirseyClassicJSON[69].answers[1].type).toEqual("P");
});