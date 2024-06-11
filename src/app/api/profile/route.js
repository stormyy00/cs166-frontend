import { Pool } from "pg/lib";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

// Fetch user profile
export async function POST(req) {
  const { name, password } = await req.json();
  const query = `
    SELECT *
    FROM users`;
    try {
    // WHERE login = $1
    const client = await pool.connect();
    const response = await client.query(query);
    const users = response.rows[0];
    client.release();
    if (response.rows) {
      return NextResponse.json({ profile: users }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found or incorrect password" }, { status: 404 });
    }
  } catch (err) {
    console.error("Database query error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// Update user profile
// export async function POST(req) {
//   const { name, password, favgames, num } = await req.json();
//   const query = `
//     UPDATE USERS 
//     SET favgames = $1, num = $2, password = $3
//     WHERE login = $4
//   `;
//   try {
//     const client = await pool.connect();
//     await client.query(query, [favgames, num, password, name]);
//     client.release();
//     return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 });
//   } catch (err) {
//     return NextResponse.json({ message: err.message }, { status: 500 });
//   }
// }
