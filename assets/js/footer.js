const content = {
    terminos: [
        "1. Available for Qualified Purchasers only. Qualified Purchasers purchasing an eligible Mac/iPad (“Eligible Product”) with eligible AirPods/accessory (“Promotion Product”) from a Qualifying Location through September 30, 2025 will receive Promotion Savings (up to $199, not to exceed the price of the Promotion Product). Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Additional restrictions apply. View full offer terms here.",
        "2. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.",
        "Hearing Protection: The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See support.apple.com/120850 for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.",
        "3. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.",
        "To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.",
        "Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.",
        "If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.",
        "Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.",
        "Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18, and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean, and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.",
        "A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.",
        "Features are subject to change. Some features, applications, and services may not be available in all regions or all languages."
    ],
    menu: [
        {
            title: "Shop and Learn",
            items: [
                "Store",
                "Mac",
                "iPad",
                "iPhone",
                "Watch",
                "Vision",
                "AirPods",
                "TV & Home",
                "AirTag",
                "Accessories",
                "Gift Cards"
            ]
        },
        {
            title: "Account",
            items: [
                "Manage Your Apple Account",
                "Apple Store Account",
                "iCloud.com"
            ]
        },
        {
            title: "Apple Store",
            items: [
                "Find a Store",
                "Genius Bar",
                "Today at Apple",
                "Group Reservations",
                "Apple Camp",
                "Apple Store App",
                "Certified Refurbished",
                "Apple Trade In",
                "Financing",
                "Carrier Deals at Apple",
                "Order Status",
                "Shopping Help"
            ]
        },
        {
            title: "For Business",
            items: [
                "Apple and Business",
                "Shop for Business"
            ]
        },
        {
            title: "Apple Values",
            items: [
                "Accessibility",
                "Education",
                "Environment",
                "Inclusion and Diversity",
                "Privacy",
                "Racial Equity and Justice",
                "Supply Chain Innovation"
            ]
        },
        {
            title: "Apple Wallet",
            items: [
                "Wallet",
                "Apple Card",
                "Apple Pay",
                "Apple Cash"
            ]
        },
        {
            title: "Entertainment",
            items: [
                "Apple One",
                "Apple TV+",
                "Apple Music",
                "Apple Arcade",
                "Apple Fitness+",
                "Apple News+",
                "Apple Podcasts",
                "Apple Books",
                "App Store"
            ]
        },
        {
            title: "For Education",
            items: [
                "Apple and Education",
                "Shop for K-12",
                "Shop for College"
            ]
        },
        {
            title: "For Healthcare",
            items: [
                "Apple in Healthcare",
                "Mac in Healthcare",
                "Health on Apple Watch",
                "Health Records on iPhone and iPad"
            ]
        },
        {
            title: "For Government",
            items: [
                "Shop for Government",
                "Shop for Veterans and Military"
            ]
        },
        {
            title: "About Apple",
            items: [
                "Newsroom",
                "Apple Leadership",
                "Career Opportunities",
                "Investors",
                "Ethics & Compliance",
                "Events",
                "Contact Apple"
            ]
        }
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    content.terminos.forEach(text => {
        terminos.innerHTML += `
            <p class="mb-2 lh-1 text-secondary"><small>${text}</small></p>
        `;
    });
    content.menu.forEach((element, index) => {
        menu.innerHTML += `
            <section id="col${index}" class="d-flex flex-column">
                <h6>${element.title}</h6>
            </section>
        `;
        element.items.forEach(item => {
            menu.querySelector(`#col${index}`).innerHTML += `
                <p class="mb-2 lh-1 text-secondary text-break"><small>${item}</small></p>
            `;
        });
    });
});
