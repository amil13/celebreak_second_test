/*Below is a possible relational schema that can be added to support queries. This can be developed further as required to further improve the efficiency of the backend.

{
all_games_at_field :{
    field_id1:["game_id1","game_id2"],
    field_id2:["game_id1","game_id2"]

}
all_ratings_per_field:{
     field_id1:[ "ratind_id1", "rating_id2"...],
     field_id2:[ "ratind_id1", "rating_id2"...]

 }       
all_games_per_player:{
    player_id1:["game_id1","game_id2"],
    player_id2:["game_id1","game_id2"]
}
all_ratings_per_player:{
    player_id1:[ "ratind_id1", "rating_id2"...],
    player_id2:[ "ratind_id1", "rating_id2"...],

}
all_fields_playedon_by_player{
    player_id1: ["field_id1","field_id2"],
    player_id2: ["field_id1","field_id2"]
}

highest_game_rater:player_id

lowest_game_rater:player_id

}
