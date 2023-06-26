import debug from "debug";
import contents from '../helper/contentsHelper.js';
const logger = debug('app:contentController -> ')

export const getAllContents = async (req,res) => {
  try {
    const newContents = contents()
    return res.ok({message:"SUCCESS", data: newContents})
  } catch (err) {
    logger(err.message);
    next(err);
  }
 }