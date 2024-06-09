import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";
const pool = new Pool(config);

export async function POST(req) {
    const { role, login , gameid, gamename, genre, price, description, } =
    await req.json();
  try {
    const client = await pool.connect();
    if (type === "customer") {
      return NextResponse.json(
        { message: "permission denied" },
        { status: 403 }
      );
    }
    const update = await client.query(
      `UPDATE Catalog SET gameid = ${gameid}, gamename = ${gamename}, genre = ${genre}, price = ${price}, description = ${description} ;`
    );
    console.log("update", update);
    const inert = await client.query(
      `INSERT INTO ProductUpdates (managerID, storeID, productName, updatedOn) VALUES ('${userid}', ${storeid}, '${productName}', CURRENT_TIMESTAMP);`
    );
    return NextResponse.json({ message: "Catalog Updated" }, { status: 200 });
  } catch (err) {
    console.log(err);
    const detail = err.detail;
    console.log(detail);
    if (detail.includes('is not present in table "Catalog".'))
      return NextResponse.json(
        { message: "invalid game id or catalog name" },
        { status: 500 }
      );
  }
}