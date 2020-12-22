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
For this function, a script can be written in javascript in order to iterate through everyplayer. In the mongodb shell command, I have used pipelining to run multiple stages of the process in one command.

 Psuedocode:
 For every player_id:
 
 FROM reviews collection
 FETCH all the documents by MATCHING with the player_id
 SORT the result in descending _(latest to oldest)_
 LIMIT the documents to number of past games _(input by user)_
 AVERAGE the ratings
 TOARRAY resulting object
 
 For loop with comparison operator on each average rating of the array. _(Comparison parameter to be input by user)_
 

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
