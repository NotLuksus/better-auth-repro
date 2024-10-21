/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "Api": {
      "bastion": string
      "type": "sst.aws.Vpc"
    }
    "BETTER_AUTH_SECRET": {
      "base64": string
      "hex": string
      "type": "random.index/randomBytes.RandomBytes"
    }
    "BETTER_AUTH_TRUSTED_ORIGINS": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "BETTER_AUTH_URL": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "CHROMA_API_KEY": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "CHROMA_DATABASE": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "CHROMA_HOST": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "CHROMA_TENANT": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Database": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Postgres"
      "username": string
    }
    "Files": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "Gotenberg": {
      "service": string
      "type": "sst.aws.Service"
      "url": string
    }
    "GraphRagApi": {
      "service": string
      "type": "sst.aws.Service"
      "url": string
    }
    "LESERATTE_API_KEY": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "LESERATTE_JWT_SECRET": {
      "base64": string
      "hex": string
      "type": "random.index/randomBytes.RandomBytes"
    }
    "LESERATTE_URL": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "LambdaEncryptionKey": {
      "base64": string
      "hex": string
      "type": "random.index/randomBytes.RandomBytes"
    }
    "OPENAI_API_KEY": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Web": {
      "type": "sst.aws.SolidStart"
      "url": string
    }
  }
}