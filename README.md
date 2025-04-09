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
`<Insert Task 1>` – This task is responsible for <describe the functionality clearly>.

`<Insert Task 2>` – This task is responsible for <describe the functionality clearly>.

`<Insert Task 3>` – This task is responsible for <describe the functionality clearly>.

### Testing

- Basic authentication tested using local strategy.
- <Create Post> and <Delete Post> flows tested end-to-end.
- Verified session-based visibility of UI elements like <Create Post> button.

- <Comments> and <Subgroups> functionalities tested for valid associations with <Posts>.