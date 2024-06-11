import { Pool } from "pg/lib";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { gameid, noofgames } = await req.json();
  let rentalOrderID = `rental-${Math.random().toString().slice(2, 2 + 4)}`;
  let trackingID = `TRACK-${Math.random().toString().slice(2, 2 + 5)}`;

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const priceResult = await client.query('SELECT price FROM catalog WHERE gameid = $1', [gameid]);
    if (priceResult.rows.length === 0) {
      throw new Error('Game not found');
    }
    const price = parseFloat(priceResult.rows[0].price);
    const totalPrice = price * noofgames;
    

    await client.query(`
      INSERT INTO rentalorder (rentalorderid, login, noofgames, totalprice, ordertimestamp, duedate) 
      VALUES ($1, 'Howard', $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + interval '7 days')
    `, [rentalOrderID, noofgames, totalPrice]);


    await client.query(`
      INSERT INTO trackinginfo (trackingid, rentalorderid, status, currentlocation, couriername, lastupdatedate)  
      VALUES ($1, $2, 'Processing', 'Seattle, WA', 'UPS', CURRENT_TIMESTAMP)
    `, [trackingID, rentalOrderID]);

    await client.query(`
      INSERT INTO gamesinorder (rentalorderid, gameid, unitsordered) 
      VALUES ($1, $2, $3)
    `, [rentalOrderID, gameid, noofgames]);


    await client.query('COMMIT');
    return NextResponse.json({ message: '✅Order placed successfully' }, { status: 200 });
  } catch (err) {
    await client.query('ROLLBACK');
    return NextResponse.json({ message: err.message }, { status: 500 });
  } finally {
    client.release();
  }
}
