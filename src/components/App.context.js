/**
 * Sets global state of app
 * 
 * Currently used to kep track of which row is 'active' (highlighted)
 * 
 * Can be used to keep track of state of file explorer for the 
 * Advanced 'Export' feature
 * 
 */

import * as React from 'react';

export const {
  Provider: AppProvider,
  Consumer: AppConsumer,
} = React.createContext({});
 