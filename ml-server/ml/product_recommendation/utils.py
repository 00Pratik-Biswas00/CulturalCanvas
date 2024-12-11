from datetime import datetime

# Sample store data structure
stores = [
    {"id": 1, "name": "Raipur Mart", "city": "Raipur", "latitude": 21.2514, "longitude": 81.6296, "products": [
        {"name": "Chhattisgarh Handicrafts", "description": "Beautiful handcrafted items made in Chhattisgarh.", "price": "Rs. 500", "image_url": "https://via.placeholder.com/150"},
        {"name": "Organic Rice", "description": "Locally grown organic rice.", "price": "Rs. 1200", "image_url": "https://via.placeholder.com/150"},
        {"name": "Mahua Drink", "description": "Traditional Mahua drink from Chhattisgarh.", "price": "Rs. 300", "image_url": "https://via.placeholder.com/150"},
        {"name": "Terracotta Items", "description": "Exquisite terracotta art from local artisans.", "price": "Rs. 800", "image_url": "https://via.placeholder.com/150"},
        {"name": "Bamboo Crafts", "description": "Eco-friendly bamboo craft products.", "price": "Rs. 600", "image_url": "https://via.placeholder.com/150"},
        {"name": "Kosa Silk Stoles", "description": "Elegant silk stoles perfect for any occasion.", "price": "Rs. 1500", "image_url": "https://via.placeholder.com/150"},
        {"name": "Tribal Jewelry", "description": "Ethnic jewelry crafted by local tribes.", "price": "Rs. 1000", "image_url": "https://via.placeholder.com/150"}
    ]},
    {"id": 2, "name": "Raipur Central", "city": "Raipur", "latitude": 21.2564, "longitude": 81.6378, "products": [
        {"name": "Kosa Silk Saree", "description": "Authentic Chhattisgarh Kosa silk saree.", "price": "Rs. 2500", "image_url": "https://via.placeholder.com/150"},
        {"name": "Pickles", "description": "Homemade pickles in a variety of flavors.", "price": "Rs. 150", "image_url": "https://via.placeholder.com/150"},
        {"name": "Handmade Jewelry", "description": "Unique jewelry crafted by local artisans.", "price": "Rs. 700", "image_url": "https://via.placeholder.com/150"}
    ]},
    {"id": 3, "name": "Raipur Emporium", "city": "Raipur", "latitude": 21.2634, "longitude": 81.6445, "products": [
        {"name": "Wooden Toys", "description": "Traditional wooden toys from Chhattisgarh.", "price": "Rs. 400", "image_url": "https://via.placeholder.com/150"},
        {"name": "Herbal Tea", "description": "Organic herbal tea blends.", "price": "Rs. 250", "image_url": "https://via.placeholder.com/150"},
        {"name": "Metal Crafts", "description": "Handcrafted metal artifacts.", "price": "Rs. 1200", "image_url": "https://via.placeholder.com/150"}
    ]}
]

