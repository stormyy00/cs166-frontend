import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";
const pool = new Pool(config);

export async function POST(req) {
        try {
            const { trackingid, status, currentlocation, couriername, additionalComments } = await req.json();
    
            const { type } = await req.json();

            if (type !== "employee" && type !== "manager") {
                return NextResponse.json({ message: "permission denied" }, { status: 403 });
            }
    
            const client = await pool.connect();
    
            const query = {
                text: `
                    UPDATE trackinginfo
                    SET status = $1, currentlocation = $2, couriername = $3, additionalComments = $4, lastUpdateDate = CURRENT_TIMESTAMP
                    WHERE trackingid = $5
                `,
                values: [status, currentlocation, couriername, additionalComments, trackingid],
            };
    
            const result = await client.query(query);
    
            await client.release();
    
            return NextResponse.json({ message: `Tracking info updated successfully. Rows affected: ${result.rowCount}` });
        } catch (err) {
            console.error("Error executing query:", err);
            return NextResponse.error(500, "Internal server error");
        }
    }