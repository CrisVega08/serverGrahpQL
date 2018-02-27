module.exports = `
    type Professor {
      id: ID!
      name: String!
      nationality: String!
      gender: Gender
      courses: [Course]
    }

    enum Gender {
        MALE
        FEMALE
    }
  `