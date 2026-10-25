import * as logRepository from "./log.repository.js";

export async function createLog(logData) {
  return await logRepository.createLog(logData);
}
