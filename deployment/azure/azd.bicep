param resourceName string
param location string = resourceGroup().location

param nodeVersion string = '22-lts'
param linuxVersion string = 'NODE|${nodeVersion}'

resource appServicePlan 'Microsoft.Web/serverfarms@2024-11-01' = {
  name: resourceName
  location: location
  sku: {
    name: 'F1'
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

resource appService 'Microsoft.Web/sites@2024-11-01' = {
  name: resourceName
  location: location
  kind: 'app,linux'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: linuxVersion
      nodeVersion: nodeVersion
      appCommandLine: 'npm start'
      appSettings: [
        {
          name: 'SCM_DO_BUILD_DURING_DEPLOYMENT'
          value: 'true'
        }
      ]
    }
    httpsOnly: true
    reserved: true
  }
}

output webUrl string = appService.properties.defaultHostName
