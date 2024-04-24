# Aqui sí hay quien viva
Project 3 of Reboot Academy 


METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------------| ----------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `name`, `surname` `email`, `password`, `dni` , `phone`                      | { message: 'User signed up successfully', data: `token`}
POST   | /auth/login      | YES   | user | User Login               | `email`,  `password`                                                        | { message: 'User logged up successfully', data: `token`}
POST   | /auth/login      | YES   | admin| Admin Login              | `email`,  `password`                                                       | { message: 'Admin logged up successfully', data: `token`}


### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------------|-----------------------------------------------------------------------------|--------------------
GET    | /users/profile    | YES   | user | Can read/see own profile |                                                                             |  { message: 'Here is your profile', data: [`user`]}
PATCH  | /users/profile    | YES   | user | Update/edit own profile  | `name`, `surname` `email`, `password`, `dni` , `phone`                     | { message: 'You have edited your profile succesfully', data: [`user`]}
DELETE | /users/profile    | YES   | user | Delete own profile       | `params: userId`                                                            | { message: 'You have deleted your account successfully', data: [`user`]}
GET    | /users/profile/reviews    | YES   | user | Can see all his/her reviews |                                                                   |  { message: 'Here are your reviews, data: [`user`]}
GET    | /users/profile/reviews/:reviewId    | YES   | user | Can see one review | `params: reviewId`                                              |  { message: 'Here is your review ${reviewId}', data: [`user`]}
DELETE | /users/profile/reviews/:reviewID    | YES   | user | Delete one of his/her reviews       | `params: reviewId`                              | { message: 'You have deleted your reviewsuccessfully', data: [`user`]}
GET    | /users            | YES   | admin| Get All Users           |                                                                             | { message: 'Here are all users', data: [`users`]}
GET    | /users/:userId    | YES   | admin | Get One User            | `params: userId`                                                            |  { message: 'Here is the ${userId} profile ', data: [`user:id`]}
POST   | /users            | YES   | admin | Create one User         | `name`, `surname` `email`, `password`, `dni` , `phone`                    |{ message: 'User created successfully', data: [`user`]}
PATCH  | /users/:userId    | YES   | admin| Update one user          | `params: userId` `fullName`, `email`, `password`, `dni` , `phone`                    | { message: 'User updated successfully', data: [`user`]}
DELETE | /users/:userId    | YES   | admin| Delete one user          | `params: userId`                                                            | { message: 'User deleted successfully', data: [`user`]}


### Apartments Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION                     | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|---------------------------------|-------------------------------------------------|--------------------
GET    | /apartments             | NO    | user |Can see all apartments            |                                                    | { message: 'List of apartments', data: [`apartment`]}
GET    | /apartments/:apartmentId| NO    | user | Can see one apartment            | `params: apartmentId`                           | { message: 'Here is the ${aprtmentId} apartment', data: [`apartment`]}
GET    | /apartments             | YES    | admin |Can see all apartments        |                                                    | { message: 'List of apartments', data: [`apartment`]}
GET    | /apartments/:apartmentId| YES    | admin |Can see one apartment         | `params: apartmentId`                           | { message: 'Here is the ${aprtmentId} apartment', data: [`apartment`]}
POST   | /apartments/            | YES   | user | Can Create an apartment         |  `districtId, road, roadName, postalCode, extraInfo`                       | { message: 'apartment created succesfully', data: [`apartment`]}
POST   | /apartments/            | YES   | admin |Can Create an apartment         |  `districtId, road, roadName, postalCode, extraInfo`                       | { message: 'apartment created succesfully', data: [`apartment`]}
PATCH  | /apartments/:apartmentId| YES   | admin | Change/edit one apartment      |  `params: apartmentId' `districtId, road, roadName, postalCode, extraInfo` | { message: 'apartment edited successfully', data: `apartment`}
DELETE | /apartments/:apartmentId| YES   | user | Delete one apartment          |   `params: apartmentId`                               | { message: 'apartment deleted successfully', data: `apartment`}


### Reviews Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /reviews/:apartmentId   | NO    | user | Get all reviews of one apartment       |                                  | { message: 'List of all reviews', data: [`reviews`]}
GET    | /reviews/:sportId          | NO    | user | Get all reviews filtered by sport      |   `params: reviewsId, sportId`     | { message: 'List of all reviews by sport', data: [`reviews`]}
GET    | /reviews/:userId           | YES   | user | Get all reviews the user booked        |  `params: userId, reviewsId`       | { message: 'List of booked reviews', data: [`reviews`]}
POST   | /reviews/bookreviews         | YES   | user | Book a reviews                           |   `params: userId, reviewsId`      | { message: 'reviews booked successfully', data: [`reviews`]}
POST   | /reviews/             | YES   | admin | Create a reviews          |   `params: sportId` , `Start`, `Finish`,`Duration`,`Days`    | { message: 'reviews created successfully', data: [`reviews`]}
PATCH  | /reviews/:reviewsId         | YES   | admin| Update reviews information              | `params: reviewsId`,`sportId` , `Start`, `Finish`,`Duration`,`Days` | { message: 'reviews updated successfully', data: [`reviews`]}
DELETE | /reviews/:reviewsId   | YES   | admin | Delete a reviews          |   `params: reviewsId`                               | { message: 'reviews deleted successfully', data: `reviews`}
DELETE | /reviews/:reviewsId/:userId        | YES   | user | cancel a booked reviews                   |   `params: userId, reviewsId`      | { message: 'reviews canceled successfully', data: [`reviews`]}


### Sports Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /sports                   | NO   | user | Get all sports          |                                  | { message: 'List of all sports availables', data: [`sports`]}
POST   | /sports/:sportId    | YES   | admin | Create a sport apartment          |   `params: sportId`                         | { message: 'Sport created successfully', data: [`sports`]}
PATCH    | /sports/:sportId    | YES   | admin | Edit a sport          |    `params: sportId`                             | { message: 'Sport updated successfully', data: `sports`}
DELETE | /sports/:sportId    | YES   | admin | Delete Sport          |    `params: sportId`                               | { message: 'Sport deleted successfully', data: `sports`}


### Room Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /rooms                    | YES   | admin | Get all rooms          |                                  | { message: 'List of rooms', data: [`room`]}
GET    | /rooms/:roomId          | YES   | admin | Get one room      |   `params: reviewsId, sportId`     | { message: 'Room fetched successfully', data: [`room`]}
POST   | /rooms/         | YES   | admin | create a room                           |   `params: userId, reviewsId`      | { message: 'Room created successfully', data: [`room`]}
PATCH    | /rooms/:roomId    | YES   | admin| Edit one room          | `params: fullName`, `email`, `password`, `dni` , `phone`                    | { message: 'Room updated successfully', data: [`room`]}
DELETE | /rooms/:roomId        | YES   | admin | delete a room                   |   `params: userId, reviewsId`      | { message: 'Room deleted successfully', data: [`room`]}

### materials Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /materials                    | YES   | admin | Get all material                |                                  | { message: 'List of materials availables', data: [`material`]}
GET    | /materials/:roomId          | YES   | admin | Get all material from a room      |   `params: roomId`     | { message: 'List of materials available in a room', data: [`material`]}
GET    | /materials/:name          | YES   | admin | Get all material of the same type   |   `params: materialName`     | { message: 'Material of the same type available in all rooms', data: [`material`]}
POST   | /materials/:roomId         | YES   | admin | Add material to a room             |   `params: roomId`      | { message: 'Material added successfully', data: [`material`]}
PATCH    | /materials/:materialId    | YES   | admin| Update material                      | `params: materialName`, `description`, `roomId`      | { message: 'Material updated successfully', data: [`material`]}
DELETE | /materials/:materialId        | YES   | admin | delete a material               |   `params: materialId`      | { message: 'Material deleted successfully', data: [`material`]}

