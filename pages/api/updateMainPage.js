import  db  from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      id,
      about_us,
      servicesTitle1,
      servicesTitle2,
      servicesTitle3,
      servicesTitle4,
      servicesDes1,
      servicesDes2,
      servicesDes3,
      servicesDes4,
      vision,
      mission,
    } = req.body;

    try {
      const [result] = await db.query(
        `UPDATE main_page SET 
          about_us = ?, 
          servicesTitle1 = ?, 
          servicesTitle2 = ?, 
          servicesTitle3 = ?, 
          servicesTitle4 = ?, 
          servicesDes1 = ?, 
          servicesDes2 = ?, 
          servicesDes3 = ?, 
          servicesDes4 = ?, 
          vision = ?, 
          mission = ? 
        WHERE id = ?`,
        [
          about_us,
          servicesTitle1,
          servicesTitle2,
          servicesTitle3,
          servicesTitle4,
          servicesDes1,
          servicesDes2,
          servicesDes3,
          servicesDes4,
          vision,
          mission,
          id,
        ]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "MainPage data not found" });
      }

      res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(500).json({ message: "Error updating data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
