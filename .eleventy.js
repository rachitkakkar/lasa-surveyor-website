const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (config) {
    config.addPassthroughCopy("./src/img");
    config.addPassthroughCopy("./src/style.css");
    config.addPassthroughCopy("./src/dark-mode.js");
    config.addPassthroughCopy("./src/projects");
    config.addPassthroughCopy("./src/CNAME");

    config.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};