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

**PROJECT MUTATION:**

```
mutation addProject($data: ProjectInput!){
  addProject(data:$data)
}

```
```
{
  "data": {
    "name": "m3",
    "logo": "leon"
  }
}
```

**USER MUTATION:**

```
mutation addUser($data: UserInput!){
  addUser(data:$data)
}

```
```
{
  "data": {
    "first_name": "erasmo",
    "last_name": "leon",
    "email": "erasmo.lele3@gmail.com",
    "role": "admin",
    "password": "qweqwe123"
  }
}
```