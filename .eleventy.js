const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(`./src${src}`, {
    widths: [100, 343, 730, null],
    formats: ["avif", "jpg"],
    urlPath: "/images/",
    outputDir: "./public/images/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/sass/style.scss");

    eleventyConfig.addPassthroughCopy("./public/css/");

    eleventyConfig.addWatchTarget("./src/js/");

    eleventyConfig.addPassthroughCopy("./src/js/");
    
    eleventyConfig.addPassthroughCopy("./src/images/");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}