// you have array of object where each object have year, sort it to descending:

let arr = [
    { 
        year: 2012
    },
    { 
        year: 2014
    },
    { 
        year: 2013
    }
  ];
  
  arr.sort((y, x) => x.year - y.year);
  
  console.log(arr);

//  you have users array and display it in html with innerHTML:

  let usersArr = [
    { 
      name: "nino", 
      age: 22 
    },
    { 
        name: "nika", 
        age: 23 
    },
    { 
        name: "gocha", 
        age: 13 
    },
  ];

  let usersArrContainer = document.getElementById("container");
  
  let usersArrHTML = usersArr.map(item =>    
   `<div>
      <h1>${item.name}</h1> 
      <p> ${item.age}</p>
    </div>`
   );
  
  usersArrContainer.innerHTML = usersArrHTML.join('');


//you have a laptops array and find the most expensive one and console it:

let laptops = [
    {
        brand: "Apple", 
        price: 10 
    },
    { 
        brand: "Lenovo", 
        price: 20 
    },
    { 
        brand: "HP",
        price: 30 
    },
  ];
  
  laptops.sort((a, b) => b.price - a.price);
  
  let max = laptops[0];

  console.log(max);




  const laptops2= [
  {  
    price: 1999 
  },
  { 
    price: 1799
  },
  {
    price: 1599 
  },
  {
     price: 1899 
  },
  ];
  
  const expensive = laptops2.reduce((max, laptop) => (laptop.price > max.price ? laptop : max));

  console.log(expensive);
  
  