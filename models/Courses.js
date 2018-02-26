const { Model } = require('objection')
const path = require('path')

class Course extends Model {
  static get tableName() {
    return 'courses'
  }

  static get relationMappings() {
    return {
      professor: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Professors'),
        join: {
          from: 'courses.professor_id',
          to: 'professors.id'
        }
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Comments'),
        join: {
          from: 'courses.id',
          to: 'comments.course_id'
        }
      }
    }
  }
}

module.exports = Course