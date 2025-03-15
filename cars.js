// Car data array
const cars = [
    {
        id: 1,
        brand: "Perodua",
        model: "Myvi",
        year: 2020,
        variant: "1.5 AV",
        price: 45900,
        mileage: 38000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Kuala Lumpur",
        image: "img/myvi.webp",
        images: [
            "img/myvi.webp",
            "img/myvi1.webp",
            "img/myvi2.webp"
        ],
        features: ["ABS", "Airbags", "Reverse Camera", "Smart Entry"],
        condition: "Excellent",
        seller: {
            name: "CarWeb Verified Dealer",
            type: "Dealer",
            rating: 4.8
        },
        isFeatured: true
    },
    {
        id: 2,
        brand: "Proton",
        model: "Saga",
        year: 2021,
        variant: "1.3 Premium",
        price: 38500,
        mileage: 25000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Petaling Jaya",
        image: "img/protonsagared.webp",
        images: [
            "img/protonsagared.webp",
            "img/protonsagared1.webp",
            "img/protonsagared2.webp"
        ],
        features: ["ABS", "Airbags", "Touchscreen", "Bluetooth"],
        condition: "Good",
        seller: {
            name: "Zack Wong",
            type: "Dealer",
            rating: 4.5
        },
        isFeatured: false
    },
    {
        id: 3,
        brand: "Honda",
        model: "City",
        year: 2019,
        variant: "1.5 V",
        price: 72900,
        mileage: 45000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Shah Alam",
        image: "img/hondacity.webp",
        images: [
            "img/hondacity.webp",
            "img/hondacity1.webp",
            "img/hondacity2.webp"
        ],
        features: ["Cruise Control", "Leather Seats", "Keyless Entry", "VSA"],
        condition: "Good",
        seller: {
            name: "Premium Cars",
            type: "Dealer",
            rating: 4.7
        },
        isFeatured: true
    },
    {
        id: 4,
        brand: "Toyota",
        model: "Camry",
        year: 2016,
        variant: "2.5 V",
        price: 189900,
        mileage: 15000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Penang",
        image: "img/camry.webp",
        images: [
            "img/camry.webp",
            "img/camry1.webp",
            "img/camry2.webp"
        ],
        features: ["Dynamic Radar Cruise Control", "Lane Departure Alert", "Wireless Charging", "JBL Audio"],
        condition: "Excellent",
        seller: {
            name: "Toyota Certified Pre-Owned",
            type: "Dealer",
            rating: 4.9
        },
        isFeatured: true
    },
    {
        id: 5,
        brand: "BMW",
        model: "X1",
        year: 2021,
        variant: "sDrive20i M Sport 2.0",
        price: 149000,
        mileage: 28000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Kuala Lumpur",
        image: "img/bmw.webp",
        images: [
            "img/bmw.webp",
            "img/bmw1.webp",
            "img/bmw2.webp"
        ],
        features: ["M Sport Package", "Harman Kardon Sound", "Parking Assistant", "BMW Live Cockpit"],
        condition: "Excellent",
        seller: {
            name: "Auto Bavaria",
            type: "Dealer",
            rating: 4.8
        },
        isFeatured: true
    },
    {
        id: 6,
        brand: "Perodua",
        model: "Axia",
        year: 2023,
        variant: "1.0 G",
        price: 38600,
        mileage: 5000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Johor Bahru",
        image: "img/axia.webp",
        images: [
            "img/axia.webp",
            "img/axia1.webp",
            "img/axia2.webp"
        ],
        features: ["ABS", "Dual Airbags", "Power Windows", "USB Port"],
        condition: "Like New",
        seller: {
            name: "JB Motors",
            type: "Dealer",
            rating: 4.3
        },
        isFeatured: false
    },
    {
        id: 7,
        brand: "Proton",
        model: "X50",
        year: 2022,
        variant: "1.5 TGDi Flagship",
        price: 98800,
        mileage: 18000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Subang Jaya",
        image: "img/protonx50.webp",
        images: [
            "img/protonx50.webp",
            "img/protonx501.webp",
            "img/protonx502.webp"
        ],
        features: ["ADAS", "360 Camera", "Panoramic Sunroof", "Voice Command"],
        condition: "Excellent",
        seller: {
            name: "Proton Edar",
            type: "Dealer",
            rating: 4.6
        },
        isFeatured: true
    },
    {
        id: 8,
        brand: "Honda",
        model: "Civic",
        year: 2023,
        variant: "1.5 TC-P",
        price: 142900,
        mileage: 8000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Petaling Jaya",
        image: "img/hondacivic.webp",
        images: [
            "img/hondacivic.webp",
            "img/hondacivic1.webp",
            "img/hondacivic2.webp"
        ],
        features: ["Honda Sensing", "Honda Connect", "Wireless Apple CarPlay", "Honda LaneWatch"],
        condition: "Like New",
        seller: {
            name: "Honda Certified Pre-Owned",
            type: "Dealer",
            rating: 4.7
        },
        isFeatured: true
    },
    {
        id: 9,
        brand: "Mercedes-Benz",
        model: "A200",
        year: 2018,
        variant: "Progressive Line 1.3",
        price: 118000,
        mileage: 22000,
        transmission: "Automatic",
        fuelType: "Petrol",
        location: "Kuala Lumpur",
        image: "img/benz.webp",
        images: [
            "img/benz.webp",
            "img/benz1.webp",
            "img/benz2.webp"
        ],
        features: ["AMG Line", "Burmester Sound", "Panoramic Roof", "Mercedes Me Connect"],
        condition: "Excellent",
        seller: {
            name: "Cycle & Carriage",
            type: "Dealer",
            rating: 4.9
        },
        isFeatured: true
    },
    {
        id: 10,
        brand: "Nissan",
        model: "X-Trail",
        year: 2022,
        variant: "2.0L Hybrid",
        price: 159800,
        mileage: 12000,
        transmission: "Automatic",
        fuelType: "Hybrid",
        location: "Penang",
        image: "img/xtrail.webp",
        images: [
            "img/xtrail.webp",
            "img/xtrail1.webp",
            "img/xtrail2.webp"
        ],
        features: ["ProPILOT", "e-POWER", "Around View Monitor", "Bose Premium Audio"],
        condition: "Excellent",
        seller: {
            name: "ETCM Penang",
            type: "Dealer",
            rating: 4.5
        },
        isFeatured: false
    }
];

// Helper functions for filtering and sorting
const filterCars = (filters) => {
    return cars.filter(car => {
        let matches = true;
        
        if (filters.brand && filters.brand !== 'all') {
            matches = matches && car.brand.toLowerCase() === filters.brand.toLowerCase();
        }
        
        if (filters.priceRange) {
            const [min, max] = filters.priceRange.split('-').map(Number);
            matches = matches && car.price >= min && car.price <= max;
        }
        
        if (filters.year) {
            matches = matches && car.year >= filters.year;
        }
        
        return matches;
    });
};

const sortCars = (cars, sortBy) => {
    return [...cars].sort((a, b) => {
        switch (sortBy) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'year-desc':
                return b.year - a.year;
            case 'mileage-asc':
                return a.mileage - b.mileage;
            default:
                return 0;
        }
    });
};

// Function to format price to Malaysian Ringgit
const formatPrice = (price) => {
    return `RM ${price.toLocaleString()}`;
};

// Export the functions and data
export { cars, filterCars, sortCars, formatPrice };