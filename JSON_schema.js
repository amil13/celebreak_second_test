  
{
    "fields": {                                     //Collection for fields
           "field_id": "unique_field_Id",
           "Name": "La Stalia, Montjuic",
           "PhotoURL": "URL",
           "Description": {                          //More description can be added such as no. of pitches, size etc.
                     "About":"Located in BCN, etc", 
                       "PvP":"8V8",
                      "Type": "Outdoors"
                          },
            "Location":[{"Address":"add"}, {"coordinates":[54 N, 32 W]}],  //GeoPoint datatype in Firebase
            "Slots_available" : [ 
                    { "slot_id":"unique_slot_id","booked": false,"date&time":"date&time1" }, //Array of timestamps(firebase datatype) for slots available
                    { "slot_id":"unique_slot_id","booked": false, "date&time":"date&time2"}  //reference to pitch can also be added here in case more than one pitch is available
                                ]
            }, 
    
    
    "players": {                                    //Collection for players
            "player_id": "unique_player_id",        //Other details like games_booked, Fouls, Red_flags, Organizer's_comments can be added
            "name": "Eric",
            "sex" : "Male",
            "contact": {
                "email":"eric@cb.com",
                "phone": 000888000
                       },
            "games_played": 15,
            "last_game_played": "date",
            "list_of_games_played":[]                //List of unique game ids
        },
    
 
    "games":{                                         //Collection for games
        "game_id":"Unique_game_id",
        "date&time":"timestamp",                      
        "slot_id": "slot_id",                         //from fields
        "organizer": "organizer_id",
        "field": "unique_field_id",  
        "registered_players": ["unique_player_id1","unique_player_id1",...],
        "chatroom": "cid",
        "review": "rating_id"                           //referencing ratings
    
    },


    "ratings":{                                     //Collection for ratings
        "rating_id": "unique_rating_id",
        "rater": "player_id",
        "gameid":"game_id",
        "stars": 4, //1 to 5
        "comment":"comment",
        "date":"date of review"   
    },
    
    "chatroom":
        [
        {
            "cid":100,
            "gamechat": false,
            "ids":[/*PlayerIds*/],        
            "messages":[
              {"from":"playerid1", "to":"playerid2", "text":"Hey Dude! You coming to play?"},
              {"from":"playerid2", "to":"playerid1", "text":"Sure man"}
             ]
         },
         {
            "cid":101,
            ...

         }
        ]
}
