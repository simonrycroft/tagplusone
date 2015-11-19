'use strict';

export default class GitParser {

    parseTags(tags, callback) {
        if (typeof tags !== "string") {
            return callback('tags must be a string');
        }
        return callback(null, tags.split('\n'));
    }

    filterTags(tags, prefix, callback) {
        if (tags.constructor !== Array) {
            return callback('tags must be an array');
        }
        if (typeof prefix !== "string") {
            return callback('prefix must be a string');
        }
    }
}