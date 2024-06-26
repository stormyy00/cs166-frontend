import Checkbox from "@/components/Checkbox";
const generateSelect = () => ({
  id: "select",
  width: "w-18",
  header: ({ table }) => (
    <Checkbox
      toggle={table.getIsAllRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      toggle={row.getIsSelected()}
      onClick={row.getToggleSelectedHandler()}
    />
  ),
});

export const COLUMNS = {
  catalog: [
    generateSelect(),
    {
      accessorKey: "gameid",
      header: "gameid",
      width: " w-1/12",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "gamename",
      header: "gamename",
      width: "w-1/12",
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "genre",
      header: "genre",
      width: "w-1/12",
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "price",
      header: "price",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "description",
      header: "description",
      width: "w-1/12",
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  // store: [
  //   generateSelect(),
  //   {
  //     accessorKey: "storeid",
  //     header: "storeID",
  //     width: " w-1/6",
  //     enableColumnFilter: true,
  //     filterFn: "includesString",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  //   {
  //     accessorKey: "latitude",
  //     header: "latitude",
  //     width: "w-1/12",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  //   {
  //     accessorKey: "longitude",
  //     header: "longitude",
  //     width: "w-1/12",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  //   {
  //     accessorKey: "managerid",
  //     header: "manager",
  //     width: "w-1/12",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  //   {
  //     accessorKey: "dateestablished",
  //     header: "dateEstablished",
  //     width: "w-1/12",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  // ],
  // products: [
  //   generateSelect(),
  //   {
  //     accessorKey: "storeid",
  //     header: "storeID",
  //     width: " w-1/6",
  //     enableColumnFilter: true,
  //     filterFn: "includesString",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  //   {
  //     accessorKey: "productname",
  //     header: "product Name",
  //     width: "w-3/12",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  //   {
  //     accessorKey: "numberofunits",
  //     header: "numberOfUnits",
  //     width: "w-1/12",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  //   {
  //     accessorKey: "priceperunit",
  //     header: "price Per Unit",
  //     width: "w-1/12",
  //     cell: ({ getValue }) => <div>{getValue()}</div>,
  //   },
  // ],
  myorder: [
    generateSelect(),
    {
      accessorKey: "rentalorderid",
      header: "rentalorderid",
      width: " w-1/4",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "trackingid",
      header: "trackingid",
      width: " w-1/4",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "noofgames",
      header: "noofgames",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "totalprice",
      header: "totalprice",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "ordertimestamp",
      header: "ordertimestamp",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "duedate",
      header: "duedate",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  "all-users": [
    generateSelect(),
    {
      accessorKey: "login",
      header: "login",
      width: " w-1/12",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "password",
      header: "password",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "role",
      header: "role",
      width: "w-3/12",
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "favgames",
      header: "favgames",
      width: "w-1/6",
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "phonenum",
      header: "phonenum",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "numoverduegames",
      header: "rentaldue",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  "track-info": [
    generateSelect(),
    {
      accessorKey: "trackingid",
      header: "trackingid",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "rentalorderid",
      header: "rentalorderid",
      width: " w-3/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "status",
      header: "status",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "currentlocation",
      header: "currentlocation",
      width: "w-3/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "lastupdatedate",
      header: "lastupdatedate",
      width: "w-3/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  "all-tracking": [
    generateSelect(),
    {
      accessorKey: "trackingid",
      header: "trackingid",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "rentalorderid",
      header: "rentalorderid",
      width: " w-3/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "status",
      header: "status",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "currentlocation",
      header: "currentlocation",
      width: "w-3/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "lastupdatedate",
      header: "lastupdatedate",
      width: "w-3/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  "popular-items": [
    generateSelect(),

    {
      accessorKey: "productname",
      header: "product Name",
      width: "w-3/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "sum",
      header: "sum",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  "popular-customers": [
    generateSelect(),

    {
      accessorKey: "customerid",
      header: "customer",
      width: "w-3/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "count",
      header: "count",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  "all-order": [
    generateSelect(),
    {
      accessorKey: "login",
      header: "name",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "rentalorderid",
      header: "rentalorderid",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "noofgames",
      header: "# of games",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "totalprice",
      header: "total",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "ordertimestamp",
      header: "ordertime",
      width: "w-1/6",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "duedate",
      header: "due",
      width: "w-1/6",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
  "view-profile": [
    generateSelect(),
    {
      accessorKey: "login",
      header: "login",
      width: " w-1/12",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "password",
      header: "password",
      width: " w-1/6",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "role",
      header: "role",
      width: "w-3/12",
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "favgames",
      header: "favgames",
      width: "w-1/6",
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "phonenum",
      header: "phonenum",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "numoverduegames",
      header: "rentaldue",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
};