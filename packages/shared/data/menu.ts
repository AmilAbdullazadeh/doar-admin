import {
    BarChart2,
    Calendar,
    MessageSquare,
    Users,
    FileText,
    Mail,
    LogIn,
    UserPlus,
    UserCheck,
    ShieldOff,
    User,
    File,
    PieChart,
    Package,
    Layers,
    Box,
    Archive,
} from "react-feather";

const menus = [
    {
        id: 1,
        label: "Dashboard",
        url: "/",
        Icon: PieChart,

    },
    {
        id: 2,
        label: "Master",
        url: "/",
        Icon: Package,
        megamenu: [
            {
                id: 21,
                title: "Products Data",
                submenu: [
                    {
                        id: 211,
                        label: "Metals",
                        url: "/Master/ProductData/metals",
                        Icon: LogIn,
                    },
                    {
                        id: 212,
                        label: "Metal Groups",
                        url: "/Master/ProductData/metal-groups",
                        Icon: UserPlus,
                    },
                    {
                        id: 213,
                        label: "Collections",
                        url: "/Master/ProductData/collections",
                        Icon: UserCheck,
                    },
                    {
                        id: 220,
                        label: "Diamonds & Gemstones",
                        url: "/Master/ProductData/diamonds-stones",
                        Icon: UserCheck,
                    },
                    {
                        id: 214,
                        label: "Categories",
                        url: "/Master/ProductData/categories",
                        Icon: UserCheck,
                    },
                    {
                        id: 215,
                        label: "Varieties",
                        url: "/Master/ProductData/varieties",
                        Icon: UserCheck,
                    },
                    {
                        id: 216,
                        label: "Products",
                        url: "/Master/ProductData/products",
                        Icon: UserCheck,
                    },
                    {
                        id: 217,
                        label: "Items",
                        url: "/Master/ProductData/items",
                        Icon: UserCheck,
                    },
                    {
                        id: 218,
                        label: "Offers",
                        url: "/Master/ProductData/offers",
                        Icon: UserCheck,
                    },
                    {
                        id: 219,
                        label: "Charges on Products",
                        url: "/Master/ProductData/charges",
                        Icon: UserCheck,
                    },
                ],
            },
            {
                id: 22,
                title: "Other Settings",
                submenu: [
                    {
                        id: 221,
                        label: "Current Rate",
                        url: "/Master/other-settings/buySell",
                        Icon: FileText,
                    },
                    {
                        id: 222,
                        label: "Define Referrence",
                        url: "/Master/other-settings/references",
                        Icon: FileText,
                    },
                    {
                        id: 223,
                        label: "Rate Timer Settings",
                        url: "/Master/other-settings/rate-timer",
                        Icon: FileText,
                    },
                    {
                        id: 224,
                        label: "Percentage Token",
                        url: "/Master/other-settings/token-percentage",
                        Icon: FileText,
                    },
                    {
                        id: 224,
                        label: "Sales Retrun reasons",
                        url: "/Master/other-settings/sale-reasons",
                        Icon: FileText,
                    },
                    {
                        id: 224,
                        label: "Define Taxes",
                        url: "/Master/other-settings/taxes",
                        Icon: FileText,
                    },
                ],
            },

            {
                id: 23,
                title: "FronEnd Settings",
                submenu: [
                    {
                        id: 231,
                        label: "How to Videos",
                        url: "/Master/front-end/how-to",
                        Icon: User,
                    },
                    {
                        id: 232,
                        label: "Testimonial Videos",
                        url: "/Master/front-end/testimonials",
                        Icon: Users,
                    },
                    {
                        id: 233,
                        label: "FAQs",
                        url: "/Master/front-end/faqs",
                        Icon: Users,
                    },

                ],
            },



            {
                id: 24,
                title: "Plans",
                submenu: [
                    {
                        id: 241,
                        label: "Define Cycle Period",
                        url: "/Master/plans/cycle-periods",
                        Icon: FileText,
                    },
                    {
                        id: 242,
                        label: "Define Standard Plans",
                        url: "/Master/plans/standard-plans",
                        Icon: FileText,
                    },

                ],
            },
            {
                id: 25,
                title: "Security",
                submenu: [
                    {
                        id: 251,
                        label: "Master user rights",
                        url: "/Master/security/roles-permissions",
                        Icon: File,
                    },
                    {
                        id: 252,
                        label: "Users and Passwords",
                        url: "/Master/security/system-users",
                        Icon: File,
                    }
                ],
            },

        ],
    },
    {
        id: 3,
        label: "Transactions",
        url: "/",
        Icon: Layers,
        megamenu: [
            {
                id: 31,
                title: "Financial",
                submenu: [
                    {
                        id: 311,
                        label: "In-Store Returns",
                        url: "/transactions/financials/store-returns",
                        Icon: LogIn,
                    },
                    {
                        id: 312,
                        label: "In-Store Redeems",
                        url: "/transactions/financials/store-redeems",
                        Icon: UserPlus,
                    },
                    {
                        id: 313,
                        label: "Store Cash Collections",
                        url: "/transactions/financials/store-collections",
                        Icon: UserCheck,
                    },
                    {
                        id: 314,
                        label: "Store Token Refund",
                        url: "/transactions/financials/store-refund",
                        Icon: ShieldOff,
                    },
                    {
                        id: 315,
                        label: "Store Old Gold",
                        url: "/transactions/financials/store-old-gold",
                        Icon: ShieldOff,
                    },
                    {
                        id: 316,
                        label: "Bank Entries",
                        url: "/transactions/financials/bank-entry",
                        Icon: ShieldOff,
                    },
                    {
                        id: 317,
                        label: "Gold Adjustments",
                        url: "/transactions/financials/adjustments-entry",
                        Icon: ShieldOff,
                    },
                ],
            },
            {
                id: 32,
                title: "Status Updates",
                submenu: [
                    {
                        id: 321,
                        label: "Allocate Collectors",
                        url: "/transactions/status-updates/collectors-allocate",
                        Icon: FileText,
                    },
                    {
                        id: 322,
                        label: "Allocator Deliveries",
                        url: "/transactions/status-updates/delivery-allocate",
                        Icon: FileText,
                    },
                    {
                        id: 323,
                        label: "Allot Appointments",
                        url: "/transactions/status-updates/allot-appointments",
                        Icon: FileText,
                    },
                    {
                        id: 324,
                        label: "Status Update Sell gold",
                        url: "/transactions/status-updates/sell-gold-updates",
                        Icon: FileText,
                    },
                ],
            },
            {
                id: 33,
                title: "Data Entry",
                submenu: [
                    {
                        id: 331,
                        label: "Reference Data",
                        url: "/transactions/data-entry/reference-data",
                        Icon: User,
                    },
                    {
                        id: 332,
                        label: "Create GBP user",
                        url: "/transactions/data-entry/gbp-users",
                        Icon: Users,
                    },

                ],
            },
            {
                id: 33,
                title: "Order",
                submenu: [
                    {
                        id: 331,
                        label: "Order Shipping",
                        url: "/transactions/orders/order-shipping",
                        Icon: File,
                    },
                    {
                        id: 332,
                        label: "Order Tracking",
                        url: "/transactions/orders/order-tracking",
                        Icon: File,
                    },


                ],
            },

            {
                id: 34,
                title: "Products",
                submenu: [
                    {
                        id: 341,
                        label: "Item Details",
                        url: "/transactions/products/item-details",
                        Icon: FileText,
                    },
                    {
                        id: 342,
                        label: "Offer Details",
                        url: "/transactions/products/offer-details",
                        Icon: FileText,
                    },

                ],
            },
        ],
    },
    {
        id: 4,
        label: "Reports",
        url: "/",
        Icon: Box,
        submenu: [
            {
                id: 41,
                label: "Daily Reports",
                url: "/reports/daily-reports",
                Icon: LogIn,
            },
            {
                id: 42,
                label: "Account Reports",
                url: "/reports/account-reports",
                Icon: UserPlus,
            },
            {
                id: 43,
                label: "Buy & Save Reports",
                url: "/reports/buy-save-reports",
                Icon: UserCheck,
            },
            {
                id: 44,
                label: "Sell Old Gold Reports",
                url: "/reports/old-gold-reports",
                Icon: UserCheck,
            },
            {
                id: 45,
                label: "Book your gold Reports",
                url: "/reports/book-gold-reports",
                Icon: UserCheck,
            },
            {
                id: 46,
                label: "Eshop Reports",
                url: "/reports/eshop-reports",
                Icon: UserCheck,
            },
            {
                id: 47,
                label: "GBP Reports",
                url: "/reports/gbp-reports",
                Icon: UserCheck,
            },
            {
                id: 48,
                label: "Stock Reports",
                url: "/reports/stock-reports",
                Icon: UserCheck,
            },
            {
                id: 49,
                label: "Delivery Boy Reports",
                url: "/reports/delivery-boy-reports",
                Icon: UserCheck,
            },
            {
                id: 50,
                label: "Collections Reports",
                url: "/reports/collector-reports",
                Icon: UserCheck,
            },


        ],
    },
    {
        id: 5,
        label: "Customer Relations",
        url: "/",
        Icon: Archive,
        megamenu: [
            {
                id: 51,
                title: "SMS",
                submenu: [
                    {
                        id: 511,
                        label: "Create and Send SMS",
                        url: "/customer-relations/SMS/create-send",
                        Icon: LogIn,
                    },
                    {
                        id: 512,
                        label: "SMS Template",
                        url: "/customer-relations/SMS/create-templates",
                        Icon: UserPlus,
                    },
                    {
                        id: 513,
                        label: "SMS Report",
                        url: "/customer-relations/SMS/reports",
                        Icon: UserCheck,
                    },


                ],
            },
            {
                id: 52,
                title: "Whatsapp",
                submenu: [
                    {
                        id: 521,
                        label: "Create and Send",
                        url: "/customer-relations/whatsapp/create-send",
                        Icon: LogIn,
                    },
                    {
                        id: 522,
                        label: "Whatsapp Template",
                        url: "/customer-relations/whatsapp/create-template",
                        Icon: UserPlus,
                    },
                    {
                        id: 523,
                        label: "Whatsapp Report",
                        url: "/customer-relations/whatsapp/reports",
                        Icon: UserCheck,
                    },


                ],
            },
            {
                id: 53,
                title: "Push Notifications",
                submenu: [
                    {
                        id: 531,
                        label: "Create and Send",
                        url: "/customer-relations/push-notifications/create-send",
                        Icon: LogIn,
                    },
                    {
                        id: 532,
                        label: "Template",
                        url: "/customer-relations/push-notifications/create-template",
                        Icon: UserPlus,
                    },
                    {
                        id: 533,
                        label: " Report",
                        url: "/customer-relations/push-notifications/reports",
                        Icon: UserCheck,
                    },


                ],
            },
            {
                id: 54,
                title: "Email",
                submenu: [
                    {
                        id: 541,
                        label: "Create and Send",
                        url: "/customer-relations/email/create-send",
                        Icon: LogIn,
                    },
                    {
                        id: 542,
                        label: "Email Template",
                        url: "/customer-relations/email/create-template",
                        Icon: UserPlus,
                    },
                    {
                        id: 543,
                        label: "Email Report",
                        url: "/customer-relations/email/reports",
                        Icon: UserCheck,
                    },


                ],
            },


        ],
    },
];

export default menus;
