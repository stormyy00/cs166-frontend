import { Pool } from "pg";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  let client;

  try {
    // const { userid } = await req.json();
    const userid  = "katiepotts4";  // Parse the JSON request body

    client = await pool.connect();
    const query = `
      SELECT r.ordertimestamp, r.rentalorderid, r.duedate, r.totalprice, t.trackingid, g.gameid, g.unitsordered as noofgames
      FROM rentalorder r
      JOIN trackinginfo t ON r.rentalorderid = t.rentalorderid
      JOIN gamesinorder g ON r.rentalorderid = g.rentalorderid
      WHERE r.login = $1
      ORDER BY r.ordertimestamp DESC
      LIMIT 5;
    `;
    const response = await client.query(query, [userid]);
    return NextResponse.json({ message: response.rows }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  } finally {
    if (client) {
      client.release();
    }
  }
}
