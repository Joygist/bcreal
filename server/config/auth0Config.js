import {auth} from "express-oauth2-jwt-bearer"

const jwtCheck = auth({
    audience: "https://real-estate-best-choice.vercel.app",
    issuerBaseURL: "https://dev-jf8clsp5ojiwxyg8.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck