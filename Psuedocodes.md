# PART 2

### FUNCTION 1

Since the schema is designed keeping the queries in mind (Query Driven Design approach) , the last played game of a player already exists in the Player document.
Psuedocode:
  __SELECT *
   FROM players
   WHERE last_game_played <= (input date)__
                  

MongoDB Shell command:

```javascript
db.players.find(
                {"last_game_played" :     
                { $lte : "18 november" }}, // condition ; Date format will be changed accordingly and it will only project the player ids
                {"player_id":1}); //To project only the player_id that fullfil the criteria
```               
                
                
### FUNCTION 2
For this function, a script can be written in javascript in order to iterate through everyplayer. In the mongodb shell command, I have used __Aggregation__ and __Pipelining__ to run multiple stages of the process in one command.

 Psuedocode:
 __For every player_id:__
 
 __FROM reviews collection
 FETCH all the documents by MATCHING with the player_id
 SORT the result in descending _(latest to oldest)_
 LIMIT the documents to number of past games _(input by user)_
 AVERAGE the ratings
 TOARRAY resulting object__
 
 __For loop with comparison operator on each average rating of the array. _(Comparison parameter to be input by user)__ 
 

```javascript
db.reviews.aggregate(
                    {$match:{rater:$player_id}},       //fetch all the documents by player_id
                    {$sort:{date:-1}},                 // Latest to oldest
                    {$limit:"number of past games"},   //number of past games input by users 
                    {$group:{
                             _id:"$rater","avg":{"$avg":"$stars"}
                                                                }})                                                               
                                                               
```


###FUNTION 3
