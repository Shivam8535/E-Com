// ads-auth.js
import { OAuth2Client } from 'google-auth-library';
import readline from 'readline';

const CLIENT_ID = "569807550006-m9h5o67pqk8dqqef1c92lavlg4i715uj.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = '/auth/callback';

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const SCOPES = ['https://www.googleapis.com/auth/adwords'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('\n🔗 Visit this URL in your browser:\n');
console.log(authUrl);

// Ask user for auth code
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\n📥 Paste the code here: ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n✅ Refresh Token:', tokens.refresh_token);
  } catch (err) {
    console.error('❌ Error getting token:', err);
  }
  rl.close();
});



// require('dotenv').config();
// const { GoogleAdsApi } = require('google-ads-api');

// const client = new GoogleAdsApi({
//   client_id: process.env.GOOGLE_ADS_CLIENT_ID,
//   client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
//   developer_token: tokens.refresh_token,
// });

// const customer = client.Customer({
//   customer_id: 733-547-1544,
//   refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
// });

// async function listCampaigns() {
//   const campaigns = await customer.query(`
//     SELECT campaign.id, campaign.name
//     FROM campaign
//     ORDER BY campaign.id
//   `);

//   for (const row of campaigns) {
//     console.log(`Campaign: ${row.campaign.id} - ${row.campaign.name}`);
//   }
// }

// listCampaigns();
