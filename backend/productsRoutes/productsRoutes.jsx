import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({message: "Getting"})
});

router.post("/", (req, res) => {
    res.status().json({message: "Posting"})
});

router.put("/:id", (req, res) => {
    res.status(201).json({message: "Updating"})
});

router.delete("/:id", (req, res) => {
    res.status(201).json({message: "Deleting"})
});