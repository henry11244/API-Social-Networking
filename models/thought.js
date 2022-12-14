const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require('moment');

const formatDate = (date) => {
    return moment(date).format('MMM Do, YYYY h:mm a');
};

// Schema to create a thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: formatDate,
        },
        username: {
            type: Schema.Types.String,
            required: true,
            ref: 'Users'
        },

        reactions: [reactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('Thought', thoughtSchema);




module.exports = Thought;
