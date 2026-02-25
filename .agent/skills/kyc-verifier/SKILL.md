# KYC Verifier Skill

Description: Use this skill whenever a user mentions 'KYC', 'verify ID', or 'Aadhaar' for the Apex Care admin panel.

Trigger: When an image is uploaded to the /uploads/kyc folder.

## Instructions
1. Run the verification script: `node verify_aadhaar.js [path_to_image]`
2. If successful, update the user's `kyc_status` to 'Verified' in the MongoDB collection.

## Post-Action
If the script returns `success: true`, the agent should locate the corresponding record and set `kyc_status: "Verified"`.
