// pages/api/getServices.js
import  db  from "../../utils/db"; 

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const [rows] = await db.query("SELECT servicesTitle1, servicesTitle2, servicesTitle3, servicesTitle4, servicesDes1, servicesDes2, servicesDes3, servicesDes4 FROM main_page WHERE id = ?", [1]); // Sesuaikan dengan ID yang diperlukan
      if (rows.length === 0) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(rows[0]); // Mengembalikan services data
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Error fetching data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
