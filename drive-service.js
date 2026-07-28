// Official Google Identity Services & Google Drive API v3 Integration
let GOOGLE_CLIENT_ID = localStorage.getItem('google_custom_client_id') || '';

let googleUser = null;
let idToken = null;
let tokenClient = null;
let accessToken = null;

const GoogleDriveService = {
  init(onAuthChange) {
    this.onAuthChange = onAuthChange;
    this.loadSavedUser();

    // Initialize Google Identity Services when script loads
    window.onload = () => {
      this.initGoogleSDK();
    };
    if (typeof google !== 'undefined' && google.accounts) {
      this.initGoogleSDK();
    }
  },

  loadSavedUser() {
    try {
      const savedUser = localStorage.getItem('google_user_profile');
      const savedToken = localStorage.getItem('google_access_token');
      if (savedUser) {
        googleUser = JSON.parse(savedUser);
        accessToken = savedToken;
        if (this.onAuthChange) this.onAuthChange(googleUser, true);
      }
    } catch (e) {
      console.warn('Google auth restore error:', e);
    }
  },

  initGoogleSDK() {
    if (typeof google === 'undefined' || !google.accounts) return;

    const clientIdToUse = GOOGLE_CLIENT_ID || '1082531393608-p7hql5v9n5e0u8k4b9r3v2q1s8t4u5v6.apps.googleusercontent.com';

    try {
      google.accounts.id.initialize({
        client_id: clientIdToUse,
        callback: (response) => this.handleCredentialResponse(response),
        auto_select: false
      });

      // Render official Google Sign-In button into target DIVs if present
      const targetDiv = document.getElementById('g_id_signin_div');
      if (targetDiv) {
        google.accounts.id.renderButton(targetDiv, {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'pill',
          logo_alignment: 'left'
        });
      }
    } catch (err) {
      console.warn('Google GIS init error:', err);
    }
  },

  handleCredentialResponse(response) {
    if (response && response.credential) {
      try {
        const payload = this.parseJwt(response.credential);
        idToken = response.credential;
        googleUser = {
          id: payload.sub,
          name: payload.name || payload.email,
          email: payload.email,
          picture: payload.picture
        };
        localStorage.setItem('google_user_profile', JSON.stringify(googleUser));
        localStorage.setItem('google_id_token', idToken);

        if (this.onAuthChange) this.onAuthChange(googleUser, true);
        alert(`Signed in with Google as ${googleUser.email}!`);
      } catch (e) {
        console.error('Error parsing Google ID token:', e);
      }
    }
  },

  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  },

  requestAccessToken() {
    if (typeof google === 'undefined' || !google.accounts) {
      alert('Google Sign-In SDK is loading. Please ensure you are connected to the internet and try again.');
      return;
    }

    const clientIdToUse = GOOGLE_CLIENT_ID || '1082531393608-p7hql5v9n5e0u8k4b9r3v2q1s8t4u5v6.apps.googleusercontent.com';

    // Trigger official Google One-Tap or Google OAuth prompt
    try {
      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          // If One-Tap is suppressed or blocked, open OAuth scope grant popup
          if (!tokenClient) {
            tokenClient = google.accounts.oauth2.initTokenClient({
              client_id: clientIdToUse,
              scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
              callback: (tokenResponse) => {
                if (tokenResponse && tokenResponse.access_token) {
                  accessToken = tokenResponse.access_token;
                  localStorage.setItem('google_access_token', accessToken);
                  this.fetchUserInfo(accessToken);
                }
              }
            });
          }
          tokenClient.requestAccessToken({ prompt: 'select_account' });
        }
      });
    } catch (e) {
      console.error('Error invoking Google sign-in prompt:', e);
    }
  },

  async fetchUserInfo(token) {
    try {
      const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const profile = await res.json();
      googleUser = {
        id: profile.sub,
        name: profile.name || profile.email,
        email: profile.email,
        picture: profile.picture
      };
      localStorage.setItem('google_user_profile', JSON.stringify(googleUser));
      if (this.onAuthChange) this.onAuthChange(googleUser, true);
      alert(`Signed in with Google Account: ${googleUser.email}`);
    } catch (e) {
      console.error('Fetch user info error:', e);
    }
  },

  setClientId(clientId) {
    GOOGLE_CLIENT_ID = clientId;
    localStorage.setItem('google_custom_client_id', clientId);
    this.initGoogleSDK();
    alert('Custom Google Client ID updated!');
  },

  signOut() {
    if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
      google.accounts.id.disableAutoSelect();
    }
    googleUser = null;
    idToken = null;
    accessToken = null;
    localStorage.removeItem('google_user_profile');
    localStorage.removeItem('google_id_token');
    localStorage.removeItem('google_access_token');
    if (this.onAuthChange) this.onAuthChange(null, false);
    alert('Signed out of Google Account.');
  },

  async saveRecordToDrive(record) {
    if (!accessToken) {
      console.log('User not signed in with Google Drive access token.');
      return false;
    }

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
        headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
        body: form
      });

      const resData = await response.json();
      console.log('Assessment record saved directly to Google Drive:', resData);
      return resData;
    } catch (e) {
      console.error('Error saving file to Google Drive:', e);
      return false;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoogleDriveService;
}
