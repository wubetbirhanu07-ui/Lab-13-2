Reflection
Separating routes, models, and database connection into different directories makes the project more organized and easier to manage.
It helps keep the code clean and allows each part of the application to have a specific 
responsibility. This structure also makes it easier to debug, update, 
and scale the application in the future, especially when the project becomes larger.
PUT and PATCH are both used to update data, but they work differently.
PUT is used to update the entire resource, meaning all fields should be 
replaced, while PATCH is used to update only specific fields. In my project,
the PUT /:id endpoint behaves more like PATCH because it usually updates only the 
fields that are provided instead of replacing the whole object.
