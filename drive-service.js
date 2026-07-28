// Official Google OAuth 2.0 & Google Drive API v3 Service
let GOOGLE_CLIENT_ID = localStorage.getItem('google_custom_client_id') || '1082531393608-p7hql5v9n5e0u8k4b9r3v2q1s8t4u5v6.apps.googleusercontent.com';
const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';

let tokenClient = null;
let accessToken = localStorage.getItem('google_access_token') || null;
let googleUser = null;

try {
  const savedUser = localStorage.getItem('google_user_profile');
  if (savedUser) googleUser = JSON.parse(savedUser);
} catch (e) {
  console.warn('Error reading saved user profile:', e);
}

const GoogleDriveService = {
  init(onAuthChange) {
    this.onAuthChange = onAuthChange;
    if (googleUser && accessToken) {
      if (this.onAuthChange) this.onAuthChange(googleUser, true);
    }
  },

  setClientId(clientId) {
    GOOGLE_CLIENT_ID = clientId;
    localStorage.setItem('google_custom_client_id', clientId);
    tokenClient = null;
    alert('Google Cloud Client ID updated successfully!');
  },

  getClientId() {
    return GOOGLE_CLIENT_ID;
  },

  // Main entry point for Google Sign-In & Drive Permission Grant
  requestDrivePermission(onSuccessCallback) {
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
      alert('Google Sign-In service is loading. Please check your internet connection and try again.');
      return;
    }

    try {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: DRIVE_SCOPE,
        callback: async (tokenResponse) => {
          if (tokenResponse.error) {
            console.error('Google OAuth Error:', tokenResponse);
            if (tokenResponse.error === 'invalid_client' || tokenResponse.error === 'idpiframe_initialization_failed') {
              this.promptClientIdSetup();
            } else {
              alert('Google Authentication was cancelled or failed. Please grant Google Drive access to save assessments.');
            }
            return;
          }

          if (tokenResponse.access_token) {
            accessToken = tokenResponse.access_token;
            localStorage.setItem('google_access_token', accessToken);
            
            // Fetch real user profile from Google OAuth API
            await this.fetchUserProfile(accessToken);
            
            if (onSuccessCallback) onSuccessCallback(accessToken);
          }
        }
      });

      tokenClient.requestAccessToken({ prompt: 'consent' });
    } catch (err) {
      console.error('Failed to initialize Google OAuth Token Client:', err);
      this.promptClientIdSetup();
    }
  },

  promptClientIdSetup() {
    const userChoice = confirm(
      "To connect live Google Drive Sync on your Vercel domain, you can set your Google Cloud OAuth Client ID.\n\nWould you like to enter your Google OAuth Client ID now?"
    );
    if (userChoice) {
      const customId = prompt("Enter your Google Cloud OAuth Client ID:", GOOGLE_CLIENT_ID);
      if (customId) {
        this.setClientId(customId.trim());
        this.requestDrivePermission();
      }
    }
  },

  async fetchUserProfile(token) {
    try {
      const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const profile = await res.json();
        googleUser = {
          id: profile.sub,
          name: profile.name || profile.email,
          email: profile.email,
          picture: profile.picture
        };
        localStorage.setItem('google_user_profile', JSON.stringify(googleUser));
        if (this.onAuthChange) this.onAuthChange(googleUser, true);
      }
    } catch (e) {
      console.error('Error fetching Google user profile:', e);
    }
  },

  signOut() {
    googleUser = null;
    accessToken = null;
    localStorage.removeItem('google_user_profile');
    localStorage.removeItem('google_access_token');
    if (this.onAuthChange) this.onAuthChange(null, false);
    alert('Signed out of Google Account.');
  },

  async saveRecordToDrive(record) {
    if (!accessToken) {
      // Prompt user to grant Google Drive permission
      this.requestDrivePermission(async (newToken) => {
        await this.uploadFileToDrive(record, newToken);
      });
      return false;
    }
    return await this.uploadFileToDrive(record, accessToken);
  },

  async uploadFileToDrive(record, token) {
    try {
      const fileName = `Psychiatry_${record.scaleId}_${record.patientId || 'Patient'}_${Date.now()}.json`;
      const fileMetadata = {
        name: fileName,
        mimeType: 'application/json',
      };

      const media = {
        mimeType: 'application/json',
        body: JSON.stringify(record, null, 2)
      };

      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }));
      form.append('file', new Blob([media.body], { type: media.mimeType }));

      const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: new Headers({ 'Authorization': 'Bearer ' + token }),
        body: form
      });

      if (response.ok) {
        const resData = await response.json();
        alert(`Assessment successfully saved & synced to Google Drive!\nFile: ${fileName}`);
        return resData;
      } else {
        const errData = await response.json();
        console.error('Google Drive Upload Error:', errData);
        alert('Google Drive upload requires access permission. Re-authenticating...');
        this.requestDrivePermission();
        return false;
      }
    } catch (e) {
      console.error('Error uploading file to Google Drive:', e);
      alert('Could not upload to Google Drive. Saved locally.');
      return false;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoogleDriveService;
}
