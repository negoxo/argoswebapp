export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '3f5d3dab-1844-4973-842c-9311d53109c6',
      authority: 'https://login.microsoftonline.com/faa44fd9-dabe-4064-a6bb-59608ea9d0f3',
      redirectUri: 'http://localhost:4200',
      ostLogoutRedirectUri: 'http://localhost:4200'
    },
    cache: {
      // CacheLocation se configura en app.module.ts
      // storeAuthStateInCookie: false // VITE_STORE_COOKE
    }
  },
  apiConfig: {
    scopes: ['api://3f5d3dab-1844-4973-842c-9311d53109c6/default'], // VITE_SCOPE
    uri: 'http://localhost:5000/api/data'
  },
  graphApiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me' // VITE_GRAPH_ENDPOINT
  }
};