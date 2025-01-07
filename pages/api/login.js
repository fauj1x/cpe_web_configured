// pages/api/login.js
import  db  from "../../utils/db"; // Pastikan db.js sudah diatur untuk koneksi ke database Anda

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    try {
      // Query untuk mencari user berdasarkan username
      const [rows] = await db.query("SELECT * FROM user WHERE username = ?", [username]);

      if (rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      // Mengecek apakah password yang dimasukkan sesuai dengan password di database
      const user = rows[0];
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // Jika login berhasil, bisa mengembalikan data user atau token
      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
