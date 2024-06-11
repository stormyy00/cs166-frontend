import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";
const pool = new Pool(config);

export async function POST(req) {

  const { name } = await req.json();
  // let name = "katiepotts4";

    try {
        const client = await pool.connect();
        const response = await client.query(`SELECT t.trackingid, r.rentalorderid, t.status, t.currentlocation, t.lastupdatedate
        FROM trackinginfo t
        JOIN rentalorder r ON r.rentalorderid = t.rentalorderid
        JOIN gamesinorder g ON r.rentalorderid = g.rentalorderid
        WHERE login = '${name}'`);
        client.release(); 
    
        return NextResponse.json({ message: response.rows, status: 200 });
      } catch (err) {
        return NextResponse.json({ message: err.message, status: 500 });
      }
  }