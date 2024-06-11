import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { name, password, favgame, phonenum } = await req.json();
//   if (type !== "manager")
//     return NextResponse.json({ message: "❌permission denied" }, { status: 403 });
try {
    const client = await pool.connect();
    const response = await client.query(`SELECT * FROM users WHERE login ='${name}';`)
    const users = response.rows;
 
    const user = users[0];

    // Check for changes
    const changes = {};
    if (password && user.password !== password) changes.password = password;
    if (favgame && user.favgames !== favgame) changes.favgames = favgame;
    if (phonenum && user.phonenum !== phonenum) changes.phonenum = phonenum;

    if (Object.keys(changes).length > 0) {
      const query = `
        UPDATE users 
        SET ${Object.keys(changes).map((key, idx) => `${key} = $${idx + 1}`).join(", ")}
        WHERE login = $${Object.keys(changes).length + 1}
      `;
      const values = [...Object.values(changes), name];

      await client.query(query, values);
    }

    client.release(); 
    return NextResponse.json({ message: users }, { status: 200 });
  client.release();
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}