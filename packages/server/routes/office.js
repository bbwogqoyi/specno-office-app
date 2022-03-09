import express from 'express';
import { StatusCodes } from 'http-status-codes';
import officeModel from '../models/office.js'

const officeRouter = express.Router()

/**
 * Get all the saved offices
 * e.g. http://localhost:5001/offices
 */
officeRouter.get('/offices', async (req, res) => {
  const result = await officeModel.find();
  return res.status(StatusCodes.OK).json(result);
})

/**
 * Get a specific office
 */
officeRouter.get('/offices/:id', async (req, res) => {
  const { id } = req.params;
  const result = await officeModel.findById(id);
  return res.status(StatusCodes.OK).json(result);
})

/**
 * Add new office record into DB
 */
officeRouter.post("/offices", async (req, res) => {
  const newOffice = new officeModel({ ...req.body });
  const result = await newOffice.save();
  return res.status(StatusCodes.CREATED).json(result);
});

/**
 * Update an existing office record
 */
officeRouter.put("/offices/:id", async (req, res) => {
  const { id } = req.params;
  await officeModel.updateOne({ id }, req.body);
  const result = await officeModel.findById(id);
  return res.status(StatusCodes.OK).json(result);
});

/**
 * Delete an office record
 */
officeRouter.delete("/offices/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Dog.findByIdAndDelete(id);
  return res.status(StatusCodes.OK).json(result);
});

export default officeRouter