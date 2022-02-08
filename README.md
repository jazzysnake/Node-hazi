# CoffeeRater
*This will be a small webapp made with a MongoDB-Express-Node stack for learning purposes. This will be made for the course VITMAV42 - Server-side JavaScript.*

## Specification
We wish to create a system, where users can post about coffees they have tasted and rate them, so that later they can look back and see which one is worth trying out again. Later we might turn this into a social media for coffee lovers, but our UX team is on vacation, so for now we just want a basic setup with only the admin interfaces, that are responsible for adding/deleting/modifying the userdata and coffeedata.
### Requirements
- The system must be able to handle, adding, deleting, and updating users and their profiles.(CRUD)
- Users profile information can contain a username, email, as well as a short bio.
- Coffee information can contain a name, roast, the type of the drink ( e.g. espresso,latte etc), user description of the experience, and rating.
- Roast can be specified in a three tier system. (Ligth, Medium, Dark)
- The name of the coffee and the description can be any text, obviously we'd like to keep them sensibly long.
- The rating of the coffees should be on a scale of 1 to 10.
<div style="page-break-after: always;"></div>

## Mockups
As previously mentioned the UI/UX team is on vacation, our receptionist was tasked with throwing together a mockup of our vision,
so that hopefully there are fewer misunderstandings. These can be seen below.
![Alt text](./Mockups/AllPosts.png?raw=true "All Posts Page")
![Alt text](./Mockups/AllUsers.png?raw=true "All Users Page")
![Alt text](./Mockups/AddUser.png?raw=true "Add User Page")
![Alt text](./Mockups/AddPost.png?raw=true "Add Post Page")
![Alt text](./Mockups/EditUser.png?raw=true "Edit User Page")

## Development process
The state development process is briefly documented below.

### Design
Looking quite similar to the mockups, the actual looks of the page can be seen below.
![Alt text](./DesignPictures/All-Posts.png?raw=true "All Posts Page")
![Alt text](./DesignPictures/All-Users.png?raw=true "All Users Page")
![Alt text](./DesignPictures/Add-User.png?raw=true "Add User Page")
![Alt text](./DesignPictures/Add-Post.png?raw=true "Add Post Page")
![Alt text](./DesignPictures/Edit-User.png?raw=true "Edit User Page") 