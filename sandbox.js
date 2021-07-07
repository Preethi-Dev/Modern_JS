//object literal notation
// let user = {
//     name: 'mike', //property
//     age: 30, //property
//     location: 'europe', //property
//     blogs: ['use old vs new variable', '100 days python journey'],
//     login: function(){ //method
//         console.log('login successfully');
//     }, 
//     logout: function(){ //method
//         console.log('logout successfully');
//     },
//     logBlogs: function(){ //use normal function for 'this' keyword
//         this.blogs.forEach((item, index) => {
//             console.log(`Blog ${index} is ${item}`);
//         })
//     }
// };
let user = {
    name: 'mike', //property
    age: 30, //property
    location: 'europe', //property
    blogs: ['use old vs new variable', '100 days python journey'],
    login(){ //method => we can rewrite it like login => function(){} ===> login(){}
        console.log('login successfully');
    }, 
    logout(){ //method
        console.log('logout successfully');
    },
    logBlogs(){ //use normal function for 'this' keyword
        this.blogs.forEach((item, index) => {
            console.log(`Blog ${index} is ${item}`);
        })
    }
};
user.logBlogs();
console.log(this); //windows object => global object