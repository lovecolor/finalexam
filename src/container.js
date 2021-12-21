import { getAppConfig } from "./config"

import { createApiClient } from "./services/api/createApiClient"
import { createAppApiClient } from "./services/api/createAppApiClient"

const config = getAppConfig()

const apiClient = createAppApiClient(createApiClient({ baseURL: config.api.host }))

export const getAppContainer = () => ({ 
  config,
  apiClient,
})