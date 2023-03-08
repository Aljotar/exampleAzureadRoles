import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';
import { environment } from './environments/environment';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const msalConfig: Configuration = {
     auth: {
         clientId: '5a3ece46-fe97-4463-993b-e21fb7e5a7b1',
         authority:'https://login.microsoftonline.com/44962604-4809-48ba-bf6e-d1050d840cf2',
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
    endpoint: 'https://localhost:7261/User/GetDataUserLogin',
    scopes: []
  },

}
export const loginRequest = {
  scopes: []
};