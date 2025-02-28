const loader = require('graphql-tag/loader');

module.exports = {
    process: (src) => {
        const result = loader.call({ cacheable: () => {} }, src);
        return {
            code: result,
        };
    },
};
