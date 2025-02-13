// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export * from "./computeCluster";
export * from "./computeInstance";
export * from "./getWorkspace";
export * from "./inferenceCluster";
export * from "./synapseSpark";
export * from "./workspace";

// Import resources to register:
import { ComputeCluster } from "./computeCluster";
import { ComputeInstance } from "./computeInstance";
import { InferenceCluster } from "./inferenceCluster";
import { SynapseSpark } from "./synapseSpark";
import { Workspace } from "./workspace";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure:machinelearning/computeCluster:ComputeCluster":
                return new ComputeCluster(name, <any>undefined, { urn })
            case "azure:machinelearning/computeInstance:ComputeInstance":
                return new ComputeInstance(name, <any>undefined, { urn })
            case "azure:machinelearning/inferenceCluster:InferenceCluster":
                return new InferenceCluster(name, <any>undefined, { urn })
            case "azure:machinelearning/synapseSpark:SynapseSpark":
                return new SynapseSpark(name, <any>undefined, { urn })
            case "azure:machinelearning/workspace:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure", "machinelearning/computeCluster", _module)
pulumi.runtime.registerResourceModule("azure", "machinelearning/computeInstance", _module)
pulumi.runtime.registerResourceModule("azure", "machinelearning/inferenceCluster", _module)
pulumi.runtime.registerResourceModule("azure", "machinelearning/synapseSpark", _module)
pulumi.runtime.registerResourceModule("azure", "machinelearning/workspace", _module)
