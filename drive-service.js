// Official Google OAuth 2.0 & Google Drive API v3 Integration
let GOOGLE_CLIENT_ID = localStorage.getItem('google_custom_client_id') || '785934029482-a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5.apps.googleusercontent.com';

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
    
    // Check if returning from Google OAuth redirect with access token in hash
    if (window.location.hash && window.location.hash.includes('access_token=')) {
      this.handleOAuthRedirectHash();
    }

    if (googleUser && accessToken) {
      if (this.onAuthChange) this.onAuthChange(googleUser, true);
    }
  },

  handleOAuthRedirectHash() {
    try {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const token = hashParams.get('access_token');
      if (token) {
        accessToken = token;
        localStorage.setItem('google_access_token', token);
        window.history.replaceState(null, null, window.location.pathname);
        this.fetchUserProfile(token);
      }
    } catch (e) {
      console.error('Error parsing OAuth hash:', e);
    }
  },

  setClientId(clientId) {
    GOOGLE_CLIENT_ID = clientId;
    localStorage.setItem('google_custom_client_id', clientId);
    alert('Google Cloud Client ID updated!');
  },

  getClientId() {
    return GOOGLE_CLIENT_ID;
  },

  // Open Authentic Google OAuth 2.0 Sign-In Popup
  requestDrivePermission(onSuccessCallback) {
    const currentOrigin = window.location.origin;
    const scope = encodeURIComponent('https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email');
    
    // Check if GIS TokenClient is available
    if (typeof google !== 'undefined' && google.accounts && google.accounts.oauth2) {
      try {
        const tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
          callback: async (tokenResponse) => {
            if (tokenResponse && tokenResponse.access_token) {
              accessToken = tokenResponse.access_token;
              localStorage.setItem('google_access_token', accessToken);
              await this.fetchUserProfile(accessToken);
              if (onSuccessCallback) onSuccessCallback(accessToken);
            } else {
              this.fallbackOAuthPopupWindow(onSuccessCallback);
            }
          }
        });
        tokenClient.requestAccessToken({ prompt: 'consent' });
        return;
      } catch (e) {
        console.warn('GIS TokenClient init error, falling back to popup window:', e);
      }
    }

    this.fallbackOAuthPopupWindow(onSuccessCallback);
  },

  fallbackOAuthPopupWindow(onSuccessCallback) {
    const redirectUri = window.location.origin;
    const scope = encodeURIComponent('https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email');
    
    // Official Google OAuth 2.0 Web Endpoint
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${scope}&prompt=consent`;

    const width = 500;
    const height = 650;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const popup = window.open(
      authUrl,
      'GoogleOAuthWindow',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,status=yes`
    );

    if (!popup) {
      alert('Pop-up blocked! Please allow pop-ups for this site to sign in with your Google Account.');
      return;
    }

    // Monitor popup for token redirect
    const interval = setInterval(() => {
      try {
        if (!popup || popup.closed) {
          clearInterval(interval);
          return;
        }
        if (popup.location.href.includes('access_token=')) {
          const hashParams = new URLSearchParams(popup.location.hash.substring(1));
          const token = hashParams.get('access_token');
          if (token) {
            accessToken = token;
            localStorage.setItem('google_access_token', token);
            popup.close();
            clearInterval(interval);
            this.fetchUserProfile(token);
            if (onSuccessCallback) onSuccessCallback(token);
          }
        }
      } catch (err) {
        // Cross-origin restriction until redirect back
      }
    }, 500);
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
        alert(`Logged in with Google Account: ${googleUser.email}`);
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
        alert(`Assessment report successfully saved to your Google Drive!\nFile: ${fileName}`);
        return resData;
      } else {
        alert('Google Drive permission required. Opening Google Login...');
        this.requestDrivePermission();
        return false;
      }
    } catch (e) {
      console.error('Error uploading file to Google Drive:', e);
      alert('Could not save to Google Drive. Saved to local storage.');
      return false;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoogleDriveService;
}
