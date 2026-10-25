import * as logService from "./log.service.js";

export async function createLog(req, res, next) {
  try {
    const result = await logService.createLog(req.body);
    res.status(201).json({
      message: "log created Successfully",
      success: true,
      acknowledged: result.acknowledged,
      insertedId: result.insertedId,
    });
  } catch (error) {
    next(error);
  }
}
