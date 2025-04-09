# Web Development Project
## Team Members: Yagayya Vig, Shrey Dhand, Martin Petkov
## March 15, 2025


### Yagayya Vig – Tasks Completed

1. `<Passport.ts – localLogin>`
Implemented user login functionality using local strategy. Validates login credentials and authenticates the user.

2. `<Passport.ts – serializeUser>`
Implemented session handling by serializing the authenticated user's <user.id>.

3. `<postRouter.ts – CreatePost>`
Implemented the <addPost()> functionality and integrated it into the create post route.

4. `</show/:postid>` – Show Individual Post
Developed routing and logic for displaying individual posts using dynamic route parameters.

5. `<posts.ejs – Create Post Button Visibility>`
Hid the <Create Post> button for users who are not logged in using conditional rendering.

6. `<subs – Subgroups>`
Implemented subgroup functionality to allow posts to be organized and displayed under specific categories.

7. `<comments>`
Added functionality to allow users to comment on posts and display those comments under the associated post.

### Shrey Dhand – Tasks Completed
1. `<postRouter.ts - "/deleteconfirm/:postid" >`
This part is about showing the user a confirmation page before they delete a post. I made sure that only the creator of the post can delete it (so someone can't just randomly delete other people's posts). When the user clicks the delete button, they get sent to a confirmation page where they can review before actually deleting the post.

2. `<postRouter.ts - "/delete/:postid" >` 
This is where the actual deletion happens. If the user is authenticated and is the post’s creator, the post gets deleted through a delete function. After the post is deleted, the user is redirected back to the main posts page (/posts).

3. `<individualPost.ejs>`
I added a "Delete Post" button that when clicked, takes the user to the confirmation page (/posts/deleteconfirm/<post.id>)

4. `<deleteConfirm.ejs>`
This page shows the details of the post the user is about to delete, like the title, description, creator, and the subgroup so they can double check before deleting. There’s a "Confirm" button that will actually delete the post, and a "Cancel" link in case the user changes their mind and wants to go back to the posts page.

### Martin Petkov – Tasks Completed
`postRouters.ts - router.get("/edit/:postid"` – This task is responsible for handling GET requests to retrieve the edit form for a post. It checks if the post exists and if the authenticated user is the creator of the post. If the post does not exist, it returns a 404 error. If the user is not authorized, it returns a 403 error

`postRouters.ts - router.post("/edit/:postid"` – This task is responsible for handling POST requests to update a post. It first checks that the post exists and that the authenticated user is the creator of the post. If the post is found and the user is authorized, it checks if the required fields are there (title, link, description, subgroup). If any fields are missing, it renders the edit form with an error message. If all fields are there, it calls the editPost function to update the post and then redirects the user to the post's detail page.

`fake-db.ts - editPost()` – This task is responsible for updating the post in the database. It takes a post ID and an object containing the changes to be made. If the post exists, it updates only the fields that have been provided in the changes object, making sure that only the specified attributes are modified while leaving the rest of the post data intact.

### Testing

- Basic authentication tested using local strategy.
- <Create Post> and <Delete Post> flows tested end-to-end.
- Verified session-based visibility of UI elements like <Create Post> button.

- <Comments> and <Subgroups> functionalities tested for valid associations with <Posts>.