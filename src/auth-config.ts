import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';
import { environment } from './environments/environment';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const msalConfig: Configuration = {
     auth: {
         clientId: '82defadd-5c44-43a7-ac1a-6248b0c83e3d',
         authority:'https://login.microsoftonline.com/17cd7fad-2445-4a68-9193-eb6b80b378cb',
         redirectUri:'/',
         navigateToLoginRequestUrl:false,
         postLogoutRedirectUri: '/'
     },


     cache: {
         cacheLocation: BrowserCacheLocation.SessionStorage,
         storeAuthStateInCookie: isIE
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: true
         }
         
     }, 
 }
 

export const protectedResources = {
  todoListApi: {
    endpoint: '',
    scopes: []
  },

}
export const loginRequest = {
  scopes: []
};