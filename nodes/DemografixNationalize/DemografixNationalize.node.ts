import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';

export class DemografixNationalize implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nationalize',
		name: 'demografixNationalize',
		icon: 'file:demografixNationalize.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Get nationality prediction for a given name using the Nationalize.io API (free tier: 2,500 requests/month)',
		defaults: {
			name: 'Nationalize',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'demografixNationalizeApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.nationalize.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Get Nationality',
						value: 'getNationality',
						action: 'Get nationality prediction for a name',
						description: 'Get the predicted countries of origin for a given name',
						routing: {
							request: {
								method: 'GET',
								url: '',
								qs: {
									name: '={{$parameter.name}}',
								},
							},
							output: {
								postReceive: [
									{
										type: 'set',
										properties: {
											value: '={{ { ...($response.body), "rateLimit": { "limit": $response.headers["x-rate-limit-limit"], "remaining": $response.headers["x-rate-limit-remaining"], "reset": $response.headers["x-rate-limit-reset"] } } }}',
										},
									},
								],
							},
						},
					},
				],
				default: 'getNationality',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'The name to get nationality prediction for. Last name is preferred; full names are auto-parsed to extract the last name.',
				placeholder: 'e.g., Johnson',
			},
		],
	};
}
