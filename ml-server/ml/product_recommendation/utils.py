from datetime import datetime

# Sample store data structure
stores = [
    {
        "id": 1,
        "name": "Raipur Mart",
        "city": "Raipur",
        "latitude": 21.2514,
        "longitude": 81.6296,
        "products": [
            {"name": "Chhattisgarh Handicrafts", "description": "Beautiful handcrafted items made in Chhattisgarh.", "price": "Rs. 500", "image_url": "https://via.placeholder.com/150"},
            {"name": "Organic Rice", "description": "Locally grown organic rice.", "price": "Rs. 1200", "image_url": "https://via.placeholder.com/150"},
            {"name": "Mahua Drink", "description": "Traditional Mahua drink from Chhattisgarh.", "price": "Rs. 300", "image_url": "https://via.placeholder.com/150"},
            {"name": "Terracotta Items", "description": "Exquisite terracotta art from local artisans.", "price": "Rs. 800", "image_url": "https://via.placeholder.com/150"},
            {"name": "Bamboo Crafts", "description": "Eco-friendly bamboo craft products.", "price": "Rs. 600", "image_url": "https://via.placeholder.com/150"},
            {"name": "Kosa Silk Stoles", "description": "Elegant silk stoles perfect for any occasion.", "price": "Rs. 1500", "image_url": "https://via.placeholder.com/150"},
            {"name": "Tribal Jewelry", "description": "Ethnic jewelry crafted by local tribes.", "price": "Rs. 1000", "image_url": "https://via.placeholder.com/150"}
        ]
    },
    {
        "id": 2,
        "name": "Raipur Central",
        "city": "Raipur",
        "latitude": 21.2564,
        "longitude": 81.6378,
        "products": [
            {"name": "Kosa Silk Saree", "description": "Authentic Chhattisgarh Kosa silk saree.", "price": "Rs. 2500", "image_url": "https://via.placeholder.com/150"},
            {"name": "Pickles", "description": "Homemade pickles in a variety of flavors.", "price": "Rs. 150", "image_url": "https://via.placeholder.com/150"},
            {"name": "Handmade Jewelry", "description": "Unique jewelry crafted by local artisans.", "price": "Rs. 700", "image_url": "https://via.placeholder.com/150"}
        ]
    },
    {
        "id": 3,
        "name": "Raipur Emporium",
        "city": "Raipur",
        "latitude": 21.2634,
        "longitude": 81.6445,
        "products": [
            {"name": "Wooden Toys", "description": "Traditional wooden toys from Chhattisgarh.", "price": "Rs. 400", "image_url": "https://via.placeholder.com/150"},
            {"name": "Herbal Tea", "description": "Organic herbal tea blends.", "price": "Rs. 250", "image_url": "https://via.placeholder.com/150"},
            {"name": "Metal Crafts", "description": "Handcrafted metal artifacts.", "price": "Rs. 1200", "image_url": "https://via.placeholder.com/150"}
        ]
    }
]

