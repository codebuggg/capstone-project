import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { expressjwt } from "express-jwt";
import db from "./models";
import { setToken, signToken, KEY } from "./helpers";
import swaggerDocument from "./swagger.json";
import swaggerUi from "swagger-ui-express";

const {
    users: User,
    products: Product,
} = db.sequelize.models;

const port = 8000;

const app = express();
app.use(express.json());
app.use(cors({
    exposedHeaders: ["Authorization"]
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));

app.use(expressjwt({
    secret: KEY,
    algorithms: ["HS256"],
}).unless({
    path: ["/api/login", "/api/sign_up"]
}))

app.get("/api/user", async (req, res) => {
    const user = await User.findByPk(req.auth.id);
    res.send(user);
})

app.get("/api", async (req, res) => {
    const products = await Product.findAll();
    res.send(products);
})

app.post("/api/login", async (req, res) => {
    const {
        email,
        password
    } = req.body;
    let user = await User.findOne({
        where: {
            email
        }
    });
    if (user) {
        const matches = await bcrypt.compare(password, user.password);
        if (matches) {
            const token = await signToken(user.id);
            setToken(res, token);
            return res.send(user);
        }
    }
    res.
    status(401)
    .send({
        error: "Invalid login credentials",
    })
})


app.post("/api/sign_up", async (req, res) => {
    const {
        email,
        password
    } = req.body;
    let salt = await bcrypt.genSalt(10);
    let _password = await bcrypt.hash(password, salt);
    const user = await User.create({
        email,
        password: _password,
    });
    if (user.id) {
        const token = await signToken(user.id);
        setToken(res, token);
        res.send(user);
    }
})

app.listen(port, () => console.log(`Server running at ${port}`));