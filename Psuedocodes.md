# PART 2

### FUNCTION 1

Since the schema is designed keeping the queries in mind (Query Driven Design approach) , the last played game of a player already exists in the Player document.

Psuedocode:
 - __Select all the player-documents from the players-collection__
 - __Query the last_game_played and put a _<= (input date)_ condition__
 - __Insert the result player Ids in an array__
                  

MongoDB Shell command:

```javascript
db.players.find(
                {"last_game_played" :     
                { $lte : "18 november" }}, // condition ; Date format will be changed accordingly and it will only project the player ids
                {"player_id":1}).toArray; //To project only the player_id that fullfil the criteria and insert it into an array
```               
                
                
### FUNCTION 2
For this function, a script can be written in javascript in order to iterate through everyplayer. In the mongodb shell command, I have used __Aggregation__ and __Pipelining__ to run multiple stages of the process in one command.

 Psuedocode:
- __For every player_id:__ 
- __Select all the review-documents from the reviews-collection__
- __SORT the result in descending__ _(latest to oldest)_
- __LIMIT the documents to number of past games__ _(input by user)_
- __AVERAGE the ratings__
- __insert the resulting object into an array__ 
- __For loop with comparison operator on each average rating of the array.__ _(Comparison parameter to be input by user)_
 
 
MongoDB Shell command:
```javascript
db.reviews.aggregate(
                    {$match:{rater:$player_id}},       //fetch all the documents by player_id
                    {$sort:{date:-1}},                 // Latest to oldest
                    {$limit:"number of past games"},   //number of past games input by users 
                    {$group:{
                             _id:"$rater","avg":{"$avg":"$stars"}
                                                                }})                                                               
                                                               
```

### FUNCTION 3
For this, we have three inputs, a date range and a field id. This algorithm is also based on the schema shown in the JSON file and can be improved a lot.

Psuedocode:
- __Select the field-document by matching field_id from the fields-collection__
- __Deconstruct the array to produce a document for each array element__
- __Match these documents with the given conditions__
- __Count and store the number of documents that fullfil the conditions__


MongoDB Shell command:
````javascript
db.fields.aggregate(
{$match:{field_id:100}},                  // Selecting a specific field , user input                       
{$unwind:"$Slots_available"},             // Deconstructing the array to create document per array element
{$match:{"Slots_available.booked":false,  // Comparing conditions - Empty slot between user input date range
         "Slots_available.date&time": 
         {$gt:/*startdate*/,$lt:/*enddate*/}}},
{$count:"Number_of_slots"}                // storing the number of free slot in a variable
)
````


