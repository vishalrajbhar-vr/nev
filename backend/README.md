# NEV backend

Express API for saving website submissions in MongoDB and forwarding them by email.

## Setup

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

Edit `.env` and set a real MongoDB connection string. The template uses placeholders and is not loaded automatically.

For MongoDB Atlas:

1. Create a database user in Atlas.
2. Add your current IP address under Network Access.
3. Put the Atlas connection string in `MONGODB_URI`.
4. URL-encode special characters in the database password.

For local MongoDB, install MongoDB Community Server and make sure the MongoDB service is running. Otherwise the default local URI will fail with `ECONNREFUSED 127.0.0.1:27017`.

Set the SMTP values too. Gmail requires an App Password in `SMTP_PASSWORD`, not the normal account password. Then run:

```powershell
npm run dev
```

The API runs on `http://localhost:5000`.

Startup logs show the server lifecycle and MongoDB connection state. Credentials are redacted from the connection log. The server exits when MongoDB cannot be reached so submissions are never accepted without persistence.

## Endpoints

- `GET /api/health`
- `POST /api/submissions`

The submission body accepts `type` (`contact`, `callback`, `product`, or `dealership`) plus form fields. `name`, `email`, and `phone` are required. All other fields are stored as submitted in the `data` object.
