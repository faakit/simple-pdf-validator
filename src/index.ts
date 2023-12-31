/**
 *
 * @param {Express.Multer.File} file to be checked
 * @param {number} maximumSize in bytes (optional)
 * @returns {true} when the file is a valid PDF
 * @throws {Error} when the file is not a valid PDF
 */
export function checkPdf(
  file: Express.Multer.File,
  maximumSize?: number
): true {
  if (!!maximumSize && file.size > maximumSize) {
    throw new Error("File too large");
  }

  if (file.mimetype !== "application/pdf") {
    throw new Error("Invalid file type");
  }

  const buffer = file.buffer;
  if (!Buffer.isBuffer(buffer)) {
    throw new Error("Invalid buffer");
  }

  if (buffer.lastIndexOf("%PDF") !== 0) {
    throw new Error("Invalid PDF");
  }

  if (buffer.lastIndexOf("%%EOF") < buffer.length - 7) {
    throw new Error("Invalid PDF");
  }

  return true;
}
