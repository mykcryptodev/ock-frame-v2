export async function GET() {
  const appUrl = "https://ock-frame-v2.vercel.app"

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjIxNzI0OCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGViYTc4NzE3YjZmMDU5Q0ZFMGI3NUU3NUMyZWQ0QkI3Y0E2NTE1NEYifQ",
      payload: "eyJkb21haW4iOiJvY2stZnJhbWUtdjIudmVyY2VsLmFwcCJ9",
      signature: "MHhiZTlmZGNkNWQzZDMyMDBhZDlmMjAzYjA1NTBiY2M3YjA4ZDkyZjMyZjg0MzYwYTcxNDNkZWQyMzUyNzJjZDk4NDcxNzE3ZTY4ZTI0MmRiMDgyNDUyZjdkZjY5YzYyZjM4YmYxZDhmMjM2NzBiYjI3NTZmYWMxOTI2N2IwNjBiNjFj" 
    },
    frame: {
      version: "0.0.0",
      name: "Frames v2 Demo",
      iconUrl: `${appUrl}/icon.png`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      homeUrl: appUrl,
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}