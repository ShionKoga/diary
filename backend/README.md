# API

```text
> POST /api/register

{
  "name": "max",
  "password": "123"
}
```

```text
> POST /api/login

{
  "name": "max",
  "password": "123"
}
```

```text
> POST /api/diaries
> Authorization: <JWT>

{
  "title": "Apple",
  "body": "Important apple"
}
```

```text
> PUT /api/diaries
> Authorization: <JWT>

{
  "id": 1,
  "title": "Apple",
  "note": "Very important apple"
}
```

```text
> GET /api/diaries
> Authorization: <JWT>
```

```text
> DELETE /api/diaries?itemId=1
> Authorization: <JWT>
```