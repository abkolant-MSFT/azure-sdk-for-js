/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RunCommandRequest,
  ContainerServiceClient
} from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to AKS will create a pod to run the command. This is primarily useful for private clusters. For more information see [AKS Run Command](https://docs.microsoft.com/azure/aks/private-clusters#aks-run-command-preview).
 *
 * @summary AKS will create a pod to run the command. This is primarily useful for private clusters. For more information see [AKS Run Command](https://docs.microsoft.com/azure/aks/private-clusters#aks-run-command-preview).
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-10-02-preview/examples/RunCommandRequest.json
 */
async function submitNewCommand() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const requestPayload: RunCommandRequest = {
    clusterToken: "",
    command: "kubectl apply -f ns.yaml",
    context: ""
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.beginRunCommandAndWait(
    resourceGroupName,
    resourceName,
    requestPayload
  );
  console.log(result);
}

submitNewCommand().catch(console.error);
