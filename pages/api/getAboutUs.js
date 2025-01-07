import  db  from "../../utils/db"; // Pastikan path ini sesuai dengan lokasi file db.js Anda

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const [rows] = await db.query("SELECT about_us FROM main_page WHERE id = ?", [1]); // Ganti ID sesuai kebutuhan
      if (rows.length === 0) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(rows[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Error fetching data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
