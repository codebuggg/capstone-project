import jwt from "jsonwebtoken";

export const KEY = "secret";

export const signToken = (id) => jwt.sign({ id }, KEY);

export const setToken = async (res, token) => res.setHeader("Authorization", `Bearer ${token}`);
