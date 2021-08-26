const shop=
    {
        name :'Ash-Shop',
        address:'Near By you',
        owner: 'Sejan Mahmud',
        profit:'1',
        employ:'4',
        product:{
            laptop:'apple,hp,dell',
            mobile:'apple,xaomi,realmi',
        }
    }

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const shopparse = JSON.parse(shopStringified);
console.log(shopparse);
console.log(shopparse.owner);



const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name);


const premikas= { name: 'keka ferdousi' , cars: { brand: 'toyota'} }

const {brand} = premikas.cars;

console.log(brand);




const myShop=
    {
        name :'Ash-Shop',
        address:'Near By you',
        owner: 'Sejan Mahmud',
        profit:'1',
        employ:'4',
        product:{
            laptop:'apple,hp,dell',
            mobile:'apple,xaomi,realmi',
        }
    }

const myShopStringfied = JSON.stringify(myShop);
console.log(myShopStringfied);

const myShopStringfiedParse = JSON.parse(myShopStringfied);
console.log(myShopStringfiedParse);