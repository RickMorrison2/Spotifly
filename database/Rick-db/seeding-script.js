const faker = require('faker');
const fs = require('fs');
const wordList = require('./words');

let images = [
  "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1519952858562-54e1df53319c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1514668899050-f91140ee495b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1516685499100-f272ed42223b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1416615267350-a82c5a347dbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/35/BIR62RGGjGxN5nrbnzwu_3.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1496400554956-2641ee73a932?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1491140162236-6448ea91bc8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1485761954900-f9a29f318567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1498736162085-1638bc6a2fc2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1496450080853-5f78c43af9e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1516685499100-f272ed42223b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1500869386957-078e5e53ccf7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1516685499100-f272ed42223b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1489835373123-77857c895b57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1470290449668-02dd93d9420a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1416615267350-a82c5a347dbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1439566773766-06344d7ee69a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1503776768674-0e612f631345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1519952858562-54e1df53319c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1504898931369-4e77cb7fdd29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1503776768674-0e612f631345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1454600366270-5c75e4386c7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1514668899050-f91140ee495b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1501947248335-9b511c0cb5c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1485761954900-f9a29f318567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1503776768674-0e612f631345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1439566773766-06344d7ee69a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1501947248335-9b511c0cb5c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1470238660368-09dd17cab0b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1416615267350-a82c5a347dbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/35/BIR62RGGjGxN5nrbnzwu_3.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  "https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  ];

  const createRandomNum = function (min, max) {
    return Math.ceil(Math.random() * (max - min)) + (min - 1);
  };

  const randomPhoto = () => images[createRandomNum(0, 100)];
  const randomAdjective = () => wordList.adjectives[createRandomNum(0, 225)];
  const randomNoun = () => wordList.nouns[createRandomNum(0, 280)]
  const randomBand = () => `${randomAdjective()}${randomNoun()}`;
  const randomArtist = () => `${faker.name.firstName()} ${faker.name.lastName()}`;
  // const randomArtist = () => `${faker.name.findName()}`;

  const artistNames = new Set();
  faker.seed(1234);
  while (artistNames.size < 5000) {
    artistNames.add(randomArtist());
  }
  while (artistNames.size >= 5000 && artistNames.size < 7000) {
    artistNames.add(randomBand());
  }
  
  while (artistNames.size >= 7000 && artistNames.size < 8500) {
    artistNames.add(`The ${randomBand()}s`);
  }

  while (artistNames.size >= 8500 && artistNames.size < 8700) {
    artistNames.add(randomNoun())
  }

  while (artistNames.size >= 8700 && artistNames.size < 10000) {
    artistNames.add(`${randomArtist()} and The ${randomBand()}s`)
  }

  const artistArray = Array.from(artistNames);
  
  // const columnNames = ['id', ' artist', ' image'];

  const createFakeArtists = () => {
    fs.writeFileSync('./data.csv', "id, artists, image\n");
    let count = 1;
    for (let j = 0; j < 1000; j++) {
      let pairs = '';
      for (let i = 0; i < 10000; i++) {
        const id = count;
        const artist = `${artistArray[createRandomNum(0, 9999)]}`;
        const image = randomPhoto();
        const artistImagePair = `${id}, ${artist}, ${image}`;
        pairs += `${artistImagePair}\n`;
        count++;
      } 
      fs.appendFileSync('./data.csv', pairs);
    }
  };

  createFakeArtists();