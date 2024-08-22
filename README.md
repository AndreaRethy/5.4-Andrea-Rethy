# 5.4-Andrea-Rethy

Before use, import the json:

```
mongoimport --collection=Restaurants --db=restaurantsdb --type=json --jsonArray restaurants.json
```

To start server:

```
 npm run dev
```

It is automatically refreshing, but gets stuck from time to time. If a query is not performing as expected please exit and run the above command again.

The queries were meant be used with Monk.

Check the queries one by one.
