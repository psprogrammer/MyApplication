import * as React from 'react';
import { Route } from 'react-router';

import { UploadPage } from './UploadContainer';

export const uploadRoutes = () => (
  <Route path="/upload" component={UploadPage} />
);
