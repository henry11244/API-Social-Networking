const { Schema, Types } = require('mongoose');
const moment = require('moment');

const formatDate = (date) => {
    return moment(date).format('MMM Do, YYYY h:mm a');
};
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: Schema.Types.String,
            required: true,
            ref: 'User',
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
