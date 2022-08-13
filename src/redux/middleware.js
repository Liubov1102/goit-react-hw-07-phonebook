import { contactsApi } from './contactsSlice';

export const  middleware = getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ]
  