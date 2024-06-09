import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";
const pool = new Pool(config);

export async function POST(req) {
    try {
        const { role, gameid, gamename, genre, price, description } = await req.json();
    
        // Example: Check if user is authorized as a manager
        // if (role !== "manager") {
        //   return NextResponse.error(403, "Permission denied");
        // }
    
        const client = await pool.connect();
        const query = {
          text: `UPDATE Catalog SET gamename = $1, genre = $2, price = $3, description = $4 WHERE gameid = $5`,
          values: [gamename, genre, price, description, gameid],
        };
    
        const result = await client.query(query);
    
        await client.release();
    
        return NextResponse.json({ message: "Game information updated successfully" + result });
      } catch (err) {
        console.error("Error executing query:", err);
        return NextResponse.error(500, "Internal server error");
      }
    }