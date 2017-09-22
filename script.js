"use strict";

let server = {
    data: 0,
    convertToString: function (callback) {
        callback( () => {
        return this.data + "";
      });
    }
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
      server.data = data;
      server.convertToString(this.notification());
    },
    notification: function () {
      return (callback) => {
         this.result = callback();
      };
   }
   
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


/*
Задание №6. Функции
Есть следующий код:
let server = {
   data: 0,
   convertToString: function (callback) {
      callback((function () {
         return this.data + "";
      }).bind(this));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      server.data = data;
      server.convertToString(this.notification());
   },
   notification: function () {
      return (function (callback) {
         this.result = callback();
      }).bind(this);
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
Измените код используя стрелочные функции, чтобы в коде не использовались методы bind().

*/