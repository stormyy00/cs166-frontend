export const INPUTS = {
  catalog:["gamedid"],
  myorder: [],
  order: ["gameid", "noofgames"],
  "update-catalog": ["gameid", "gamename", "genre", "price", "comments"],
  "all-users": [],
  "update-user": [
    "updatelogin",
    "updatepwd",
    "updateRole",
    "updateNUm",
    "updateGamesDUe",
  ],
  "update-tracking":[
    "trackingid",
    "status",
    "couriername",
    "currentlocation",
    "comments",
  ],
  "all-order": [],
  profile:["favegames", "phonenum"]
  };

  export const INPUT = {
    store: [],
    products: ["storeid"],
    myorder: [],
    order: ["storeid", "productName", "numberofunits"],
    "update-product": ["storeid", "productName", "numberofunits", "pricePerUnit"],
    "all-users": [],
    "update-tracking": [
      "updateUserid",
      "updateName",
      "updateType",
      "updateLatitude",
      "updateLongitude",
    ],
    "delete-users": ["deleteUserid"],
    updates: ["storeid"],
    "popular-items": ["storeid"],
    "popular-customers": ["storeid"],
    request: ["storeid", "productName", "numberofunits", "warehouseid"],
    "all-order": [],
};