products = [
    {
        "id": "6759c6385204dcbaadf3fc09",
        "name": "Dhokra",
        "description": "Dhokra (also spelt Dokra) is non–ferrous metal casting using the lost-wax casting technique. This sort of metal casting has been used in India for over 4,000 years and is still used.",
        "uniqueFeature": "Bell Metal Dhokra is a traditional Indian metal casting art known for its use of the lost wax technique, ensuring each piece is unique.",
        "materialDetails": [
            {
                "name": "Copper",
                "description": "A reddish, extremely ductile metal of Group 11 (Ib) of the periodic table that is an unusually good conductor of electricity and heat.",
                "_id": {"$oid": "6759c6385204dcbaadf3fc0a"}
            },
            {
                "name": "Tin",
                "description": "Tin is a chemical element; it has symbol Sn (from Latin stannum) and atomic number 50.",
                "_id": {"$oid": "6759c6385204dcbaadf3fc0b"}
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
        "seller": {"$oid": "6759b2c89438a2617c835a30"},
        "certification": {
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmE95EzHX3jmUKTtNZGh63ud9EgJ781w4Mcw&s",
            "public_id": "cert_wooden_table_123"
        }
    },
    {
        "id": "675a5841d8fd0f5e05975535",
        "name": "Cotton fabric",
        "description": "Cotton fabric is a soft, breathable, and durable textile made from the natural fibers of the cotton plant, widely used for its comfort and versatility.",
        "uniqueFeature": "Cotton fabric is a soft, breathable, and durable textile made from the natural fibers of the cotton plant, widely used for its comfort and versatility.",
        "materialDetails": [
            {
                "name": "Cotton Fibers",
                "description": "The primary raw material, derived from the seed hair of cotton plants, providing the fabric with softness and durability.",
                "_id": {"$oid": "675a5841d8fd0f5e05975536"}
            },
            {
                "name": "Natural Dyes",
                "description": "Used to color the fabric, often derived from plants, minerals, or insects, ensuring eco-friendly and vibrant hues.",
                "_id": {"$oid": "675a5841d8fd0f5e05975537"}
            }
        ],
        "image": {
            "url": "https://res.cloudinary.com/dqyqqysgx/image/upload/v1733973557/zhlks9woi7aliz85iq5b.jpg",
            "public_id": "wooden_table_123"
        },
        "video": {
            "ETag": "\"7bd670035a08437b13c80a3f28ca2570\"",
            "ServerSideEncryption": "AES256",
            "Location": "https://culturalcanvas.s3.ap-south-1.amazonaws.com/Jom37OBdL35X_alXLRIgF.mp4",
            "Key": "Jom37OBdL35X_alXLRIgF.mp4",
            "Bucket": "culturalcanvas"
        },
        "price": 249.99,
        "category": "Handicrafts",
        "quantity": 5,
        "coordinates": {
            "longitude": 81.6286827261371,
            "latitude": 21.253246529487534
        },
        "city": "Raipur",
        "seller": {"$oid": "6759b8ed9438a2617c835a32"},
        "certification": {
            "url": "https://example.com/certification.pdf",
            "public_id": "cert_wooden_table_123"
        }
    },
    {
        "id": "675a5993d8fd0f5e05975539",
        "name": "Bamboo Art",
        "description": "Bamboo art involves crafting intricate designs and functional items using sustainable and eco-friendly bamboo, showcasing traditional craftsmanship.",
        "uniqueFeature": "The flexibility and strength of bamboo allow artisans to create a diverse range of items, from home decor to functional tools, with intricate handwoven designs.",
        "materialDetails": [
            {
                "name": "Bamboo Stalks",
                "description": "The primary raw material, providing a sturdy and versatile base for crafting.",
                "_id": {"$oid": "675a5993d8fd0f5e0597553a"}
            },
            {
                "name": "Natural Varnishes",
                "description": "Applied to enhance durability and provide a polished finish while maintaining eco-friendliness.",
                "_id": {"$oid": "675a5993d8fd0f5e0597553b"}
            }
        ],
        "image": {
            "url": "https://res.cloudinary.com/dqyqqysgx/image/upload/v1733974282/yeeuzdqoyfeunww1pqnt.jpg",
            "public_id": "wooden_table_123"
        },
        "video": {
            "ETag": "\"7bd670035a08437b13c80a3f28ca2570\"",
            "ServerSideEncryption": "AES256",
            "Location": "https://culturalcanvas.s3.ap-south-1.amazonaws.com/Jom37OBdL35X_alXLRIgF.mp4",
            "Key": "Jom37OBdL35X_alXLRIgF.mp4",
            "Bucket": "culturalcanvas"
        },
        "price": 249.99,
        "category": "Handicrafts",
        "quantity": 5,
        "coordinates": {
            "longitude": 81.6286827261371,
            "latitude": 21.253246529487534
        },
        "city": "Raipur",
        "seller": {"$oid": "6759b2c89438a2617c835a30"},
        "certification": {
            "url": "https://example.com/certification.pdf",
            "public_id": "cert_wooden_table_123"
        }
    }
]

def get_stores_data():
    return products
