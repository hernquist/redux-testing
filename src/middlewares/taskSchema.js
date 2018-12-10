export default {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "loading",
    "error",
    "data"
  ],
  "properties": {
    "loading": {
      "$id": "#/properties/loading",
      "type": "boolean",
      "title": "The Loading Schema",
      "default": false,
      "examples": [
        false
      ]
    },
    "error": {
      "$id": "#/properties/error",
      "type": "object",
      "title": "The Error Schema"
    },
    "data": {
      "$id": "#/properties/data",
      "type": "array",
      "title": "The Data Schema",
      "items": {
        "$id": "#/properties/data/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "id",
          "title",
          "author",
          "status"
        ],
        "properties": {
          "id": {
            "$id": "#/properties/data/items/properties/id",
            "type": "integer",
            "title": "The Id Schema",
            "default": 0,
            "examples": [
              1
            ]
          },
          "title": {
            "$id": "#/properties/data/items/properties/title",
            "type": "string",
            "title": "The Title Schema",
            "default": "",
            "examples": [
              "packdown"
            ],
            "pattern": "^(.*)$"
          },
          "author": {
            "$id": "#/properties/data/items/properties/author",
            "type": "string",
            "title": "The Author Schema",
            "default": "",
            "examples": [
              "Darrol McDearmen"
            ],
            "pattern": "^(.*)$"
          },
          "status": {
            "$id": "#/properties/data/items/properties/status",
            "type": "string",
            "title": "The Status Schema",
            "default": "",
            "examples": [
              "COMPLETE"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    }
  }
}