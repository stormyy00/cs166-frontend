import { Pool } from "pg";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req, res) {
  try {
    const { name, password } = await req.json();

    const query = 'SELECT login FROM Users WHERE login = $1 AND password = $2';
    const values = [name, password];

    const client = await pool.connect();
    const response = await client.query(query, values);


    if (response.rows.length > 0) {
      return NextResponse.json({ message: 'Login successful', user: response.rows[0] }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }
  } catch (err) {
    console.error('Error during login:', err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
