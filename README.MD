# nova-coins-tranfser


<p>

 <a href="https://github.com/LanStudio1"><img src="https://img.shields.io/static/v1?label=powered%20by&message=TkShaB7&color=000636&style=for-the-badge&logo=Windows%20Terminal&logoColor=fff%22/%3E"/></a>

 <a href="https://npmjs.com/nova-coins-tranfser"><img src="https://img.shields.io/npm/v/nova-coins-tranfser.svg?style=for-the-badge" alt="NPM version" /></a>

 <a href="https://npmjs.com/nova-coins-tranfser"><img src="https://img.shields.io/npm/dt/nova-coins-tranfser.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>



</p>



## Installation


### Install **[nova-coins-tranfser](https://npmjs.com/nova-coins-tranfser)**


```sh

$ npm install nova-coins-tranfser

```


### Install **[discord.js](https://npmjs.com/package/discord.js)**


```sh

$ npm install discord.js

```


# Features


- Simple & easy to use 🎗️

- Support Eng & Arb NovaBot language 🔗

- Support discord.js version 14 🔖

- Easy setup & setting for each server ⚙️

- Edit & Get any data with simple function ⛏️

- Returns full data of transfer 📡

- Event & Collection system 🔗

### Note !

 - nodeJs v16 <=

## Getting Started


At first install the [nova-coins-tranfser](https://npmjs.com/nova-coins-tranfser) package


```js

const { Client, Intents, GatewayIntentBits, } = require("discord.js"); // npm i discord.js

const client = new Client({ 

  intents: [
    
GatewayIntentBits.Guilds, 

  GatewayIntentBits.GuildMessages,

    GatewayIntentBits.GuildMembers
   ] 

});


const { createPurchaseEmbed, isConfirmationMessage, TaX } = require("nova-coins-tranfser"); // npm i nova-coins-transfer

/// Important !


const price = 1000; // The Price

const botid = '1245727635536085032';// The Bot Id

 const bank = '1213474808050880515'; // Bank Id


// support
client.on('messageCreate', async (message) => {
   
    if (message.content.startsWith('!support')) {
        
      const price = 1000; //the Price
        const bank = '1213474808050880515'; // Bank id

     
        const finalPrice = TaX(price);

        // embed message
        const embed = createPurchaseEmbed(price, bank, botid { title: 'طلب دعم', color: '#FF0000', description: `${finalPrice}` });

        return message.channel.send({ embeds: [embed] });
    }

    // confirm
    if (message.content.startsWith('!confirm')) {

// const finalPrice = tax(price); // if you want with tax you can use this  


        // check the message
        const isConfirmed = isConfirmationMessage(message.content, bank, price, botid);//if you want with tax add     , finalPrice 

        if (isConfirmed) {
            return message.reply('✅Transfer has been confirmed');
        } else {
            return message.reply('❌ The confirmation message does not match the required format');
        }

// tax
if (message.content.startsWith('!tax')) {
    const args = message.content.split(' ');
    const price = parseInt(args[1], 10);

    const finalPrice = tax(price); // assuming tax is a function

    if (finalPrice) {
        return message.reply(`The Tax Is ${finalPrice}`);
    } else {
        return message.reply('❌ Error Calculating Tax');
    }
}

client.login("");


// for use only tax

const { Tax } = require("nova-coins-tranfser");

console.log(Tax("5000")); // number with tax.

```

## Thanks. [TkShaB7.™️](https://discord.com/users/1213474808050880515).

## Thanks. [Support](https://discord.gg/lans).