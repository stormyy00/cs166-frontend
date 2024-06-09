import { Pool } from "pg/lib";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

// Fetch user profile
export async function POST(req) {
  const { name, pwd } = await req.json();
  const query = `
    SELECT name, password, role, favgames, phoneNum, numoverduegames
    FROM USERS 
    WHERE login = night1 AND password = suck
  `;
  try {
    const client = await pool.connect();
    const response = await client.query(query);
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

// Update user profile
export async function PUT(req) {
  const { name, favgames, num, password } = await req.json();
  const query = `
    UPDATE USERS 
    SET favgames = $1, num = $2, password = $3
    WHERE name = $4
  `;
  try {
    const client = await pool.connect();
    await client.query(query, [favgames, num, password, name]);
    client.release();
    return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
