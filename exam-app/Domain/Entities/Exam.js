const { Entity, validatorAdapter } = require('speck-entity')
const Joi = require('joi')
const adapter = validatorAdapter('joi', Joi)

class Exam extends Entity { }

Exam.SCHEMA = {
  examId: adapter(Joi.string().guid()),
  courseSubject: adapter(Joi.string()),
  classNumber: adapter(Joi.number()),
  applicationDate: adapter(Joi.date())
}

module.exports = Exam
