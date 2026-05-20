# Instagram Cookies Setup Guide

## Why are cookies needed?
Instagram has blocked all public scraping methods. You need to add your Instagram session cookies to make the downloader work.

## How to get Instagram cookies:

### Method 1: Using Browser (Chrome/Edge/Firefox)

1. **Login to Instagram** in your web browser (not the app)
2. **Open Developer Tools** - Press `F12` or right-click → Inspect
3. **Go to Application tab** (in Developer Tools)
4. **Click Cookies** → Click on `instagram.com`
5. **Find `sessionid`** cookie in the list
6. **Copy the value** of the sessionid cookie

### Method 2: Using Extension
- Install "Cookie-Editor" extension for Chrome/Edge
- Go to instagram.com
- Click the extension → click "Export" 
- Look for the sessionid value

## After getting the sessionid:

1. Open the `.env` file in the project root
2. Replace `YOUR_INSTAGRAM_SESSION_ID_HERE` with your actual sessionid
3. Make sure it looks like: `sessionid=abc123xyz...`
4. Save the file
5. Restart the server: `node backend/server.js`

## Important Notes:
- The sessionid expires after some time (usually a few months)
- If it stops working, get a new sessionid
- Only use with public accounts - private accounts still won't work
- For personal use only - respect copyright

## Alternative: Use yt-dlp (Optional)
If you have yt-dlp installed, the system will automatically use it as a fallback.