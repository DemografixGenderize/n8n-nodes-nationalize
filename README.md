# @demografix/n8n-nodes-nationalize

This is an n8n community node. It lets you use Nationalize.io in your n8n workflows.

Nationalize.io is a nationality prediction API that estimates the most likely countries of origin for a given name based on statistical analysis.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Get Nationality**: Predict the most likely countries of origin for a given name, ranked by probability

## Credentials

### Free Tier (No Authentication Required)
You can start using this node immediately without any credentials. The free tier provides:
- **100 requests per day** per IP address
- No signup required
- No API key needed

### Paid Tier (API Key Required)
For higher request volumes, you can subscribe to a paid plan at [nationalize.io](https://nationalize.io) with various tier options for increased rate limits.

**Setting up credentials:**
1. Sign up at [nationalize.io](https://nationalize.io)
2. Subscribe to a paid plan to receive your API key
3. In n8n, create new "Nationalize API" credentials
4. Enter your API key
5. Test the credentials to verify they work

## Compatibility

This node is built using n8n's declarative style and requires n8n version 1.0 or later.

## Usage

### Basic Example
1. Add the "Nationalize" node to your workflow
2. Enter a name (e.g., "Johnson", "Bakshi", "Nguyen") — last name is preferred
3. Execute the node

### Response Data
The node returns the following data:
- `name`: The name that was queried
- `count`: Number of data samples used for this prediction
- `country`: Array of up to 5 country predictions, each with:
  - `country_id`: ISO 3166-1 alpha-2 country code (e.g., "US", "GB", "DK")
  - `probability`: Confidence score (0–1, where 1 is 100% confident)
- `rateLimit.limit`: Total requests allowed in current period
- `rateLimit.remaining`: Requests remaining in current period
- `rateLimit.reset`: Seconds until the rate limit window resets

### Tips
- The API attempts to parse full names and extract the last name automatically
- Diacritics are normalised before matching
- Use the `rateLimit` data to monitor your API usage and avoid hitting limits
- Country codes follow the ISO 3166-1 alpha-2 standard

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Nationalize.io official website](https://nationalize.io)
- [Nationalize.io API documentation](https://nationalize.io/documentation)
