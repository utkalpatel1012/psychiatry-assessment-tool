// Official Google OAuth 2.0 & Google Drive API v3 Integration
let GOOGLE_CLIENT_ID = localStorage.getItem('google_custom_client_id') || '';

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
    if (!clientId || !clientId.trim()) {
      alert('Please enter a valid Google Cloud OAuth 2.0 Client ID.');
      return;
    }
    GOOGLE_CLIENT_ID = clientId.trim();
    localStorage.setItem('google_custom_client_id', GOOGLE_CLIENT_ID);
    alert('Google OAuth 2.0 Client ID updated successfully! Retrying authentication...');
    this.requestDrivePermission();
  },

  getClientId() {
    return GOOGLE_CLIENT_ID;
  },

  promptConfigureClientId() {
    const currentId = GOOGLE_CLIENT_ID || '';
    const userEnteredId = prompt(
      "Google OAuth 2.0 Client ID Setup:\n\n" +
      "To connect your personal/hospital Google Drive account, please enter your Google Cloud Web Client ID below:\n" +
      "(Example: 123456789-abc.apps.googleusercontent.com)\n\n" +
      "Steps to get your free key:\n" +
      "1. Open https://console.cloud.google.com\n" +
      "2. Create OAuth 2.0 Web Client ID\n" +
      "3. Set Authorized Origin: " + window.location.origin,
      currentId
    );

    if (userEnteredId !== null) {
      this.setClientId(userEnteredId);
    }
  },

  // Open Authentic Google OAuth 2.0 Sign-In Popup
  requestDrivePermission(onSuccessCallback) {
    if (!GOOGLE_CLIENT_ID) {
      this.promptConfigureClientId();
      return;
    }

    const currentOrigin = window.location.origin;
    const scope = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    
    // Check if GIS TokenClient is available
    if (typeof google !== 'undefined' && google.accounts && google.accounts.oauth2) {
      try {
        const tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: scope,
          error_callback: (err) => {
            console.error('GIS Error Callback:', err);
            this.handleOAuthError(err);
          },
          callback: async (tokenResponse) => {
            if (tokenResponse && tokenResponse.access_token) {
              accessToken = tokenResponse.access_token;
              localStorage.setItem('google_access_token', accessToken);
              await this.fetchUserProfile(accessToken);
              if (onSuccessCallback) onSuccessCallback(accessToken);
            } else if (tokenResponse && tokenResponse.error) {
              this.handleOAuthError(tokenResponse.error);
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

  handleOAuthError(err) {
    console.warn('Google OAuth Authentication Error:', err);
    const errStr = typeof err === 'string' ? err : JSON.stringify(err);
    
    if (errStr.includes('invalid_client') || errStr.includes('401') || !GOOGLE_CLIENT_ID) {
      alert("Error 401: Invalid Google OAuth Client ID.\n\nYour domain (" + window.location.origin + ") requires a valid Google Cloud Client ID.");
      this.promptConfigureClientId();
    } else {
      alert("Google Sign-In Notice: " + (err.message || errStr));
    }
  },

  fallbackOAuthPopupWindow(onSuccessCallback) {
    const redirectUri = window.location.origin;
    const scope = encodeURIComponent('https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email');
    
    // Official Google OAuth 2.0 Web Endpoint
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(GOOGLE_CLIENT_ID)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${scope}&prompt=consent`;

    const width = 520;
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

    // Monitor popup for token redirect or errors
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
        } else if (popup.location.href.includes('error=')) {
          const searchParams = new URLSearchParams(popup.location.search.substring(1));
          const err = searchParams.get('error');
          popup.close();
          clearInterval(interval);
          this.handleOAuthError(err || 'invalid_client');
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
        alert(`Successfully connected Google Account: ${googleUser.email}`);
      }
    } catch (e) {
      console.error('Error fetching Google user profile:', e);
    }
  },

  async saveRecordToDrive(record) {
    if (!accessToken) {
      this.requestDrivePermission((token) => {
        this.executeDriveUpload(record, token);
      });
      return;
    }
    this.executeDriveUpload(record, accessToken);
  },

  async executeDriveUpload(record, token) {
    try {
      const fileName = `Psychiatry_Evaluation_${record.scaleId}_${record.patientId.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.json`;
      const metadata = {
        name: fileName,
        mimeType: 'application/json'
      };

      const fileContent = JSON.stringify(record, null, 2);
      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      form.append('file', new Blob([fileContent], { type: 'application/json' }));

      const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: form
      });

      if (res.ok) {
        const fileData = await res.json();
        alert(`Patient report backed up to Google Drive!\nFile ID: ${fileData.id}`);
      } else {
        const errJson = await res.json();
        if (res.status === 401) {
          alert('Google Drive session expired. Please re-authenticate.');
          accessToken = null;
          localStorage.removeItem('google_access_token');
          this.requestDrivePermission();
        } else {
          alert(`Google Drive Upload Notice: ${errJson.error ? errJson.error.message : 'Upload failed'}`);
        }
      }
    } catch (e) {
      console.error('Drive upload exception:', e);
      alert('Error uploading to Google Drive. Local copy saved safely.');
    }
  },

  signOut() {
    accessToken = null;
    googleUser = null;
    localStorage.removeItem('google_access_token');
    localStorage.removeItem('google_user_profile');
    if (this.onAuthChange) this.onAuthChange(null, false);
    alert('Signed out of Google Account.');
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoogleDriveService;
}
