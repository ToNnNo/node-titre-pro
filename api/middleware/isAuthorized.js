const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {

    // Bearer token
    if( request.headers.authorization !== undefined ) {

        const token = request.headers.authorization.split(" ")[1];

        try{
            const user = jwt.verify(token, "commentestvotreblanquette", { algorithm: 'HS256'});

            console.log(user);

            // verifier role
            next();
        }catch (e) {
            response.status(401).json( {error: "Unauthorized"} );
        }

    } else {
        response.status(401).json( {error: "Unauthorized"} );
    }

}
