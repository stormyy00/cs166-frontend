import { Pool } from "pg/lib";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { name, pwd } = await req.json();
  const query = `
    SELECT name, password, role, favGame, num 
    FROM USERS 
    WHERE login = $1 AND password = $2
  `;
  try {
    const client = await pool.connect();
    const response = await client.query(query, [name, pwd]);
    client.release();
    if (response.rows.length > 0) {
      return NextResponse.json({ profile: response.rows[0] }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found or incorrect password" }, { status: 404 });
    }
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}