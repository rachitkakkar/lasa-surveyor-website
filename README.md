# [LASA Surveyor](https://lasasurveyor.org)

<https://lasasurveyor.org>

Maintained by: Rachit Kakkar, Maxim Rebguns

Code for the website of LASA Surveyor. The website is made with the
[Hugo static site generator](https://gohugo.io) with plain HTML/SCSS.

## Setting up

Once you have cloned the repository, ensure that you have Hugo
installed. Installation instructions for all operating systems
are found on the [Hugo website](https://gohugo.io).

Once you have Hugo installed, running `hugo server` will create
a server with which you can preview the website.

## Production Process

- The website is hosted on GitHub
- Every time a commit is made to the `main` branch, The `hugo.yaml`
  workflow runs to build the website with Hugo.
- The website is hosted with GitHub pages.
- The domain (lasasurveyor.org) is controlled through NameCheap

## Creating a post

1. Create a new directory in `content/posts` in the format
   `YYYY-MM-DD-SLUG`, where `SLUG` is something like "academics" or
   "media" that briefly describes the survey.
2. Create a file inside the directory called `index.md`.
3. The top of `index.md` should look like this:

   ```
   ---
   title: "Post Title"
   date: YYYY-MM-DD
   description: >
       A brief description of the blog post, that may span
       multiple lines, like so.
   ---
   ```

   Optionally, you can also add an `author: "Author"` element. This
   generally shouldn't be set, because the default author is
   "The LASA Surveyor Club Captains," which is usually enough.
4. After that, write the post in
   [Markdown](https://www.markdownguide.org/basic-syntax/).
   Note: the top-level heading should be `##`, since the title is
   automatically inserted into the post during the build process.
5. Any additional assets and images may be placed in the folder
   alongside `index.md`.

## Controlling the current survey

The "survey" button on the website is controlled in the file
`hugo.toml`.

If you want the survey to be unlocked, set `isSurveyUnlocked` to
`true`. If you set it to `false`, clicking on "survey" will take
a visitor to a page explaining that no survey is currently active.

If `isSurveyUnlocked` is set to true, then visitors will be
redirected to the URL specified by `surveyURL` when clicking
"survey."

Example of a survey (`hugo.toml`):

```
isSurveyUnlocked = true
surveyURL = "https://forms.gle/Kggs2KQ6Yw3dUEws7"
```

## Modifying the site source code

### Directory structure

- `assets`: Files that need to be processed by Hugo before being
  published. Anything in `assets` is put in the root directory of
  the website.
    - `css`: SCSS files
- `content`: Site Markdown content. Hugo takes Markdown files here
  and converts them to HTML.
    - `posts`: Where posts go
- `layouts`: Go HTML template layouts that are used to convert
  Markdown pages to HTML
- `static`: Anything that doesn't have to be processed by Hugo.
  Files here are put in the root directory of the website.

### Hints

- The site is written in plain HTML/CSS. The website was designed
  with the goals of accessibility (including semantics), simplicity,
  and modern web technologies.
- Any content of the website should be written in Markdown, and not
  HTML. Github-flavored markdown provides a whole bunch of formatting
  options, including tables.
- The HTML layouts are made to be clean and reusable. All templates
  are derived from `_default/baseof.html`.
