
# Alan News App

A Conversational Voice Controlled React News Application using Alan AI which provides the news by categories, terms and sources. 
Alan AI is a revolutionary speech recognition software that allows you to add voice capabilities to your applications. It allows you to control absolutely everything in the app using your voice.
## Deployment

To deploy this project run

```bash
  npm start
```


## API Reference


```http
  https://newsapi.org
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `4e090c4e2cf14db1ba383fbb353c9ddc` | `string` |  My API key |

#### Get item

```http
  GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `source`      | `string` | Name of source to fetch the news of particular news source |

Similarly I have used other References according to type of news I want to see like news by category or term.


## Features

- You can control everything using voice command.
- You can check news on the topic of your wish.
- It reads the headlines for you if you ask to do so.
- It opens the full article of the news if you ask.
- The app can also have the friendly chat.


## Screenshot

![Screenshot (12)](https://user-images.githubusercontent.com/109591830/190815942-70cb7593-a917-413f-8865-93b2cb8f93da.png)
![Screenshot (13)](https://user-images.githubusercontent.com/109591830/190816066-f062c690-7686-4b1c-ae1c-bb0d60f07c60.png)
![Screenshot (14)](https://user-images.githubusercontent.com/109591830/190816089-e011ecd5-7b10-4b9b-b232-5fa379c74fd0.png)
![Screenshot (11)](https://user-images.githubusercontent.com/109591830/190816110-7d2c3832-e714-4132-b517-f229e442fc9c.png)
