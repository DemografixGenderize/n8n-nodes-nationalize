import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class DemografixNationalizeApi implements ICredentialType {
	name = 'demografixNationalizeApi';
	displayName = 'Nationalize API';
	documentationUrl = 'https://github.com/DemografixGenderize/n8n-nodes-nationalize?tab=readme-ov-file#credentials';
	icon = undefined;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				apikey: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.nationalize.io',
			url: '',
			qs: {
				name: 'test',
			},
		},
	};
}
