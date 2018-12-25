"use strict";

class User {
    constructor(name, lastname, ava,id){
        this.name = name;
        this.lastname = " "+lastname;
        this.ava = ava;
        this.id = "user"+id;
    }
}

function getRandomArbitrary(min, max) {
    return  Math.floor( Math.random() * (max - min) + min);
  }