// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/

import fs from "fs";
import path from "path";
import React from "react";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public/html", "docs.html");
  const readStream = fs.createReadStream(filePath);

  res.setHeader("Content-Type", "text/html");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=privacy-policy.html"
  );

  readStream.pipe(res);
}
