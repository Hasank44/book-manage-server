const booksRoute = require('./booksRoute');

const routes = [
    {
        path: '/books',
        handler: booksRoute
    }
];

module.exports = route =>{
    routes.forEach( Sroute =>{
        if( Sroute.path == '/'){
            route.get( Sroute.path, Sroute.handler);
        } else{
            route.use( Sroute.path, Sroute.handler);
        };
    });
};