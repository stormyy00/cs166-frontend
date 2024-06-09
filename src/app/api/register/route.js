import { Pool } from "pg/lib";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { name, password, role, favgames, num, rentaldue } = await req.json();
  console.log(password + "from apu")
  const query = `INSERT INTO Users (login, password, role, favgames, phonenum, numoverduegames) VALUES ('${name}','${password}', 'customer' ,'${favgames}',${num}, ${rentaldue})`;
  try {
    const client = await pool.connect();
    const response = await client.query(query);
    client.release();  
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}