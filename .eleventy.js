const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (config) {
    // we simply tell eleventy to pass a copy of our assets folder
    config.addPassthroughCopy("./src/img");
    config.addPassthroughCopy("./src/style.css");
    config.addPlugin(eleventyNavigationPlugin);

    return {
        pathPrefix: "/lasa-surveyor-website/",
        dir: {
            input: "src",
            output: "public",
        },
    };
};