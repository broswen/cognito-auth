"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "X-Forwarded-For": event.headers['X-Forwarded-For'],
        "client_id": event.requestContext.authorizer.claims.client_id,
        resourcePath: event.requestContext.resourcePath,
        httpMethod: event.requestContext.httpMethod,
        stage: event.requestContext.stage,
      }
    )
  }
}
