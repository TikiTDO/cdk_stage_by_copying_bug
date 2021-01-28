import * as ecrAssets from "@aws-cdk/aws-ecr-assets"
import * as cdk from "@aws-cdk/core"

import path from "path"

export default class ExampleStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    _options: cdk.StackProps
  ) {
    super(scope, id)

    new ecrAssets.DockerImageAsset(this, "exampleImage", {
      directory: path.join(__dirname, ".."),
      file: "docker/Dockerfile",
    })
  }
}