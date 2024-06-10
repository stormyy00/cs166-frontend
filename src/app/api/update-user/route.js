import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";
const pool = new Pool(config);

export async function POST(req) {
  try {
    const { role, name, newRole, newNumOverdueGames } = await req.json();
    
    // Check if user is authorized as a manager
    // if (role !== "manager") {
    //   return NextResponse.error(403, "Permission denied");
    // }
    
    const client = await pool.connect();
    const query = {
      text: `UPDATE Users SET role = $1, numoverduegames = $2 WHERE login = $3`,
      values: [ newRole, newNumOverdueGames, name],
    };
    
    const result = await client.query(query);
    
    await client.release();
    
    return NextResponse.json({ message: "User information updated successfully", result });
  } catch (err) {
    console.error("Error executing query:", err);
    return NextResponse.error(500, "Internal server error");
  }
}
