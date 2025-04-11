import React from "react";

const newsData = [
    {
        title: "React 19 is Coming!",
        description: "React 19 introduces new hooks and concurrent improvements.",
        image: "https://reactjs.org/logo-og.png",
    },
    {
        title: "JavaScript TC39 Updates",
        description: "New proposals like `Map.groupBy()` are under review.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        title: "Python 3.13 Preview",
        description: "Python 3.13 promises better performance and simpler syntax.",
        image: "https://www.python.org/static/community_logos/python-logo.png",
    },
    {
        title: "TypeScript 5.4 Released",
        description: "Improved type narrowing and performance boosts are live!",
        image: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png",
    },
    {
        title: "Rust Hits 2.0 Milestone",
        description: "Rust 2.0 features improved ergonomics and compiler speed.",
        image: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
    },
    {
        title: "Go 1.22 Launched",
        description: "Go 1.22 adds better error handling and generics improvements.",
        image: "https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
    },
    {
        title: "Java 21 is LTS",
        description: "Java 21 becomes a long-term support release with major enhancements.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
        title: "Kotlin Multiplatform 1.9",
        description: "Kotlin expands its cross-platform capabilities with 1.9 release.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    },
    {
        title: "PHP 8.3 Released",
        description: "PHP 8.3 brings typed class constants and performance optimizations.",
        image: "https://www.php.net/images/logos/php-logo.svg",
    },
    {
        title: "C++26 Proposals in Progress",
        description: "C++26 draft includes better modules, contracts, and ranges updates.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
];

function RightAsidePage() {
    return (
        <aside className="w-full md:w-80 h-screen p-4 bg-white shadow-lg rounded-lg sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🚀 Tech News</h2>
            <div className="space-y-4 overflow-y-auto h-[90%] pr-2">
                {newsData.map((news, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300">
                        <img src={news.image} alt={news.title} className="w-16 h-16 object-cover rounded-md" />
                        <div className="flex flex-col">
                            <h3 className="text-sm font-semibold text-gray-700">{news.title}</h3>
                            <p className="text-xs text-gray-600 mt-1">{news.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default RightAsidePage;
