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
    projects: [
        {title: 'Home automation', period: '3 month'},
        {title: 'Automate portal', period: '2 week'}
    ],
    login: function(){ //method 
        console.log('login successfully');
    }, 
    logout(){ //method => we can rewrite it like logout => function(){} ===> logout(){}
        console.log('logout successfully');
    },
    logBlogs(){ //use normal function for 'this' keyword
        this.blogs.forEach((item, index) => {
            console.log(`Blog ${index} is ${item}`);
        })
    },
    logProjects: function(){
        this.projects.forEach((project, count) => {
            console.log(`project ${count} is ${project.title} take ${project.period} time`);
        })
    }
};
user.logProjects();
user.logBlogs();
console.log(this); //windows object => global object