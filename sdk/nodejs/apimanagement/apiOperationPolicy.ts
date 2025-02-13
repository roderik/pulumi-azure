// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an API Management API Operation Policy
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleApiOperation = new azure.apimanagement.ApiOperation("exampleApiOperation", {});
 * //...
 * const exampleApiOperationPolicy = new azure.apimanagement.ApiOperationPolicy("exampleApiOperationPolicy", {
 *     apiName: exampleApiOperation.apiName,
 *     apiManagementName: exampleApiOperation.apiManagementName,
 *     resourceGroupName: exampleApiOperation.resourceGroupName,
 *     operationId: exampleApiOperation.operationId,
 *     xmlContent: `<policies>
 *   <inbound>
 *     <find-and-replace from="xyz" to="abc" />
 *   </inbound>
 * </policies>
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * API Management API Operation Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiOperationPolicy:ApiOperationPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/instance1/apis/api1/operations/operation1/policies/policy
 * ```
 */
export class ApiOperationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ApiOperationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiOperationPolicyState, opts?: pulumi.CustomResourceOptions): ApiOperationPolicy {
        return new ApiOperationPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:apimanagement/apiOperationPolicy:ApiOperationPolicy';

    /**
     * Returns true if the given object is an instance of ApiOperationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiOperationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiOperationPolicy.__pulumiType;
    }

    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: pulumi.Output<string>;
    /**
     * The ID of the API Management API Operation within the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly apiName!: pulumi.Output<string>;
    /**
     * The operation identifier within an API. Must be unique in the current API Management service instance.
     */
    public readonly operationId!: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The XML Content for this Policy.
     */
    public readonly xmlContent!: pulumi.Output<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    public readonly xmlLink!: pulumi.Output<string | undefined>;

    /**
     * Create a ApiOperationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiOperationPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiOperationPolicyArgs | ApiOperationPolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiOperationPolicyState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["apiName"] = state ? state.apiName : undefined;
            inputs["operationId"] = state ? state.operationId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["xmlContent"] = state ? state.xmlContent : undefined;
            inputs["xmlLink"] = state ? state.xmlLink : undefined;
        } else {
            const args = argsOrState as ApiOperationPolicyArgs | undefined;
            if ((!args || args.apiManagementName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if ((!args || args.apiName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiName'");
            }
            if ((!args || args.operationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operationId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["apiName"] = args ? args.apiName : undefined;
            inputs["operationId"] = args ? args.operationId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["xmlContent"] = args ? args.xmlContent : undefined;
            inputs["xmlLink"] = args ? args.xmlLink : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(ApiOperationPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApiOperationPolicy resources.
 */
export interface ApiOperationPolicyState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The ID of the API Management API Operation within the API Management Service. Changing this forces a new resource to be created.
     */
    apiName?: pulumi.Input<string>;
    /**
     * The operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The XML Content for this Policy.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiOperationPolicy resource.
 */
export interface ApiOperationPolicyArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The ID of the API Management API Operation within the API Management Service. Changing this forces a new resource to be created.
     */
    apiName: pulumi.Input<string>;
    /**
     * The operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The XML Content for this Policy.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}
