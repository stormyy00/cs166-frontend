export const ITEM = [
    {
        name:"catalog",
        page:"catalog",
        link:"/table/catalog",
        role:["customer", "manager", "admin"]
    },
    {
        name: "Order",
        page: "order",
        link: "/forms/order",
        // icon: <BsPeopleFill className={iconStyle} />,
        type: ["customer", "manager", "admin"],
      },
      {
        name: "My Order",
        page: "myorder",
        link: "/table/myorder",
        // icon: <BsPeopleFill className={iconStyle} />,
        type: ["customer", "manager", "admin"],
      },
      {
        name: "All Users",
        page: "all-users",
        link: "/table/all-users",
        // icon: <BsPeopleFill className={iconStyle} />,
        type: ["admin"],
        },
    {
        name:"Update Catalog",
        page:"update-product",
        link:"/forms/update-catalog",
        type:["customer", "manager", "admin"]
    },
    {
        name:"Tracking Info",
        page:"track-info",
        link:"/forms/viewTR",
        role:["customer", "manager", "admin"]
    },
    {
        name:"Update Tracking",
        page:"update-tracking",
        link:"/forms/update-tracking",
        role:[, "manager", "admin"]
    },
    {
        name:"Update User",
        page:"update-user",
        link:"/forms/update-user",
        type:["admin"]
    },
]

// {
//     name: "View Stores",
//     page: "store",
//     link: "/table/store",
//     icon: <BsFillPersonFill className={iconStyle} />,
//     type: ["customer", "manager", "admin"],
//   },
//   {
//     name: "products",
//     page: "products",
//     link: "/table/products",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["customer", "manager", "admin"],
//   },
//   {
//     name: "Order",
//     page: "order",
//     link: "/form/order",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["customer", "manager", "admin"],
//   },
//   {
//     name: "My Order",
//     page: "myorder",
//     link: "/table/myorder",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["customer", "manager", "admin"],
//   },
//   {
//     name: "Update Product",
//     page: "update-product",
//     link: "/form/update-product",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["manager", "admin"],
//   },
//   {
//     name: "View Updates",
//     page: "view-updates",
//     link: "/table/updates",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["manager"],
//   },
//   {
//     name: "Popular Items",
//     page: "popular-items",
//     link: "/table/popular-items",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["manager"],
//   },
//   {
//     name: "Popular Customers",
//     page: "popular-customers",
//     link: "/table/popular-customers",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["manager"],
//   },
//   {
//     name: "Supply Request",
//     page: "supply-request",
//     link: "/form/request",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["manager"],
//   },
//   {
//     name: "All Orders",
//     page: "all-orders",
//     link: "/table/all-order",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["manager"],
//   },
//   {
//     name: "All Users",
//     page: "all-users",
//     link: "/table/all-users",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["admin"],
//   },
//   {
//     name: "Update Users",
//     page: "update-users",
//     link: "/form/update-users",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["admin"],
//   },
//   {
//     name: "Delete Users",
//     page: "delete-users",
//     link: "/form/delete-users",
//     icon: <BsPeopleFill className={iconStyle} />,
//     type: ["admin"],
//   },
// ];