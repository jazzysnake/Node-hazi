# CoffeeRateR
*This is a small webapp made with a MongoDB-Express-Node stack for learning purposes. This was made for the course VITMAV42 - Server-side JavaScript.*

## Specification
We wish to create a system, where users can add coffees they have tasted and rate them, so that later they can look back and see which one is worth trying out again. Later we might turn this into a social media for coffee lovers, but our UX team is on vacation, so for now we just want a basic setup with only the admin interfaces, that are responsible for adding/deleting/modifying the userdata and coffeedata.
### Requirements
- The system must be able to handle, adding, deleting, and updating users and their profiles.(CRUD)
- Users profile information can contain a username, country of origin, email, as well as their list of rated coffees.
- Coffee information can contain a name, roast, description of the drink the user tried it with ( e.g. espresso,latte etc), user description of taste, and rating.
- Roast can be specified in a three tier system. (Ligth, Medium, Dark)
- The name of the coffee and the description can be any text, obviously we'd like to keep them sensibly long.
- The rating of the coffees should be on a scale of 1 to 10.
