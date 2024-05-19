// let arr = [1 , 2 , 3 , 4 , 5 ];
// // console.log(6,5,4,3,2,1,0)
// arr.unshift(0)

// arr.reverse()

// arr.unshift(6)
// console.log(arr)

// let arr1 = [1,2,3,4,5]
// let arr2 = [5,6,7,8,9]
// let a = arr1.slice(0,4)
// console.log(a)
// let b = a.concat(arr2)
// console.log(b)

//find even in an array through for each loop
// evennum = [];
// let number = [1,2,3,4,5,6,7,8,9,0] 
// number.forEach(item => {if (item % 2 === 0 )
//     {
//         evennum.push(item)
//         }})

//         console.log(evennum)

//         const companies = [
//             { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//             { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//             { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//             { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//             { name: 'Company Five', category: 'Technology', start: 2009, end:
//             2014 },
//             { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//             { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//             { name: 'Company Eight', category: 'Technology', start: 2011, end:
//             2016 },
//             { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
//             ];
//             // Get only retail companies through filter
// let retailcompany = companies.filter(
//    (company) => company.category === 'Retail'
// )
// //  console.log(retailcompany)

//  // Get companies that started in or after 1980 and ended in or before 2005
//  let retaiilcompany = companies.filter(
//     (company) => company.start >= 1980 && company.end <= 2005
//  )
// //   console.log(retaiilcompany)

// // Create an array of company names through map
// let arrayCompany = companies.map((company) => company.name )
// console.log(arrayCompany)

// // Create an array with just company and category
// const companyInfo = companies.map (company => {
//    return {
//    name: company.name,
//    category: company.category,
//    };
//    });
//    console.log(companyInfo);

const people = [
   {
   firstName: 'John',
   lastName: 'Doe',
   email:'john@gmail.com',
   phone: '111-111-1111',
   age: 30,
   },
   {
   firstName: 'Jane',
   lastName: 'Poe',
   email: 'jane@gmail.com',
   phone: '222-222-2222',
   age: 25,
   },
   {
   firstName: 'Bob',
   lastName: 'Foe',
   email: 'bob@gmail.com',
   phone: '333-333-3333',
   age: 45,
   },
   {
   firstName: 'Sara',
   lastName: 'Soe',
   email: 'Sara@gmail.com',
   phone: '444-444-4444',
   age: 19,
   },
   {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
   },
   ];
   let youngpeople = [];
   people.forEach((item) => 
   {
      if(item.age<=25 ){
     let namee =  `${item.firstName} , ${item.lastName} email: ${item.email}`
   //   console.log(namee);
     youngpeople.push(namee) 
      }
      else
      {
         // console.log("sorry bigger ages")
      }
     youngpeople.push()      
   })
   // console.log(youngpeople)
   let number = [2, -30, 50, 20, -12, -9 , 7]
   let positivesum = 0;
   let rock = [];
   number.filter((digit)=> 
   {
      return (digit > 0) 
   }).forEach((positivevalue) => 
   {  positivesum += positivevalue
      rock.push(positivesum)
   });
   // console.log(rock)
   let word = ['developer' , 'programmer' , 'coder']
   //make in new array and also first letter capital
   let newWord = word.map((word) => 
   {
     let change = word.toString()
     let bigChange = change.charAt(0).toUpperCase() 
     let neww = change.slice(1) 
     let yoo = bigChange.concat(neww)
     return yoo
   })
   console.log(newWord)