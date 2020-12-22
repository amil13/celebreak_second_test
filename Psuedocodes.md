# PART 2

### FUNCTION 1

Since the schema is designed keeping the queries in mind, the last played game of a player already exists in the Player document.
Psuedocode:
   SELECT *
   FROM players
   WHERE last_game_played <= (input date)
   
                  

MongoDB Shell command:

```javascript
db.players.find(
                {"last_game_played" :     
                { $lte : "18 november" }}, // condition ; Date format will be changed accordingly and it will only project the player ids
                {"player_id":1}); //To project only the player_id that fullfil the criteria
```               
                
                
### FUNCTION 2
 

```javascript
db.reviews.aggregate(
                    {$match:{rater:1112}},
                    {$sort:{date:-1}},
                    {$limit:3}, 
                    {$group:{
                             _id:"$rater","avg":{"$avg":"$stars"}
                                                                }})
```
