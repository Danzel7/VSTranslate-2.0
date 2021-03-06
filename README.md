# internationalize

## Notes

- Different version to previous translate
- Used more of Vue's features
- Improved the UI
- Was having problems with the api endpoints so I just used sample data

## Setup

Ensure you have node installed

```bash
npm install
node app
```

Navigate to http://localhost:3000


## Instructions


- Use the search box to filter by label
- Edit a translation using the input and hit enter (saved should appear)
- Browserify library included to allow for require to be used in js and vue files




## API Calls

### api/language

Method: Get

Request Params Required:
* file
* language
* blanks

Default behaviour should be to use blanks=true

Response

Success

```
{
	"file": "messages.properties",
	"language": "en",
	"properties": [
		{
			"name": "settings.name",
			"value": "name",
			"id": 0
		}
	]
}
```


### api/language

Method: Post

Request Params Required:

```
{
	'id': 0, //NOT MANDATORY, should not be present on inserts
	'property': 'string upto 500 chars',
	'filename': 'filename up to 250 chars',
	'language': 'filename up to 250 chars',
	'textvalue': 'massive text value'
}
```

Response


Success

Http Code: 200

```
{
	'property': 'string upto 500 chars',
	'filename': 'filename up to 250 chars',
	'language': 'filename up to 250 chars',
	'textvalue': 'massive text value'
}
```


## To run acceptance tests

```bash
cd test/acceptance
npm install
```

Now to execute tests run

```
nightwatch  --config nightwatch.config.js
```
