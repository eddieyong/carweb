// Blog posts data array
const blogPosts = [
    {
        id: 1,
        title: "2023 Malaysian Car Market Trends: What You Need to Know",
        slug: "2023-malaysian-car-market-trends",
        excerpt: "Discover the latest trends in Malaysia's automotive market, from rising hybrid popularity to the growing dominance of SUVs.",
        content: `
            <p>Malaysia's automotive market has seen significant shifts in 2023, with several emerging trends that are reshaping how Malaysians purchase and use vehicles.</p>
            
            <h3>Rising Popularity of Hybrid Vehicles</h3>
            <p>With fuel prices fluctuating and environmental concerns growing, hybrid vehicles have seen a remarkable 35% increase in sales compared to the previous year. Models like the Honda City RS e:HEV and Toyota Corolla Cross Hybrid have become increasingly popular choices for urban Malaysians.</p>
            
            <p>"The shift towards hybrids is unmistakable," says Ahmad Zahir, automotive analyst at KL Motor Research. "Malaysians are increasingly conscious of both fuel economy and environmental impact, making hybrids an attractive middle ground before full electrification."</p>
            
            <h3>SUV Dominance Continues</h3>
            <p>The SUV segment continues to grow, now representing over 40% of new vehicle sales in Malaysia. Compact SUVs like the Proton X50 and Perodua Ativa have democratized the segment, making it accessible to more Malaysian families.</p>
            
            <p>Local brands have particularly benefited from this trend, with Proton and Perodua capturing over 60% of the SUV market share. Their ability to offer feature-rich SUVs at competitive price points has resonated strongly with Malaysian consumers.</p>
            
            <h3>Digital Car Buying Experience</h3>
            <p>The pandemic has accelerated digital transformation in car buying, with more Malaysians becoming comfortable researching and even purchasing vehicles online. Virtual showrooms, online booking systems, and home test drives have become standard offerings from many dealerships.</p>
            
            <p>This trend is particularly pronounced among younger buyers, with 70% of millennials reporting that they conduct extensive online research before making a purchase decision.</p>
            
            <h3>Used Car Market Strength</h3>
            <p>The used car market has shown remarkable resilience, with values remaining strong due to ongoing new car supply constraints. Premium pre-owned vehicles from brands like BMW and Mercedes-Benz are seeing particularly strong demand, with some models retaining up to 75% of their value after three years.</p>
            
            <p>For budget-conscious buyers, certified pre-owned programs from brands like Perodua, Honda, and Toyota provide peace of mind with comprehensive inspections and warranties.</p>
            
            <h3>Looking Ahead</h3>
            <p>As we move through 2023, these trends are expected to continue shaping the Malaysian automotive landscape. With new electric vehicle incentives and several highly anticipated model launches on the horizon, it promises to be an exciting year for car enthusiasts and everyday consumers alike.</p>
        `,
        author: "Sarah Tan",
        date: "March 15, 2023",
        category: "Market Trends",
        tags: ["market trends", "hybrid cars", "SUVs", "used cars", "Malaysia"],
        coverImage: "blog-assets/images/market-trends.jpg",
        featured: true
    },
    {
        id: 2,
        title: "Top 5 Most Reliable Used Cars in Malaysia Under RM50,000",
        slug: "top-5-reliable-used-cars-malaysia-under-50000",
        excerpt: "Looking for a reliable used car that won't break the bank? Check out our top 5 picks for dependable vehicles under RM50,000.",
        content: `
            <p>Finding a reliable used car on a budget can be challenging, but the Malaysian market offers several excellent options for buyers with a budget of RM50,000 or less. Based on reliability ratings, maintenance costs, and owner satisfaction, here are our top five picks:</p>
            
            <h3>1. Perodua Myvi (2018-2020)</h3>
            <p>The Perodua Myvi has earned its reputation as Malaysia's beloved hatchback for good reason. Models from 2018-2020 can be found between RM35,000-RM45,000 depending on condition and variant.</p>
            
            <p><strong>Why we recommend it:</strong> Excellent fuel efficiency averaging 21.1 km/l, low maintenance costs (average annual maintenance below RM800), and impressive reliability scores with minimal reported issues. The Myvi also offers modern safety features like ASA 2.0 in higher-end variants.</p>
            
            <h3>2. Honda City (2015-2017)</h3>
            <p>The fourth-generation Honda City remains a popular choice in the secondary market, with good examples available between RM40,000-RM50,000.</p>
            
            <p><strong>Why we recommend it:</strong> Honda's renowned build quality shines through in the City, with many examples reaching 150,000 km with only routine maintenance. The i-VTEC engine is both responsive and economical, achieving around 17.5 km/l in mixed driving conditions. The spacious interior and large trunk make it a practical family sedan.</p>
            
            <h3>3. Toyota Vios (2016-2018)</h3>
            <p>Toyota's reputation for bulletproof reliability is well-deserved, and the Vios exemplifies this quality. Models from 2016-2018 typically range from RM42,000-RM50,000.</p>
            
            <p><strong>Why we recommend it:</strong> The Vios is exceptionally durable with minimal mechanical issues reported even at high mileages. Maintenance costs are among the lowest in its class (average annual maintenance around RM700), and parts availability is excellent nationwide. The 1.5L engine delivers a good balance of performance and fuel economy at approximately 16 km/l.</p>
            
            <h3>4. Proton Saga (2019-2021)</h3>
            <p>The most affordable option on our list, later models of the current-generation Saga can be found between RM30,000-RM40,000, representing excellent value.</p>
            
            <p><strong>Why we recommend it:</strong> The Saga has vastly improved in reliability since Geely's partnership with Proton. The 2019 facelift introduced a more refined 4-speed automatic transmission replacing the previous CVT, resulting in better durability. Operating costs are very low, with maintenance typically under RM600 annually. While not as feature-rich as some competitors, it offers solid transportation at an unbeatable price.</p>
            
            <h3>5. Nissan Almera (2015-2018)</h3>
            <p>Often overlooked, the previous-generation Almera offers surprising reliability and space for RM35,000-RM45,000.</p>
            
            <p><strong>Why we recommend it:</strong> The Almera's 1.5L engine and automatic transmission combination has proven exceptionally reliable, with many examples showing minimal issues even beyond 100,000 km. The cabin is surprisingly spacious, particularly for rear passengers, and the trunk capacity rivals vehicles in the class above. While basic in terms of features, the Almera's simplicity contributes to its long-term durability.</p>
            
            <h3>Things to Consider</h3>
            <p>When purchasing any used vehicle, we recommend:</p>
            <ul>
                <li>Obtaining a comprehensive vehicle history report</li>
                <li>Having the car inspected by a trusted mechanic</li>
                <li>Checking for flood damage (a particular concern in Malaysia)</li>
                <li>Verifying service records to ensure proper maintenance</li>
                <li>Test driving the vehicle under various conditions</li>
            </ul>
            
            <p>With careful selection, any of these five models should provide years of reliable service without breaking the bank.</p>
        `,
        author: "Lee Wei Ming",
        date: "February 28, 2023",
        category: "Buying Guide",
        tags: ["buying guide", "used cars", "reliable cars", "budget", "Malaysia"],
        coverImage: "blog-assets/images/reliable-cars.jpg",
        featured: true
    },
    {
        id: 3,
        title: "Understanding Car Loan Interest Rates in Malaysia: Fixed vs. Variable",
        slug: "car-loan-interest-rates-malaysia-fixed-vs-variable",
        excerpt: "Learn the key differences between fixed and variable interest rates for car loans in Malaysia and which option might be best for you.",
        content: `
            <p>When financing a vehicle purchase in Malaysia, one of the most important decisions you'll make is choosing between a fixed or variable interest rate loan. Both options have distinct advantages and potential drawbacks, and understanding these differences can save you thousands of ringgit over the life of your loan.</p>
            
            <h3>Fixed Interest Rate Loans</h3>
            <p>As the name suggests, fixed interest rate loans maintain the same interest rate throughout the entire loan tenure. Currently, fixed car loan rates in Malaysia typically range from 2.7% to 3.5% for new cars and 3.0% to 4.5% for used vehicles, depending on the financial institution and your credit profile.</p>
            
            <h4>Advantages of Fixed Rate Loans:</h4>
            <ul>
                <li><strong>Predictable payments:</strong> Your monthly installment remains constant throughout the loan tenure, making budgeting simpler and more predictable.</li>
                <li><strong>Protection from rate increases:</strong> If interest rates rise in the broader economy, your loan rate remains unchanged.</li>
                <li><strong>Peace of mind:</strong> Many borrowers prefer the security of knowing exactly how much they'll pay each month without surprises.</li>
            </ul>
            
            <h4>Disadvantages of Fixed Rate Loans:</h4>
            <ul>
                <li><strong>Generally higher initial rates:</strong> Fixed rates are typically higher than the introductory rates of variable loans.</li>
                <li><strong>No benefit from falling rates:</strong> If interest rates decrease, you won't benefit unless you refinance (which may incur additional costs).</li>
            </ul>
            
            <h3>Variable Interest Rate Loans</h3>
            <p>Variable or floating rate car loans have interest rates that can change periodically based on economic conditions and the Base Rate (BR) or Base Lending Rate (BLR) set by Bank Negara Malaysia. Current variable rates typically start from 2.3% to 3.2% for new cars.</p>
            
            <h4>Advantages of Variable Rate Loans:</h4>
            <ul>
                <li><strong>Lower initial rates:</strong> Variable rates often start lower than fixed rates, resulting in smaller initial monthly payments.</li>
                <li><strong>Potential for rate decreases:</strong> If interest rates fall, your monthly payments may decrease as well.</li>
                <li><strong>Flexibility:</strong> Some variable rate loans offer features like extra repayment options without penalties.</li>
            </ul>
            
            <h4>Disadvantages of Variable Rate Loans:</h4>
            <ul>
                <li><strong>Unpredictable payments:</strong> Monthly payments can increase if interest rates rise, potentially straining your budget.</li>
                <li><strong>Budgeting challenges:</strong> The uncertainty of changing payments makes long-term financial planning more difficult.</li>
                <li><strong>Potential for significantly higher costs:</strong> In a rising interest rate environment, the total loan cost could exceed that of a fixed-rate option.</li>
            </ul>
            
            <h3>Which Option Is Right for You?</h3>
            <p>The best choice depends on your personal financial situation and risk tolerance:</p>
            
            <p><strong>Consider a fixed rate if:</strong></p>
            <ul>
                <li>You prefer predictability and stable monthly payments</li>
                <li>Current interest rates are relatively low</li>
                <li>You plan to keep the vehicle for the entire loan term</li>
                <li>Your budget has limited flexibility for potential payment increases</li>
            </ul>
            
            <p><strong>Consider a variable rate if:</strong></p>
            <ul>
                <li>You can comfortably handle potential payment increases</li>
                <li>Interest rates are expected to decrease</li>
                <li>You might pay off the loan early</li>
                <li>You want the lowest possible initial payments</li>
            </ul>
            
            <h3>Important Considerations</h3>
            <p>Regardless of which type of interest rate you choose, consider these additional factors:</p>
            
            <ul>
                <li><strong>Loan tenure:</strong> Shorter loans typically have lower interest rates but higher monthly payments.</li>
                <li><strong>Down payment size:</strong> A larger down payment reduces your loan amount and total interest paid.</li>
                <li><strong>Early settlement penalties:</strong> Some loans charge penalties for paying off the loan ahead of schedule.</li>
                <li><strong>Processing fees:</strong> These one-time charges can vary significantly between lenders.</li>
            </ul>
            
            <p>Before making a decision, we recommend using loan calculators to compare different scenarios and consulting with multiple financial institutions to find the most favorable terms for your situation.</p>
        `,
        author: "Aisha Abdullah",
        date: "February 15, 2023",
        category: "Financing",
        tags: ["car loans", "financing", "interest rates", "Malaysia", "personal finance"],
        coverImage: "blog-assets/images/car-loan.jpg",
        featured: false
    },
    {
        id: 4,
        title: "Essential Maintenance Tips to Extend Your Car's Lifespan in Malaysia's Climate",
        slug: "essential-maintenance-tips-car-lifespan-malaysia-climate",
        excerpt: "Learn how to protect your vehicle from Malaysia's hot, humid conditions with these specialized maintenance tips.",
        content: `
            <p>Malaysia's tropical climate presents unique challenges for vehicle maintenance. High humidity, intense heat, frequent rain, and occasionally flooded roads can accelerate wear and damage to your car. Following these specialized maintenance tips will help protect your investment and extend your vehicle's lifespan in these challenging conditions.</p>
            
            <h3>1. Protecting Your Car's Exterior</h3>
            
            <h4>Regular Washing and Waxing</h4>
            <p>Malaysia's combination of UV exposure, acid rain, and air pollution can quickly deteriorate your car's paint.</p>
            <ul>
                <li>Wash your car at least once a week to remove contaminants</li>
                <li>Apply a quality car wax every 3-4 months to provide a protective barrier</li>
                <li>Consider a ceramic coating for longer-lasting protection (typically lasts 1-5 years)</li>
            </ul>
            
            <h4>Underbody Protection</h4>
            <p>Flooding and high humidity can accelerate rust formation on the undercarriage.</p>
            <ul>
                <li>Rinse the underbody thoroughly after driving through flooded areas</li>
                <li>Apply an anti-rust coating annually</li>
                <li>Schedule regular underbody inspections to catch rust early</li>
            </ul>
            
            <h3>2. Cooling System Maintenance</h3>
            <p>Malaysia's heat puts extra stress on your car's cooling system, making overheating a common issue.</p>
            
            <ul>
                <li>Check coolant levels weekly during hot seasons</li>
                <li>Flush and replace coolant every 30,000 km or two years</li>
                <li>Inspect radiator fins for blockage from debris and insects</li>
                <li>Test the radiator cap seal (a weak seal reduces cooling efficiency)</li>
                <li>Ensure electric cooling fans are operating correctly</li>
            </ul>
            
            <h3>3. Air Conditioning Care</h3>
            <p>In Malaysia's climate, a well-functioning AC system isn't just for comfort—it helps prevent mold and moisture damage.</p>
            
            <ul>
                <li>Run the AC for at least 10 minutes weekly, even during rainy seasons</li>
                <li>Replace cabin air filters every 15,000 km or sooner if you frequently drive in urban areas</li>
                <li>Have the AC refrigerant level checked annually</li>
                <li>Use the "dry mode" (if available) to reduce moisture in the system</li>
            </ul>
            
            <h3>4. Battery Maintenance</h3>
            <p>High temperatures accelerate battery fluid evaporation and internal corrosion, shortening battery life significantly.</p>
            
            <ul>
                <li>Check battery terminals monthly for corrosion</li>
                <li>Clean terminals with a baking soda solution if corrosion is present</li>
                <li>Ensure the battery is securely mounted to minimize vibration damage</li>
                <li>Consider upgrading to a maintenance-free battery designed for tropical climates</li>
                <li>Expect to replace batteries more frequently (typically every 2-3 years rather than 4-5)</li>
            </ul>
            
            <h3>5. Tire Care</h3>
            <p>Heat accelerates tire wear, while frequent rain affects traction and safety.</p>
            
            <ul>
                <li>Check tire pressure weekly (preferably when tires are cool)</li>
                <li>Rotate tires every 10,000 km</li>
                <li>Inspect tires regularly for cracking due to UV exposure</li>
                <li>Ensure tread depth is adequate for wet conditions (minimum 1.6mm, ideally 3mm+)</li>
                <li>Consider tires specifically formulated for tropical conditions</li>
            </ul>
            
            <h3>6. Preventing Mold and Mildew</h3>
            <p>High humidity can lead to unpleasant and potentially harmful mold growth inside your vehicle.</p>
            
            <ul>
                <li>Use a dehumidifier or desiccant packs in the car during rainy seasons</li>
                <li>Check and clear air conditioning drain tubes to prevent water accumulation</li>
                <li>Immediately dry wet floor mats and upholstery</li>
                <li>Periodically air out the interior on sunny days</li>
                <li>Consider antibacterial treatments for the AC system annually</li>
            </ul>
            
            <h3>7. Oil Changes and Fluids</h3>
            <p>Heat and humidity accelerate fluid degradation.</p>
            
            <ul>
                <li>Change engine oil every 5,000-7,000 km (slightly more frequently than in temperate climates)</li>
                <li>Use oil viscosity recommended for tropical conditions (check your manual)</li>
                <li>Check brake fluid every 6 months (moisture absorption in high humidity reduces effectiveness)</li>
                <li>Replace transmission fluid according to the severe condition schedule in your manual</li>
            </ul>
            
            <h3>8. Flood Preparation and Recovery</h3>
            <p>Even minor flooding can cause significant damage to electronic components and mechanical systems.</p>
            
            <ul>
                <li>Avoid driving through water that's above the center of your wheels</li>
                <li>After driving through standing water, dry brakes by lightly applying them while driving slowly</li>
                <li>If your car has been in deep water, DO NOT start the engine; have it towed to a mechanic</li>
                <li>Consider applying dielectric grease to electrical connections to prevent water damage</li>
            </ul>
            
            <h3>Regular Professional Inspection Schedule</h3>
            <p>For vehicles in Malaysia, consider this accelerated maintenance schedule:</p>
            
            <ul>
                <li>Full inspection every 6 months or 10,000 km</li>
                <li>AC system check annually</li>
                <li>Undercarriage inspection and treatment annually</li>
                <li>Electrical system check before and after monsoon season</li>
            </ul>
            
            <p>Following these specialized maintenance practices will help your vehicle withstand Malaysia's challenging climate conditions, potentially adding years to its useful lifespan and maintaining its resale value.</p>
        `,
        author: "Raj Kumar",
        date: "January 25, 2023",
        category: "Maintenance",
        tags: ["car maintenance", "Malaysia", "tropical climate", "car care", "tips"],
        coverImage: "blog-assets/images/car-maintenance.jpg",
        featured: false
    },
    {
        id: 5,
        title: "Electric Vehicles in Malaysia: Current Status and Future Outlook",
        slug: "electric-vehicles-malaysia-status-future-outlook",
        excerpt: "Explore the current state of electric vehicles in Malaysia, including infrastructure development, government incentives, and future prospects.",
        content: `
            <p>Electric vehicles (EVs) are transforming the global automotive landscape, but their adoption in Malaysia has been relatively slow compared to neighboring countries like Thailand and Singapore. However, recent developments suggest that Malaysia's EV ecosystem is poised for significant growth in the coming years.</p>
            
            <h3>Current EV Landscape in Malaysia</h3>
            
            <h4>Available Models and Pricing</h4>
            <p>The Malaysian EV market has expanded considerably in the past year, with several key models now available:</p>
            
            <ul>
                <li><strong>Nissan Leaf</strong> - RM181,263</li>
                <li><strong>BMW iX</strong> - RM419,630</li>
                <li><strong>MINI Cooper SE</strong> - RM213,461</li>
                <li><strong>Hyundai Kona Electric</strong> - RM156,538</li>
                <li><strong>Porsche Taycan</strong> - From RM584,561</li>
                <li><strong>Tesla Model 3</strong> - Estimated RM220,000-RM280,000 (recent market entry)</li>
            </ul>
            
            <p>While these prices remain higher than comparable internal combustion engine (ICE) vehicles, the gap is narrowing thanks to government incentives.</p>
            
            <h4>Charging Infrastructure</h4>
            <p>Charging infrastructure has been a significant barrier to EV adoption in Malaysia, but the situation is improving:</p>
            
            <ul>
                <li>As of early 2023, Malaysia has approximately 900 public charging stations nationwide</li>
                <li>Major concentration in the Klang Valley, Penang, and Johor</li>
                <li>DC fast chargers now available at select locations, allowing 80% charging in 30-40 minutes</li>
                <li>Most shopping malls in urban centers now offer EV charging facilities</li>
            </ul>
            
            <p>Notable charging network providers include ChargEV, JomCharge, and chargeEV, with petroleum companies like Petronas and Shell also entering the market.</p>
            
            <h3>Government Policies and Incentives</h3>
            
            <p>The Malaysian government has implemented several policies to encourage EV adoption:</p>
            
            <ul>
                <li><strong>Import and excise duty exemptions</strong> for fully imported EVs until December 31, 2025</li>
                <li><strong>Road tax exemptions</strong> for battery electric vehicles</li>
                <li><strong>Income tax relief</strong> of up to RM2,500 for installation of charging facilities</li>
                <li><strong>Green Investment Tax Allowance (GITA)</strong> for companies investing in EV infrastructure</li>
            </ul>
            
            <p>These incentives are part of Malaysia's Low Carbon Mobility Blueprint 2021-2030, which aims to establish 10,000 public charging stations by 2025 and position Malaysia as a regional EV manufacturing hub.</p>
            
            <h3>Challenges Facing EV Adoption</h3>
            
            <p>Despite progress, several challenges remain:</p>
            
            <h4>Range Anxiety and Infrastructure</h4>
            <p>While urban areas increasingly have adequate charging options, long-distance travel remains challenging, particularly along highways and in rural areas. The North-South Expressway, Malaysia's main highway, still has significant gaps in fast-charging coverage.</p>
            
            <h4>High Initial Cost</h4>
            <p>Despite incentives, EVs generally remain 20-30% more expensive than comparable ICE vehicles, limiting mass market appeal. Battery replacement concerns also factor into consumer hesitation.</p>
            
            <h4>Electrical Grid Readiness</h4>
            <p>Questions remain about whether Malaysia's electrical infrastructure can support widespread EV adoption, particularly in older residential areas where power supply may already be constrained.</p>
            
            <h3>The Future Outlook</h3>
            
            <p>Several trends suggest accelerating EV adoption in Malaysia:</p>
            
            <h4>Upcoming Affordable Models</h4>
            <p>The entry of more affordable EV models is expected to boost adoption:</p>
            <ul>
                <li>Several Chinese manufacturers including BYD, Chery, and Great Wall Motors are preparing to enter the Malaysian market</li>
                <li>Proton is expected to introduce EV models through its partnership with Geely</li>
                <li>Perodua has announced plans for hybrid vehicles, potentially leading to full EVs</li>
            </ul>
            
            <h4>Infrastructure Expansion</h4>
            <p>Major investments in charging infrastructure are underway:</p>
            <ul>
                <li>Petronas and Mercedes-Benz have announced a high-power charging network along key highways</li>
                <li>TNB, Malaysia's national electricity provider, is investing RM90 million in charging infrastructure</li>
                <li>Shell aims to install 180 DC chargers at its stations by 2025</li>
            </ul>
            
            <h4>Government Targets</h4>
            <p>The government has outlined ambitious goals:</p>
            <ul>
                <li>30% of total industry volume to be EV or hybrid by 2030</li>
                <li>Malaysia to become a regional EV manufacturing hub</li>
                <li>Development of a local EV supply chain and component ecosystem</li>
            </ul>
            
            <h3>Practical Considerations for Potential EV Buyers</h3>
            
            <p>If you're considering an EV purchase in Malaysia, keep these factors in mind:</p>
            
            <ul>
                <li><strong>Home charging options:</strong> Installing a home charger (Level 2, 7kW) costs approximately RM5,000-RM8,000 but dramatically improves the ownership experience</li>
                <li><strong>Battery warranty:</strong> Most EVs available in Malaysia offer 8-year battery warranties, providing peace of mind</li>
                <li><strong>Maintenance costs:</strong> EVs typically cost 30-40% less to maintain than ICE vehicles due to fewer moving parts</li>
                <li><strong>Residual value:</strong> Consider the relatively untested resale market when factoring total cost of ownership</li>
            </ul>
            
            <h3>Conclusion</h3>
            
            <p>While Malaysia's EV adoption lags behind some neighboring countries, the infrastructure, vehicle options, and government support are rapidly improving. For urban dwellers with access to charging facilities, EVs already represent a viable and increasingly attractive option. As charging infrastructure expands and more affordable models enter the market, we can expect EV adoption to accelerate significantly in the next 2-3 years.</p>
            
            <p>Whether Malaysia will meet its ambitious EV targets remains to be seen, but the momentum is clearly building toward an electric future on Malaysian roads.</p>
        `,
        author: "Dr. Chong Wei Lin",
        date: "January 10, 2023",
        category: "Industry Trends",
        tags: ["electric vehicles", "EV", "Malaysia", "sustainable transportation", "future mobility"],
        coverImage: "blog-assets/images/electric-vehicles.jpg",
        featured: true
    }
];

