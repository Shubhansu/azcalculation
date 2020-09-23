1. npm i
2. npm start
3. API URL: http://localhost:8080/calculateTotal 
4. Method: POST
5. Input: ```[{
		"item": "Headache pills",
		"itemCategory": "medicine",
		"quantity": 5,
		"price": 50
	},
	{
		"item": "Sandwich",
		"itemCategory": "food",
		"quantity": 2,
		"price": 200
	},
	{
		"item": "Perfume",
		"itemCategory": "imported",
		"quantity": 1,
		"price": 4000
	},
	{
		"item": "Black Swan",
		"itemCategory": "book",
		"quantity": 1,
		"price": 300
	},
    {
		"item": "Wrangler jeans",
		"itemCategory": "cloth",
		"quantity": 2,
		"price": 500
	}
]```

6. Output: ``` {
    "finalAmount": 6752.5,
    "message": "success"
}```