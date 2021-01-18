const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCtfY0q9h_rmUxqYhHPF2ULT_motkOMwcY",
    authDomain: "e-shoes-51412.firebaseapp.com",
    projectId: "e-shoes-51412",
});

var db = firebase.firestore();

var products = [
    {
        "id": 1,
        "category": "nike",
        "title": "Nike Joyrid Run",
        "description": "asdasdas dasdasd asdasdqr arewqwerq",
        "img": "nike-1.jpg",
        "size": [
        "m"
        ],
        "price": 3630,
        "outstanding": true,
        "discount": "",
        "suggested": true
    },
    {
        "id": 2,
        "category": "nike",
        "title": "Nike Free RN 5.0",
        "description": "",
        "img": "nike-2.jpg",
        "size": [
        "s",
        "m"
        ],
        "price": 6350,
        "outstanding": "",
        "discount": 15,
        "suggested": ""
    },
    {
        "id": 3,
        "category": "nike",
        "title": "Nike Air zoom Winflo 7",
        "description": "",
        "img": "nike-3.jpg",
        "size": "",
        "price": 4170,
        "outstanding": true,
        "discount": 15,
        "suggested": ""
    },
    {
        "id": 4,
        "category": "nike",
        "title": "Nike Free RN 5.0",
        "description": "",
        "img": "nike-4.jpg",
        "size": [
        "s",
        "m",
        "l",
        "xl",
        "xxl"
        ],
        "price": 5590,
        "outstanding": true,
        "discount": 20,
        "suggested": ""
    },
    {
        "id": 5,
        "category": "nike",
        "title": "Nike Air zoom Winflo 7",
        "description": "",
        "img": "nike-1.jpg",
        "size": "",
        "price": 3400,
        "outstanding": true,
        "discount": 15,
        "suggested": ""
    },
    {
        "id": 6,
        "category": "nike",
        "title": "Nike Free RN 5.0",
        "description": "",
        "img": "nike-2.jpg",
        "size": [
        "s"
        ],
        "price": 5900,
        "outstanding": "",
        "discount": 15,
        "suggested": ""
    },
    {
        "id": 7,
        "category": "nike",
        "title": "Nike Joyrid Run",
        "description": "",
        "img": "nike-3.jpg",
        "size": [
        "s",
        "m"
        ],
        "price": 3610,
        "outstanding": "",
        "discount": ""

    },
    {
        "id": 8,
        "category": "nike",
        "title": "Nike Free RN 5.0",
        "description": "",
        "img": "nike-4.jpg",
        "size": [
        "xl"
        ],
        "price": 9000,
        "outstanding": "",
        "discount": 20,
        "suggested": true
    },
    {
        "id": 9,
        "category": "nike",
        "title": "Nike Free RN 5.0",
        "description": "",
        "img": "nike-2.jpg",
        "size": [
        "s"
        ],
        "price": 5900,
        "outstanding": "",
        "discount": 15,
        "suggested": ""
    },
    {
        "id": 10,
        "category": "adidas",
        "title": "Adidas Ultraboost",
        "description": "",
        "img": "adidas-2.jpg",
        "size": "",
        "price": 1640,
        "outstanding": true,
        "discount": "",
        "suggested": true
    },
    {
        "id": 11,
        "category": "adidas",
        "title": "Adidas Ultraboost",
        "description": "",
        "img": "adidas-4.jpg",
        "size": "",
        "price": 3370,
        "outstanding": "",
        "discount": "",
        "suggested": ""
    },
    {
        "id": 12,
        "category": "adidas",
        "title": "Adidas Solar Glide",
        "description": "",
        "img": "adidas-1.jpg",
        "size": "",
        "price": 2850,
        "outstanding": true,
        "discount": "",
        "suggested": ""
    },
    {
        "id": 13,
        "category": "adidas",
        "title": "Adidas PulseBoost",
        "description": "",
        "img": "adidas-2.jpg",
        "size": [
        "chico",
        "mediano",
        "grande"
        ],
        "price": 3340,
        "outstanding": true,
        "discount": 30,
        "suggested": ""
    },
    {
        "id": 14,
        "category": "adidas",
        "title": "Adidas Ultraboost",
        "description": "",
        "img": "adidas-3.jpg",
        "size": "",
        "price": 1870,
        "outstanding": "",
        "discount": "",
        "suggested": ""
    },
    {
        "id": 15,
        "category": "adidas",
        "title": "Adidas Solar Glide",
        "description": "",
        "img": "adidas-4.jpg",
        "size": "",
        "price": 5540,
        "outstanding": true,
        "discount": "",
        "suggested": ""
    },
    {
        "id": 16,
        "category": "adidas",
        "title": "Adidas Boost",
        "description": "",
        "img": "adidas-1.jpg",
        "size": "",
        "price": 180,
        "outstanding": "",
        "discount": "",
        "suggested": ""
    },
    {
        "id": 17,
        "category": "puma",
        "title": "Puma Lqdcell FM",
        "description": "",
        "img": "puma-1.jpg",
        "size": [
        "s",
        "m"
        ],
        "price": 690,
        "outstanding": true,
        "discount": "",
        "suggested": ""
    },
    {
        "id": 18,
        "category": "puma",
        "title": "Puma NGRY Commet",
        "description": "",
        "img": "puma-2.jpg",
        "size": "",
        "price": 1040,
        "outstanding": "",
        "discount": 15
    },
    {
        "id": 19,
        "category": "puma",
        "title": "Puma cell 235",
        "description": "",
        "img": "puma-3.jpg",
        "size": "",
        "price": 60,
        "outstanding": "",
        "discount": "",
        "suggested": true
    },
    {
        "id": 20,
        "category": "puma",
        "title": "Puma x12d",
        "description": "",
        "img": "puma-4.jpg",
        "size": [
        "m"
        ],
        "price": 1150,
        "outstanding": true,
        "discount": 15,
        "suggested": ""
    },
    {
        "id": 21,
        "category": "puma",
        "title": "Puma cell 235",
        "description": "",
        "img": "puma-1.jpg",
        "size": [
        "s",
        "m",
        "l"
        ],
        "price": 3090,
        "outstanding": "",
        "discount": "",
        "suggested": ""
    },
    {
        "id": 22,
        "category": "puma",
        "title": "Puma x12d",
        "description": "",
        "img": "puma-2.jpg",
        "size": [
        "xs",
        "s",
        "m",
        "l",
        "xl"
        ],
        "price": 3740,
        "outstanding": true,
        "discount": "",
        "suggested": ""
    },
    {
        "id": 23,
        "category": "puma",
        "title": "Puma cell 235",
        "description": "",
        "img": "puma-3.jpg",
        "size": [
        "s",
        "m"
        ],
        "price": 860,
        "outstanding": "",
        "discount": 30,
        "suggested": ""
    },
    {
        "id": 24,
        "category": "puma",
        "title": "Puma x12d",
        "description": "",
        "img": "puma-2.jpg",
        "size": [
        "xs",
        "s",
        "m",
        "l",
        "xl"
        ],
        "price": 3740,
        "outstanding": true,
        "discount": "",
        "suggested": ""
    }
];

products.forEach((obj) => {
  db.collection("products")
    .add({
        id: obj.id,
        category: obj.category,
        title: obj.title,
        description: obj.description,
        img: obj.img,
        size: obj.size,
        price: obj.price,
        outstanding: obj.outstanding,
        discount: obj.discount,
    })
    .then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al agregar un documento: ", error);
    });
});