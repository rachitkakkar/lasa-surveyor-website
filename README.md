# LASA Surveyor
Code for the website of LASA Surveyor. Normal npm project built using 11ty and 
Bootstrap. Built by Rachit Kakkar and hosted at: https://lasasurveyor.com/.

# Hacks
Hopefully someone can appreciate how hacked together this website is.
- Posts are looped over and displayed through some raw templating code in the index.md file.
- The projects page is just a directory of completely seperate pages (basic HTML and JS) with the navbar just copied over to make it seem like a part of this website. It has no relation to the 11ty static site generator beyond sharing CSS.
- In order to get newer posts showing first, we have to set the date to be younger
than earlier posts, even though it was actually published later. Since the date
is not displayed on the website ~~(instead using `display-date`)~~. The date counts done from `2999-29-12`.
- In order to have multiple rows, I have to create a different tag for each row and copy paste the for loop code in the index.md file with this new tag/collection, seperating it with a <br>. For rows with just two posts, I have to use the `card-columns` class rather than the `card-deck` class to avoid them being stretched weirdly to fit the page width. Tags so far include `post` and `postold`.