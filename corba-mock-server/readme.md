# Yacht Booking Mock Server

This project provides a mock server for a yacht booking API with multiple endpoints.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

The server will run on `http://localhost:3210`.

## Available Endpoints

- `/countries` - List of countries
- `/worldRegions` - List of world regions
- `/yachts` - List of yachts (50+ entries)
- `/sailingAreas` - List of sailing areas
- `/bases` - List of yacht bases
- `/equipment` - List of equipment items
- `/companies` - List of charter companies
- `/shipyards` - List of shipyards
- `/yachtTypes` - List of yacht types

## Data Relationships

The server maintains consistent relationships between entities:
- Yachts reference actual company IDs
- Bases reference actual country IDs
- Yachts reference actual base IDs
- All related IDs are properly cross-referenced

## Data Generation

The server generates 50+ yacht entries on demand with consistent relationships to other entities. To create a separate file with all yacht data, you can run:

```
node generateAdditionalYachts.js
```

This will create a `yachts-extended.json` file with 50 yacht entries that you can use instead of the dynamic generation.
