import * as cdk from "@aws-cdk/core"

import ExampleStack from "../app/ExampleStack"


const app = new cdk.App()
new ExampleStack(app, "ExampleStack", {})