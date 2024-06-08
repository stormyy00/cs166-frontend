import { Pool } from "pg/lib";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { name, pwd, role, favGames, num, rentalDue } = await req.json();
  const query = `INSERT INTO Users (login, password, role, favgames, phonenum, numoverduegames) VALUES ('${name}','${pwd}', 'customer' ,${favGames},${num}, ${rentalDue})`;
  try {
    const client = await pool.connect();
    const response = await client.query(query);
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}