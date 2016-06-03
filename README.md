**ARTICLE QUERY:**

```
{
  article(id:10) {
    id
  }
}

```
**ARTICLE MUTATION:**

```
mutation addArticle($data: ArticleInput!){
  addArticle(data: $data)
}

```
```
{
  "data": {
    "id": 123,
    "title": "123",
    "channel_id": "123",
    "user_id": "123",
    "author_id": "123"
  }
}
```

**CHANNEL MUTATION:**

```
mutation addChannel($data: ChannelInput!){
  addChannel(data: $data)
}

```
```
{
  "data": {
    "id": 123,
    "name": "Some Channel",
    "description": "Some Description"
  }
}
```