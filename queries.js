const monk = require('monk');
const db = monk('localhost/restaurantsdb');
const restaurants = db.get('Restaurants');

/* 1. Write a query to display all documents in the Restaurants collection. */
// restaurants.find({})
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


/* 2. Write a query to display the restaurant_id, name, borough, and cuisine of all documents in the Restaurants collection. */
// restaurants.find({}, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     cuisine: 1 } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


  /* 3. Write a query to display the restaurant_id, name, borough, and cuisine, but excluding the _id field for all documents in the Restaurants collection. */
//   restaurants.find({}, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     cuisine: 1,
//     _id: 0  } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


  /* 4. Write a query to display restaurant_id, name, borough, and zip code, but excluding the _id field for all documents in the Restaurants collection. */
//   restaurants.find({}, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     'address.zipcode': 1,
//     _id: 0  } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


/* 5. Write a query to show all the restaurants that are in the Bronx. */
// restaurants.find({ borough: 'Bronx' })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


/* 6. Write a query to show the first 5 restaurants that are in the Bronx. */
// restaurants.find({ borough: 'Bronx'}, { limit: 5 } )
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


/* 7. Write a query to display all 5 restaurants after skipping the first 5 that are in the Bronx. */
//   restaurants.find({ borough: 'Bronx'}, { limit: 5, skip: 5 } )
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


  /* 8. Write a query to find the restaurants that have a score greater than 90. */
//   restaurants.find({ "grades.score": { $gt: 90 } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


/* 9. Write a query to find the restaurants that have a score greater than 80 but less than 100. */
  // restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } })
  // .then(docs => {
  //   console.log(docs);
  // })
  // .catch(err => {
  //   console.error(err);
  // })
  // .finally(() => {
  //   db.close();
  // });

  /* 10. Write a query to find restaurants that are located at a longitude less than -95.754168. */
  // restaurants.find({ "address.coord.0": { $lt: -95.754168 } })
  // .then(docs => {
  //   console.log(docs);
  // })
  // .catch(err => {
  //   console.error(err);
  // })
  // .finally(() => {
  //   db.close();
  // });


  /* 11. Write a MongoDB query to find restaurants that do not cook 'American' food and have a score greater than 70 and longitude less than -65.754168.*/
  // restaurants.find({
  //   $and: [
  //       { "address.coord.0": { $lt: -65.754168 } },
  //       { "grades.score": { $gt: 90 } },
  //       { "cuisine": { $not: /American/i } }
  //   ]
  // })
  // .then(docs => {
  //   console.log(docs);
  // })
  // .catch(err => {
  //   console.error(err);
  // })
  // .finally(() => {
  //   db.close();
  // });


  /* 12. Write a query to find the restaurants that do not prepare 'American' food and have a score higher than 70 and which, moreover, are located in longitudes lower than -65.754168.**Note**: Do this query without using the $and operator. */
//   restaurants.find({
//     "address.coord.0": { $lt: -65.754168 },
//     "grades.score": { $gt: 70 },
//     "cuisine": { $not: /American/i } 
//  })
//  .then(docs => {
//    console.log(docs);
//  })
//  .catch(err => {
//    console.error(err);
//  })
//  .finally(() => {
//    db.close();
//  });


/* 13. Write a query to find restaurants that do not prepare 'American' food, have an 'A' grade and do not belong to Brooklyn. The document should be displayed according to cuisine in descending order. */
// restaurants.find({
//   "borough": { $not: /Brooklyn/i },
//   "grades.grade": 'A',
//   "cuisine": { $not: /American/i }
// }, {
//   sort: { "cuisine": -1 }
// })
// .then(docs => {
//   console.log(docs);
// })
// .catch(err => {
//   console.error('Query Error:', err);
// })
// .finally(() => {
//   db.close();
// });


/* 14. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'Wil' in the first three letters of their name. */
// restaurants.find({
//   "name": { $regex: /^Wil/ }
// }, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     cuisine: 1 } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


/* 15. Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'ces' in the last three letters of their name. */
// restaurants.find({
//   "name": { $regex: /ces$/ }
// }, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     cuisine: 1 } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


/* 16. Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'Reg' anywhere in their name. */
// restaurants.find({
//   "name": { $regex: /Reg/ }
// }, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     cuisine: 1 } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


  /* 17. Write a query to find restaurants that belong to the Bronx and prepare American or Chinese dishes. */
//   restaurants.find({
//    "borough": 'Bronx',
//    "cuisine": { $in: [/American/i, /Chinese/i] } 
//  })
//  .then(docs => {
//    console.log(docs);
//  })
//  .catch(err => {
//    console.error(err);
//  })
//  .finally(() => {
//    db.close();
//  });


 /* 18. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that belong to Staten Island, Queens, Bronx, or Brooklyn. */
// restaurants.find({
//   "borough": { $in: [/Staten Island/i, /Queens/i, /Bronx/i, /Brooklyn/i] }
// }, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     cuisine: 1 } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });


  /* 19. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that are NOT in Staten Island, Queens, Bronx, or Brooklyn. */
  // restaurants.find({
  //   "borough": { $nin: [/Staten Island/i, /Queens/i, /Bronx/i, /Brooklyn/i] }
  // }, { fields: { 
  //     restaurant_id: 1, 
  //     name: 1, 
  //     borough: 1, 
  //     cuisine: 1 } })
  //   .then(docs => {
  //     console.log(docs);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  //   .finally(() => {
  //     db.close();
  //   });


/* 20. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that score less than 10. */
// restaurants.find({
//   "grades": { $elemMatch: { "score": { $lt: 10 } } }
// }, { fields: { 
//     restaurant_id: 1, 
//     name: 1, 
//     borough: 1, 
//     cuisine: 1 } })
//   .then(docs => {
//     console.log(docs);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     db.close();
//   });

/* 25. Write a query to sort restaurants by name in ascending order. */
// restaurants.find({}, {
//   sort: { "name": 1 }
// })
// .then(docs => {
//   console.log(docs);
// })
// .catch(err => {
//   console.error('Query Error:', err);
// })
// .finally(() => {
//   db.close();
// });


/* 26. Write a query to sort restaurants by name in descending order. */
// restaurants.find({}, {
//   sort: { "name": -1 }
// })
// .then(docs => {
//   console.log(docs);
// })
// .catch(err => {
//   console.error('Query Error:', err);
// })
// .finally(() => {
//   db.close();
// });


/* 27. Write a query to organize restaurants by cuisine name in ascending order and by neighborhood in descending order. */
restaurants.find({}, {
  sort: { 
    "cuisine": 1,
    "borough": -1
   }
})
.then(docs => {
  console.log(docs);
})
.catch(err => {
  console.error('Query Error:', err);
})
.finally(() => {
  db.close();
});



/*
21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si són 'American ', 'Chinese' o el name del restaurant comença amb lletres 'Wil'.
22. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un grade de "A" i un score d'11 amb un ISODate "2014-08-11T00:00:00Z".
23. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de l'array de graus conté un grade de "A" i un score 9 amb un ISODate "2014-08-11T00:00:00Z".
24. Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element de l'array coord conté un valor entre 42 i 52.
28. Escriu una consulta per saber si les direccions contenen el carrer.
29. Escriu una consulta que seleccioni tots els documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double.
30. Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7.
31. Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name.
32. Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'Mad' com a primeres tres lletres del seu name.

**Certificaràs el teu nivell 1 si construeixes 17 consultes correctes.**

**Tindràs nivell 2 si construeixes entre 17 i 25 consultes correctes.**

**Nivell 3 si aconsegueixes construir correctament més de 25 consultes correctes!!!**
*/