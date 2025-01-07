import db from '../../utils/db';


export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      console.log("DB Instance:", db); // Untuk memeriksa apakah db sudah terdefinisi
      const [rows] = await db.query("SELECT * FROM main_page WHERE id = ?", [1]);

      if (rows.length === 0) {
        return res.status(404).json({ message: "MainPage data not found" });
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
