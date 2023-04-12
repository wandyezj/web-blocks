# Deploy to Azure

```yml
# Docs for the Azure Web Apps Deploy action: https://github.com/Azure/webapps-deploy
# More GitHub Actions for Azure: https://github.com/Azure/actions

name: Build and deploy Node.js app to Azure Web App - website-wandyezj

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: windows-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up Node.js version
      uses: actions/setup-node@v1
      with:
        node-version: '14.x'

    - name: npm install, build, and test
      run: |
        npm ci
        npm run build --if-present
        npm run test --if-present

    - name: 'Deploy to Azure Web App'
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'website-wandyezj'
        slot-name: 'production'
        publish-profile: ${{ secrets.AzureAppService_PublishProfile_47562e6d7c7d448d8fa32a46b92a7026 }}
        package: .\dist
```