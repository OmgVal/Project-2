# Gif-tastic

Picture this, if "we heart it" and "giphy" had a baby. A place where you could just go and like as many gifs as you wanted. A sea of gifs. YOUR sea of gifs. 

![DancingBeach](./imgs/dancingBeach.gif)

Now.. realistically you wouldnt make the sea to have "fun" but to pass time. You can favorite gifs and they will all be easily accessed via your profile.  

![Dancingcat](https://media.giphy.com/media/gbmWwWm4sGMQvAYm1G/giphy.gif)

Cool right? Yeah...probably not but at least you'll be able to see a bunch of entertaining gifs. 👍🏻🤓

## API:
https://developers.giphy.com/explorer?

## ERDs:
-check out my .drawio file !!


## RESTful routes
| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `/gif` | home page that lists trending gifs |
| GET | `/gif/search` | list gifs with tag user searched|
| POST | `/gif/:id` | details of specific gif will allow user to post a comment |
| POST | `/gif/:id` | user can add gif to their faves in gif details|
| GET | `/gif/:id` | shows specific gifs details |
| GET | `/user/faves` | shows list of all fave gifs for user |
| DELETE | `/user/faves/:id` | allows user to remove specific gif from faves |



## Wireframes 

![Home-Search](./imgs/Untitled_Artwork%2031.png)

![User-Details](./imgs/Untitled_Artwork%2032.png)

## UserStory
- As a user you'll be able to "heart" all of the gifs you enjoy and have them saved to you user profile so you can enjoy them whenever you want and not use them. Gifs are a great form of expression. Best used while texting your friends. Best part about this website is that you have easy access to them and not worry about having to find them again.

## MVP Goals
1. Make homepage display gifs
1. Have nav bar for user to access different routes
1. Existing users may click on gif icons to access their details 
1. Through details display the user may comment or add/remove gif to/from their faves
1. users profile displays all their faves 

## Stretch Goals
1. being able to categorize their faves 
1. being able to upload their own gifs 
1. user profile pic -- being gifs 