// Helper functions for filtering and sorting blog posts
const filterBlogPosts = (filters = {}) => {
    return blogPosts.filter(post => {
        let matches = true;
        
        if (filters.category && filters.category !== 'all') {
            matches = matches && post.category.toLowerCase() === filters.category.toLowerCase();
        }
        
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            const searchFields = [
                post.title.toLowerCase(),
                post.excerpt.toLowerCase(),
                post.content.toLowerCase(),
                post.author.toLowerCase(),
                ...post.tags.map(tag => tag.toLowerCase())
            ];
            matches = matches && searchFields.some(field => field.includes(searchTerm));
        }
        
        return matches;
    });
};

const sortBlogPosts = (posts, sortBy = 'date-desc') => {
    return [...posts].sort((a, b) => {
        switch (sortBy) {
            case 'date-desc':
                // Convert date strings to Date objects for comparison
                return new Date(b.date) - new Date(a.date);
            case 'date-asc':
                return new Date(a.date) - new Date(b.date);
            case 'title-asc':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });
};

// Get a single blog post by ID
const getBlogPostById = (id) => {
    return blogPosts.find(post => post.id === parseInt(id));
};

// Get a single blog post by slug
const getBlogPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};

// Get all unique categories
const getCategories = () => {
    const categories = blogPosts.map(post => post.category);
    return [...new Set(categories)];
};

// Get all featured posts
const getFeaturedPosts = () => {
    return blogPosts.filter(post => post.featured);
};

// Get related posts (same category, excluding the current post)
const getRelatedPosts = (currentPostId, limit = 3) => {
    const currentPost = getBlogPostById(currentPostId);
    if (!currentPost) return [];
    
    return blogPosts
        .filter(post => post.id !== currentPostId && post.category === currentPost.category)
        .slice(0, limit);
};

// Format date to a more readable format
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

// Export the functions and data
export { 
    blogPosts,
    filterBlogPosts,
    sortBlogPosts,
    getBlogPostById,
    getBlogPostBySlug,
    getCategories,
    getFeaturedPosts,
    getRelatedPosts,
    formatDate
}; 