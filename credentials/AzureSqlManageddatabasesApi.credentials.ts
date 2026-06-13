import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlManageddatabasesApi implements ICredentialType {
        name = 'N8nDevAzureSqlManageddatabasesApi';

        displayName = 'Azure SQL Manageddatabases API';

        icon: Icon = { light: 'file:../nodes/AzureSqlManageddatabases/azure-sql-manageddatabases.png', dark: 'file:../nodes/AzureSqlManageddatabases/azure-sql-manageddatabases.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Manageddatabases API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
