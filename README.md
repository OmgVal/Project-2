# Gif-tastic

Picture this, if "we heart it" and "giphy" had a baby. A place where you could just go and like as many gifs as you wanted. A sea of gifs. YOUR sea of gifs. 

![DancingBeach](./imgs/dancingBeach.gif)

Now.. realistically you wouldnt make the sea to have "fun" but to pass time. You can favorite gifs and they will all be easily accessed via your profile.  

![Dancingcat](https://media.giphy.com/media/gbmWwWm4sGMQvAYm1G/giphy.gif)

Cool right? Yeah...probably not but at least you'll be able to see a bunch of entertaining gifs. 👍🏻🤓

## API:
https://developers.giphy.com/explorer?

## ERDs:
![ERDs](./imgs/ERDs.png)


## RESTful routes
| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `/` | home page that lists trending gifs |
| GET | `/gifs/search` | list gifs with tag user searched|
| POST | `/gifs/:id` | details of specific gif will allow user to post a comment |
| POST | `/gifs/:id` | user can add gif to their faves in gif details|
| GET | `/gifs/:id` | shows specific gifs details |
| PUT | `/user/profile` | user will be able to update their username |
| GET | `/user/profile` | shows list of all fave gifs for user |
| DELETE | `/gifs/:id` | allows user to undone thir favorites which will remove gif from their faves list |



## Wireframes 

![Home-Search](./imgs/Untitled_Artwork%2031.png)

![User-Details](./imgs/Untitled_Artwork%2032.png)


## UserStory
- As a non-user i will have access to gifs library
- As a non-user i view gif details/comments
- As a non-user i will NOT be able to "like" gifs
- As a non-user i will NOT have the ability to leave any comments
- As a non-user i will NOT have a profile
- As a non-user i will be able create an account

- As a User i will have access to the gif library
- As a User i will be able to view gif details/comments
- As a User i will be able to like gifs
- As a User i will be able to leave a comment on gifs
- As a User i will be able to login/view my profile


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
