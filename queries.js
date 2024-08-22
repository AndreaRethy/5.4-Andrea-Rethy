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
  restaurants.find({
    "borough": { $not: /Brooklyn/i },
    "grades.grade": 'A',
    "cuisine": { $not: /American/i } 
 })
 .then(docs => {
   console.log(docs);
 })
 .catch(err => {
   console.error(err);
 })
 .finally(() => {
   db.close();
 });


/*
14. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Wil' en les tres primeres lletres en el seu nom.
15. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'ces' en les últimes tres lletres en el seu nom.
    a) Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
16. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Reg' en qualsevol lloc del seu nom.
17. Escriu una consulta per trobar els restaurants que pertanyen al Bronx i preparen plats Americans o xinesos.
18. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per aquells restaurants que pertanyen a Staten Island, Queens, Bronx o Brooklyn.
19. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn.
20. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin una nota menor que 10.
21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si són 'American ', 'Chinese' o el name del restaurant comença amb lletres 'Wil'.
22. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un grade de "A" i un score d'11 amb un ISODate "2014-08-11T00:00:00Z".
23. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de l'array de graus conté un grade de "A" i un score 9 amb un ISODate "2014-08-11T00:00:00Z".
24. Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element de l'array coord conté un valor entre 42 i 52.
25. Escriu una consulta per organitzar els restaurants per nom en ordre ascendent.
26. Escriu una consulta per organitzar els restaurants per nom en ordre descendent.
27. Escriu una consulta per organitzar els restaurants pel nom de la cuisine en ordre ascendent i pel barri en ordre descendent.
28. Escriu una consulta per saber si les direccions contenen el carrer.
29. Escriu una consulta que seleccioni tots els documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double.
30. Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7.
31. Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name.
32. Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'Mad' com a primeres tres lletres del seu name.

**Certificaràs el teu nivell 1 si construeixes 17 consultes correctes.**

**Tindràs nivell 2 si construeixes entre 17 i 25 consultes correctes.**

**Nivell 3 si aconsegueixes construir correctament més de 25 consultes correctes!!!**
*/