products = [
    {
        "id": "6759c6385204dcbaadf3fc09",
        "name": "Dhokra",
        "description": "Dhokra (also spelt Dokra) is non–ferrous metal casting using the lost-wax casting technique. This sort of metal casting has been used in India for over 4,000 years and is still used. One of the earliest known lost wax artefacts is the dancing girl of Mohenjo-daro.[1] The product of dhokra artisans are in great demand in domestic and foreign markets because of primitive simplicity, enchanting folk motifs and forceful form. Dhokra horses, elephants, peacocks, owls, religious images, measuring bowls, and lamp caskets etc., are highly appreciated.[2] The lost wax technique for casting of copper based alloys has also been found in China, Egypt, Malaysia, Nigeria, Central America, and other places.",
        "uniqueFeature": "Bell Metal Dhokra is a traditional Indian metal casting art known for its use of the lost wax technique, ensuring each piece is unique. Crafted from a copper and tin alloy, Dhokra artifacts have a distinctive golden sheen and a rustic, primitive aesthetic. The designs often depict themes inspired by nature, mythology, and tribal life, featuring animals, deities, and rural scenes. Entirely handmade, the process relies on sustainable, eco-friendly materials like beeswax, clay, and scrap metal, preserving ancient techniques passed down through generations. With roots tracing back over 4,000 years to the Indus Valley Civilization, Dhokra art is celebrated for its cultural significance, versatile applications in decorative and functional items, and its enduring charm.",
        "materialDetails": [
            {
            "name": "Copper",
            "description": " a reddish, extremely ductile metal of Group 11 (Ib) of the periodic table that is an unusually good conductor of electricity and heat.",
            "_id": {
                "$oid": "6759c6385204dcbaadf3fc0a"
            }
            },
            {
            "name": "Tin",
            "description": "Tin is a chemical element; it has symbol Sn (from Latin stannum) and atomic number 50. A silvery-colored metal, tin is soft enough to be cut with little force,[10] and a bar of tin can be bent by hand with little effort.",
            "_id": {
                "$oid": "6759c6385204dcbaadf3fc0b"
            }
            }
        ],
        "image": {
            "url": "https://res.cloudinary.com/dqyqqysgx/image/upload/v1733939045/aq41gyuz6ermo3p5orzf.jpg",
            "public_id": "wooden_table_123"
        },
        "video": {
            "ETag": "\"2f0316b9702ed3c7260f82b7e558e29e-9\"",
            "ServerSideEncryption": "AES256",
            "Location": "https://culturalcanvas.s3.ap-south-1.amazonaws.com/u5_w13U6fW5KVYApehOOD.mp4",
            "Key": "u5_w13U6fW5KVYApehOOD.mp4",
            "Bucket": "culturalcanvas"
        },
        "price": 849.99,
        "category": "Handicrafts",
        "quantity": 5,
        "coordinates": {
            "longitude": 19.076,
            "latitude": 72.8777
        },
        "city": "Raipur",
        "seller": {
            "$oid": "6759b2c89438a2617c835a30"
        },
        "certification": {
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmE95EzHX3jmUKTtNZGh63ud9EgJ781w4Mcw&s",
            "public_id": "cert_wooden_table_123"
        },
    },
    {
        "id": 1,
        "name": "Handcrafted Wooden Chair",
        "description": "A beautifully handcrafted chair made from high-quality teak wood. Perfect for adding a rustic charm to any room.",
        "uniqueFeature": "100% hand-carved by artisans.",
        "materialDetails": [
            { "name": "Wood", "description": "Teak wood, known for its durability and natural aesthetic." },
            { "name": "Finish", "description": "Hand-applied varnish for a smooth, glossy finish." }
        ],
        "image": { "url": "http://example.com/image1.jpg", "public_id": "image1_public_id" },
        "video": { "ETag": "etag123", "ServerSideEncryption": "AES256", "Location": "http://video.com/video1.mp4", "Key": "video1_key", "Bucket": "product-bucket" },
        "price": 5000,
        "category": "Handicrafts",
        "quantity": 10,
        "coordinates": { "longitude": 81.6296, "latitude": 21.2514 },
        "city": "Raipur",
        "seller": "seller123",
        "certification": { "url": "http://example.com/cert1.jpg", "public_id": "cert1_public_id" },
        "reviews": [
            {
                "reviewer": "user001",
                "review": "The quality of the chair is exceptional, very sturdy and comfortable.",
                "rating": 5,
                "createdAt": datetime(2024, 12, 1, 10, 0)
            },
            {
                "reviewer": "user002",
                "review": "Beautiful craftsmanship, but a bit too heavy for my liking.",
                "rating": 4,
                "createdAt": datetime(2024, 12, 3, 14, 30)
            }
        ]
    },
    {
        "id": 2,
        "name": "Cotton Traditional Kurta",
        "description": "A soft, comfortable cotton kurta with intricate traditional embroidery. Perfect for casual wear or festivals.",
        "uniqueFeature": "Hand-embroidered details on the chest.",
        "materialDetails": [
            { "name": "Fabric", "description": "100% pure cotton, breathable and soft." },
            { "name": "Embroidery", "description": "Traditional hand-stitched embroidery around the neckline." }
        ],
        "image": { "url": "http://example.com/image2.jpg", "public_id": "image2_public_id" },
        "video": { "ETag": "etag456", "ServerSideEncryption": "AES256", "Location": "http://video.com/video2.mp4", "Key": "video2_key", "Bucket": "product-bucket" },
        "price": 1500,
        "category": "Clothing",
        "quantity": 20,
        "coordinates": { "longitude": 81.6296, "latitude": 21.2514 },
        "city": "Raipur",
        "seller": "seller456",
        "certification": { "url": "http://example.com/cert2.jpg", "public_id": "cert2_public_id" },
        "reviews": [
            {
                "reviewer": "user003",
                "review": "Lovely kurta! The fabric is very soft, and the design is beautiful.",
                "rating": 5,
                "createdAt": datetime(2024, 12, 2, 9, 0)
            },
            {
                "reviewer": "user004",
                "review": "Good quality but the fit is a little loose. Still, great for festivals.",
                "rating": 4,
                "createdAt": datetime(2024, 12, 4, 16, 45)
            }
        ]
    },
    {
        "id": 1,
        "name": "Handwoven Woolen Blanket",
        "description": "A cozy, handwoven woolen blanket, perfect for cold winter nights. Soft, warm, and eco-friendly.",
        "uniqueFeature": "Made from sustainably sourced wool.",
        "materialDetails": [
            { "name": "Wool", "description": "Soft wool from local sheep, handwoven by skilled artisans." },
            { "name": "Edge Finish", "description": "Neatly finished edges to prevent fraying." }
        ],
        "image": { "url": "http://example.com/image3.jpg", "public_id": "image3_public_id" },
        "video": { "ETag": "etag789", "ServerSideEncryption": "AES256", "Location": "http://video.com/video3.mp4", "Key": "video3_key", "Bucket": "product-bucket" },
        "price": 2500,
        "category": "Handicrafts",
        "quantity": 15,
        "coordinates": { "longitude": 81.6296, "latitude": 21.2514 },
        "city": "Raipur",
        "seller": "seller789",
        "certification": { "url": "http://example.com/cert3.jpg", "public_id": "cert3_public_id" },
        "reviews": [
            {
                "reviewer": "user005",
                "review": "Incredibly soft and warm, perfect for winter. I love the eco-friendly material.",
                "rating": 5,
                "createdAt": datetime(2024, 12, 5, 12, 0)
            },
            {
                "reviewer": "user006",
                "review": "Good quality but the color was slightly different from the picture.",
                "rating": 4,
                "createdAt": datetime(2024, 12, 6, 13, 30)
            }
        ]
    }
]


def get_stores_data():
    return products