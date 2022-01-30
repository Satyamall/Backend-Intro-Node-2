
## FS + Path

-use fs, and path modules
-create a new file with some data
-read from it
-write from it
-use paths to manage it
-rename files to a new folder

-do the same with sync
 
-**dirname, **filename

## http, fs, https, ssr with templates

-create an index.html and user.html templates
-keep variables in this formate {name}
- read from the templates, and serve users the html pages depending on the route they hit
-/GET
-/users/:id GET
-for users/:id, make a network request using https, to https://reqres.in/api/users/<user_id>
-show the fullname, image, and email to the user with the help of templates

bonus: 

-if a user does not exits, use a 404.html to show that the request user was not found
