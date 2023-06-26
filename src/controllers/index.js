import debug from "debug";
import contents from '../helper/contentsHelper.js';
const logger = debug('app:contentController -> ')

export const getAllContents = async (req, res, next) => {
 try {
  const newContents = contents;
  return res.ok({ message: 'SUCCESS', data: newContents });
 } catch (err) {
  logger(err.message);
  next(err);
 }
};

export const getContentsById = async (req, res, next) => {
 try {
  const { id } = req.params;
  const newContents = contents.filter((item) => item.id == id);
  return res.ok({ message: 'SUCCESS', data: newContents });
 } catch (err) {
  logger(err.message);
  next(err);
 }
};

export const createContents = async (req, res, next) => {
 try {
  const { name, email, phone } = req.body;
  const { id } = req.params;
  if (id) {
   const item = { id, name, email, phone };
   contents[contents.findIndex((ele) => ele.id == id)] = item;

   return res.ok({ message: 'SUCCESS', data: item });
  }
  const newId = contents.length + 1;
  const newContact = { name, email, phone, id: newId };
  contents.push(newContact);

  return res.ok({ message: 'SUCCESS', data: newContact });
 } catch (err) {
  logger(err.message);
  next(err);
 }
};

export const deleteContent = async (req, res, next) => {
 try {
  const { id } = req.params;
  const contacts = contents.filter((item) => item.id != id);
  return res.ok({ message: 'SUCCESS', data: contacts });
 } catch (err) {
  logger(err.message);
  next(err);
 }
};