import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";
const pool = new Pool(config);

export async function POST(req) {

    try {
        const client = await pool.connect();
        const response = await client.query("SELECT * FROM catalog");
        client.release(); 
    
        return NextResponse.json({ message: response.rows, status: 200 });
      } catch (err) {
        return NextResponse.json({ message: err.message, status: 500 });
      }
  }