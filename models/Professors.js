const { Model } = require('objection')
const path = require('path')

class Professor extends Model {
  static get tableName() {
    return 'professors'
  }

  static get relationMappings() {
    return {
      course: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Courses'),
        join: {
          from: 'professors.id',
          to: 'courses.professor_id'
        }
      }
    }
  }
}

module.exports = Professor