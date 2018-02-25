const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual')
const typeDefs = `
    # This is a course on the system
    type Course {
        id: ID!
        title: String!
        # This is the description of course
        description: String!
        professor: Professor
        rating: Float @deprecated(reason: "we do not believe in the scores")
        comments: [Comment]
    }

    type Professor {
        id: ID!
        name: String!
        nationatily: String!
        gender: Gender
        courses: [Course]
    }

    enum Gender {
        MALE
        FEMALE
    }

    type Comment {
        id: ID!
        name: String!
        body: String!
    }

    type Query {
        courses: [Course]
        professors: [Professor]
        course(id: Int): Course
        professor(id: Int): Professor
    }
`

const resolvers = {
	Query: {
		courses: () => {
			return [{
				id: 1,
				title: 'Course GraphQl',
				description: 'Learning GraphQl'
			}, {
				id: 2,
				title: 'Course Nodejs',
				description: 'Learning Nodejs'
			}]
		}
	},
	Course: {
		professor: () => {
			return {
				id: 1,
				name: 'Cristian',
				nationatily: 'Colombian'
			}
		},
		comments: () => {
			return [{
				name: 'great',
				body: 'A great course to start with graphql'
			}]
		}
	}
}
const schema = makeExecutableSchema({ 
	typeDefs, 
	resolvers
})

addMockFunctionsToSchema({
	schema,
	mocks:{
		Course: () => {
			return {
				id: casual.uuid,
				title: casual.sentence,
				description: casual.sentences(2)
			}
		},
		Professor: () => {
			return {
				name: casual.name,
				nationatily: casual.country
			}
		}
	}, preserveResolvers: true
})

module.exports = schema