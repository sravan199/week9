const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const AnswerSchema = new Schema({
    questionName: String,
    answer: String,
    name: String
});

const QuestionSchema = new Schema({
    question: String,
    name:String,
    typeofQuestion:String,
    answers: [AnswerSchema]
});

const Author = mongoose.model('QuestionAndAnswers', QuestionSchema);

module.exports = Author;








